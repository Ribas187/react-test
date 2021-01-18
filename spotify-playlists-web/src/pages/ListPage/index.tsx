import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Container, Title, Playlists, Pagination } from './styles';
import PlaylistItem, { Playlist } from '../../components/PlaylistItem';
import FiltersForm, { SearchData } from '../../components/FiltersForm';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Locale {
  name: string;
  value: string;
}

interface Country {
  name: string;
  value: string;
}

const ListPage: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [currentParams, setCurrentParams] = useState<SearchData>(
    {} as SearchData,
  );
  const [page, setPage] = useState(0);
  const [locales, setLocales] = useState<Locale[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);

  const fetcher = useCallback(
    async url => {
      const response = await api.get(url, {
        params: currentParams,
      });

      return response.data;
    },
    [currentParams],
  );

  const { data: swrData } = useSWR('/browse/featured-playlists', fetcher, {
    refreshInterval: 30000,
  });

  useEffect(() => {
    async function loadData() {
      const filtersResponse = await axios.get(
        'http://www.mocky.io/v2/5a25fade2e0000213aa90776',
      );

      const filters = filtersResponse.data.filters;

      setLocales(
        filters.find((filter: { id: string }) => filter.id === 'locale').values,
      );
      setCountries(
        filters.find((filter: { id: string }) => filter.id === 'country')
          .values,
      );

      if (!swrData) return;

      setPlaylists(swrData.playlists.items);
    }

    loadData();
  }, [swrData]);

  const handleSearch = useCallback(async (data: SearchData) => {
    const response = await api.get('/browse/featured-playlists', {
      params: data,
    });

    setCurrentParams(data);
    setPlaylists(response.data.playlists.items);
  }, []);

  const handleFilterByName = useCallback(
    (name: string) => {
      const filterName = name.trim().toLowerCase();

      if (!filterName) {
        handleSearch(currentParams);
        return;
      }

      setPlaylists(prevState =>
        prevState.filter(
          playlists => playlists.name.toLowerCase().indexOf(filterName) >= 0,
        ),
      );
    },
    [currentParams, handleSearch],
  );

  return (
    <Container>
      <img src={logoImg} alt="Spotify Logo" />
      <Title>Explore as playlists do momento do Spotify</Title>

      <FiltersForm
        locales={locales}
        countries={countries}
        onSearch={handleSearch}
        onNameFilter={handleFilterByName}
      />

      <Playlists>
        {playlists.length > 0 ? (
          playlists.map(playlist => (
            <PlaylistItem key={playlist.id} playlist={playlist} />
          ))
        ) : (
          <div id="not-found">
            <strong>Nada encontrado...</strong>
          </div>
        )}
      </Playlists>

      <Pagination>
        <button
          disabled={page < 1}
          onClick={() => {
            handleSearch({
              ...currentParams,
              offset: (page - 1) * (currentParams.limit || 20),
            });
            setPage(prevState => prevState - 1);
          }}
        >
          <FiChevronLeft size={40} />
        </button>
        Página {page + 1}
        <button
          onClick={() => {
            handleSearch({
              ...currentParams,
              offset: (page + 1) * (currentParams.limit || 20),
            });
            setPage(prevState => prevState + 1);
          }}
        >
          <FiChevronRight size={40} />
        </button>
      </Pagination>
    </Container>
  );
};

export default ListPage;
