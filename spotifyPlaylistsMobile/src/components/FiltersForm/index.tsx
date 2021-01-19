import React, { useCallback, useMemo, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  Form,
  FilterButton,
  SearchArea,
  NameInput,
  Filters,
  FiltersTitle,
  InputGroup,
  InputLabel,
  DateButton,
  DateButtonText,
  InputText,
  SearchButton,
  SearchButtonText,
} from './styles';
import Picker from '../Picker';
import { format } from 'date-fns';
import { Platform, TouchableWithoutFeedback } from 'react-native';

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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('BR');
  const [date, setDate] = useState(new Date());
  const [limit, setLimit] = useState('20');

  const handleFilterSearch = () => {
    const data = {
      offset: 0,
      country: country,
      locale,
      limit: Number(limit) || 20,
      timestamp: searchFormatDate,
    } as SearchData;

    onSearch(data);
    setIsModalOpen(false);
  };

  const handleNameFilter = useCallback(
    (nameInput: string) => {
      onNameFilter(nameInput || '');
    },
    [onNameFilter],
  );

  const handleChangeDate = (_: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const searchFormatDate = useMemo(() => {
    const formatted = format(date, "yyyy-MM-dd'T'HH:mm:ss");

    return formatted;
  }, [date]);

  const formattedDate = useMemo(() => {
    const formatted = format(date, 'dd/MM/yyyy');

    return formatted;
  }, [date]);

  return (
    <Container>
      <Form>
        <SearchArea>
          <NameInput
            placeholder="Digite o nome para filtrar"
            onChangeText={e => handleNameFilter(e)}
          />
          <FilterButton onPress={() => setIsModalOpen(true)}>
            <Icon name="filter-list" size={30} color="#fff" />
          </FilterButton>
        </SearchArea>
      </Form>

      <Modal
        isVisible={isModalOpen}
        backdropOpacity={0.3}
        onBackdropPress={() => setIsModalOpen(false)}
      >
        <Filters>
          <FiltersTitle>Filtros</FiltersTitle>

          <InputGroup>
            <InputLabel>Localidade</InputLabel>
            <Picker
              placeholder={{ label: 'Selecione uma localidade' }}
              onValueChange={e => setLocale(e)}
              items={locales.map(locale => ({
                label: locale.name,
                value: locale.value,
              }))}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel>País</InputLabel>
            <Picker
              placeholder={{ label: 'Selecione um país' }}
              onValueChange={e => setCountry(e)}
              items={countries.map(country => ({
                label: country.name,
                value: country.value,
              }))}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel>Data</InputLabel>
            <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
              <DateButton>
                <DateButtonText>{formattedDate}</DateButtonText>
              </DateButton>
            </TouchableWithoutFeedback>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                display="default"
                mode="date"
                onChange={handleChangeDate}
              />
            )}
          </InputGroup>

          <InputGroup>
            <InputLabel>Limite (1/50)</InputLabel>
            <InputText
              value={limit}
              onChangeText={e => setLimit(e)}
              keyboardType="numeric"
            />
          </InputGroup>

          <TouchableWithoutFeedback onPress={handleFilterSearch}>
            <SearchButton>
              <SearchButtonText>Pesquisar</SearchButtonText>
            </SearchButton>
          </TouchableWithoutFeedback>
        </Filters>
      </Modal>
    </Container>
  );
};

export default FiltersForm;
