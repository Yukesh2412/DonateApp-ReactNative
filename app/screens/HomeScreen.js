import React from 'react';
import { View,StyleSheet} from 'react-native';
//import Status from '../components/Status';
import TitleHeader from '../components/TitleHeader'
import DonarStatusContainer from '../components/container/DonarStatusContainer'
import HomePostContainer from '../components/container/HomePostContainer';
import { ScrollView } from 'react-native';
function HomeScreen({props}) {
    return (
        <ScrollView style={styles.container}>
             <TitleHeader name='Welcome Yukesh'></TitleHeader>
             <DonarStatusContainer/>  
             <HomePostContainer/>          
        </ScrollView>     
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',  
    } 
})

export default HomeScreen;