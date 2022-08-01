import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormRow = props => {

    const { children,first,last } = props;
    return (
        <View style={[
            Styles.container, 
            first ? Styles.first:null,
            last ? Styles.last : null
            ]}>
            {children}

        </View>

    )


};
const Styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white',
        marginTop:5,
        marginBottom:5,
        elevation:1,

    },
    first:{
        marginTop:10,

    },
    last:{
        marginBottom:10,
    }

});

export default FormRow;
