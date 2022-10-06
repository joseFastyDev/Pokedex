import React from 'react';
import { View, Platform, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';

export const SearchScreen = () => {
    
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if ( isFetching ) {
        return (
            <View style={ styles.activityContainer }>
                <ActivityIndicator
                    size={ 50 }
                    color="grey"
                />

                <Text>Cargando...</Text>
            </View>
        )
    }
    return (
        <View style={{ 
            flex: 1,
            marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20
        }}>

            <SearchInput />

        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});