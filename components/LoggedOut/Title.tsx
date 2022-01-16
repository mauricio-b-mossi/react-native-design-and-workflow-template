import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import tw from 'tailwind-react-native-classnames'

interface Props {
  label: string;
}

const Title = ({label } : Props) => {
    return (
      <View style={{ width: '100%',maxWidth: 350}}>
            <Text style={ { fontSize: 40, fontWeight: '900' }}>{ label }</Text>
      </View>
    );
}

export default Title
