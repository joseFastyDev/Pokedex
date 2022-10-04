import React from "react";
import { Image, Text, View } from 'react-native'
import { styles } from "../theme/appTheme";

export const HomeScreen = () => {
    return (
        <View>
            <Image 
                source={ require('../assets/pokebola.png')}
                style={ styles.pokebolaBG }
            />
            <Text>HomeScreen</Text>
        </View>
    )
}

