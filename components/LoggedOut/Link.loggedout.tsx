import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { primaryColor } from '../../constants'
primaryColor

interface Props{
    label : string
    onPress: () => void
}

const LoginLink = ({label, ...props} : Props) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={tw.style({ color: primaryColor })}>{ label }</Text>
      </TouchableOpacity>
    )
}

export default LoginLink
