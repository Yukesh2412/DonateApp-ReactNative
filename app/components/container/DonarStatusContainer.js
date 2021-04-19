import React from 'react';
import { View,StyleSheet,FlatList,Text} from 'react-native';
import StatusCard from '../cards/StatusCard'

const listings = [
    {
      id: 1,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 2,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 3,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 4,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 5,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 6,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 7,
      title: "Red",
      image:'https://randomuser.me/api/portraits/men/46.jpg',
    },
    
  ];
  
function DonarStatusContainer(props) {
    return (

    <View style={styles.container}>    
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <StatusCard 
            title={item.title}     
            image={item.image}
          />       
        )}
      />
    </View>      
    );
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:10,
        backgroundColor:'#fff',      
    },    
})

export default DonarStatusContainer;