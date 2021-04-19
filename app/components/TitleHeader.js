import React from 'react';
import { View,Text,StyleSheet, } from 'react-native';
import color from '../config/color'


function TitleHeader({name}) {
    console.log(name);
    return (
        <View style={styles.titlecontainer}>
        <Text style={styles.titletext}>{name}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    titlecontainer:{
        width:"100%",
        height:56,
        backgroundColor:color.white,
        paddingTop:10,
        elevation:2
    },

    titletext:{
        justifyContent:'flex-start',
        marginLeft:20,
        color:color.Title,
        fontSize:30,
        fontWeight:'bold'     
    }
})

export default TitleHeader;