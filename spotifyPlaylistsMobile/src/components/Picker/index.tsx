import React from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

const Picker: React.FC<PickerSelectProps> = props => {
  return (
    <RNPickerSelect
      {...props}
      style={{
        inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 5,
          color: 'black',
          paddingRight: 30,
          backgroundColor: 'white',
          height: 45,
        },
        inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 5,
          color: 'black',
          paddingRight: 30,
          backgroundColor: 'white',
          height: 45,
        },
      }}
    />
  );
};

export default Picker;
