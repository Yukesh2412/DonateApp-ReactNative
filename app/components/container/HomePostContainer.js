import React from 'react';
import {StyleSheet,View,} from 'react-native';
import HomePostCard from '../cards/HomePostCard';

function HomePostContainer(props) {
    return (
      <View>
         <HomePostCard/>
         <HomePostCard/>
         <HomePostCard/>     
      </View>
       
    );
}
const styles = StyleSheet.create({
 
})
export default HomePostContainer;