import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { textInputText } from '../constants';

interface Props {
  label: string;
  description: string;
  style?: any;
}

const Description = ({label, description, style, ...props}: Props) => {
    return (
      <View style={{ maxWidth: 350, width: '100%', ...style }}>
            <Text style={{ fontSize: 40, fontWeight: '900', marginBottom: 16 }}>{label}</Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: textInputText}}>{ description }</Text>
      </View>
    );
}

export default Description

const styles = StyleSheet.create({})
