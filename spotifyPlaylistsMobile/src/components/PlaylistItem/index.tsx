import React from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  PlaylistImage,
  Content,
  Info,
  PlaylistName,
  PlaylistOwner,
  PlaylistDescription,
} from './styles';

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

  const handleGoToPage = () => {
    Linking.openURL(playlist.external_urls.spotify);
  };

  return (
    <Container onPress={handleGoToPage}>
      <PlaylistImage
        source={{ uri: playlist.images[0].url }}
        resizeMode="contain"
      />

      <Content>
        <Info>
          <PlaylistName>{playlist.name}</PlaylistName>
          <PlaylistOwner>Dono: {playlist.owner.display_name}</PlaylistOwner>
          <PlaylistDescription>{playlist.description}</PlaylistDescription>
        </Info>

        <Icon name="chevron-right" size={20} />
      </Content>
    </Container>
  );
};

export default PlaylistItem;
