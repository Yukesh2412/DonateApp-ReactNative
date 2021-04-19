import React from 'react';
import {View,ScrollView,useState,StyleSheet,Dimensions,TouchableOpacity,Image,Text} from 'react-native'
//import Elevations from 'react-native-elevation'

function trimName(name) {
  let nameRest = name.split(' ').join('').slice(8);
  if (nameRest.length > 0) {
    return name.split(' ').join('').slice(0, 8).toLowerCase() + '...';
  }
  return name.split(' ').join('').slice(0, 8).toLowerCase();
}

function StatusCard({title,image}) {
    return (    
     
            <View style={styles.storyView}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.storyHolder}>
                  <View style={styles.storyUserView}>
                    <Image style={styles.storyUserImage} source={{uri:image}} />         
                  </View>
                  <Text style={styles.storyUsernameText}>{trimName(title)}</Text>  
                </View>
              </ScrollView>
            </View>
        
          
      
    );
}

const styles = StyleSheet.create({
    container: {},

    storyView: {
      paddingVertical: 2,
      marginTop: 2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',  
     
    
    },
    storyHolder: {
    //   paddingHorizontal: 10,
      alignItems: 'center',
      width:85,
      height:95,

    },
    storyUserView: {
      position: 'relative',
      elevation:20
       
    },
    storyUsernameText: {
      marginTop: 4,
      color:'#000'
    },
    storyUserImage: {
      width:67,
      height:67,
      borderRadius: 100,
      borderWidth:2,
      borderColor:'red'
    },


  });
export default StatusCard;