import { useCallback, useRef, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Filters, Form, Modal, Select } from './styles';

export interface SearchData {
  offset: number;
  name: string;
  country: string;
  locale: string;
  timestamp: string | Date;
  limit: number;
}

interface FiltersFormProps {
  countries: Array<{
    name: string;
    value: string;
  }>;
  locales: Array<{
    name: string;
    value: string;
  }>;
  onSearch(data: SearchData): Promise<void>;
  onNameFilter(name: string): void;
}

const FiltersForm: React.FC<FiltersFormProps> = props => {
  const { countries, locales, onSearch, onNameFilter } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('BR');

  const nameFilterRef = useRef<HTMLInputElement>(null);
  const dateTimeRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleFilterSearch = useCallback(() => {
    if (!quantityRef.current || !dateTimeRef.current) {
      return;
    }

    const timestampFormatted = dateTimeRef.current.value
      ? `${dateTimeRef.current.value}:00`
      : new Date();

    const data = {
      offset: 0,
      country: country,
      locale,
      limit: Number(quantityRef.current.value) || 20,
      timestamp: timestampFormatted,
    } as SearchData;

    onSearch(data);
    setIsModalOpen(false);
  }, [country, locale, onSearch]);

  const handleNameFilter = useCallback(() => {
    onNameFilter(nameFilterRef.current?.value || '');
  }, [onNameFilter]);

  return (
    <>
      <Form>
        <button
          className="filter-button"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          <BsFilter size={30} />
        </button>

        <div id="search-area">
          <input
            ref={nameFilterRef}
            placeholder="Digite o nome da playlist"
            onKeyDown={e => {
              if (e.key === 'Enter') handleNameFilter();
            }}
          />
          <button
            className="search-button"
            type="button"
            onClick={handleNameFilter}
          >
            Pesquisar
          </button>
        </div>
      </Form>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Filters>
            <strong>Filtros</strong>

            <div className="inputs-group">
              <div className="input-group">
                <span>Localidade</span>
                <Select
                  value={locale}
                  onChange={e => setLocale(e.target.value)}
                >
                  <option value="">Selecione uma localidade</option>
                  {locales.map(locale => (
                    <option key={locale.value} value={locale.value}>
                      {locale.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="input-group">
                <span>País</span>
                <Select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                >
                  {countries.map(country => (
                    <option key={country.value} value={country.value}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="inputs-group">
              <div className="input-group">
                <span>Data e Hora</span>
                <input ref={dateTimeRef} type="datetime-local" />
              </div>
              <div className="input-group">
                <span>Limite (1/50)</span>
                <input
                  ref={quantityRef}
                  defaultValue={20}
                  type="number"
                  min={1}
                  max={50}
                />
              </div>
            </div>

            <button
              className="filter-button-search"
              type="button"
              onClick={handleFilterSearch}
            >
              Pesquisar
            </button>
          </Filters>
        </Fade>
      </Modal>
    </>
  );
};

export default FiltersForm;
