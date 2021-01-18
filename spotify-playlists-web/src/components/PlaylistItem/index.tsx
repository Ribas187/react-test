import { FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

export interface Playlist {
  id: string;
  name: string;
  description: string;
  images: Array<{
    url: string;
  }>;
  owner: {
    display_name: string;
  };
  external_urls: {
    spotify: string;
  };
}

interface ItemProps {
  playlist: Playlist;
}

const PlaylistItem: React.FC<ItemProps> = props => {
  const { playlist } = props;

  return (
    <Container href={playlist.external_urls.spotify} target="_blank">
      <img src={playlist.images[0].url} alt={playlist.name} />

      <div id="content">
        <div>
          <strong>{playlist.name}</strong>
          <span>Dono: {playlist.owner.display_name}</span>
          <p>{playlist.description}</p>
        </div>

        <FiChevronRight size={20} />
      </div>
    </Container>
  );
};

export default PlaylistItem;
