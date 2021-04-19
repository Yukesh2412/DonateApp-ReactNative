import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions,
  } from 'react-native';
//import {Icon} from 'react-native-elements';
// import { Icon, InlineIcon } from '@iconify/react';
// import MoreCircle20Regular from '@iconify/icons-fluent/more-circle-20-regular';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../../config/color';


function HomePostCard(props) {
    return (
        <View style={styles.contentView}>
        <View style={[styles.post, { marginTop: 0 }]}>
          <View style={styles.postHeader}>
            <Image
              style={styles.postUserImage}
              source={{
                uri: 'https://randomuser.me/api/portraits/men/46.jpg',
              }}
            />
            <View style={styles.postUserNameContainer}>
            <Text style={styles.postUsernameText}>Yukesh</Text>
            <Text style={styles.postUsernameCity}>Chennai</Text>
            </View>
            <Icon size={24} color="red" name="hamburger" />
            {/* <Icon icon={MoreCircle20Regular} style={{fontSize: '20px'}} /> */}
          </View>
          <View style={styles.postContent}>
            <Image
              style={styles.postImage}
              source={{
                uri:
                  'https://images.pexels.com/photos/4761916/pexels-photo-4761916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
            />
          </View>
          <View style={styles.postActions}>
            <View style={styles.postActionsLeftView}>
              <TouchableOpacity
                style={[styles.postActionIcon, { paddingLeft: 0 }]}
              >
                <Icon size={24} color="black" name="heart" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.postActionIcon}>
                {/* <Icon size={24} color="red" name="comment" /> */}
                <Text style={{fontSize:17, color:color.Textfade}}>7.k</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                {/* <Icon name='bookmark' type='font-awesome-5' size={30} /> */}
                <Icon size={24} color="black" name="bookmark" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postDescView}>
            <View style={styles.postDescTextView}>
              <Text style={styles.postDescUsernameText}>
                Mine
                <Text style={styles.postDescText}>
                  {
                    ' Motherlight of the year goes to android emulator that sucks every developers day'
                  }
                </Text>
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: '#333' }}>{`4 minutes ago`}</Text>
            </View>
          </View>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contentView: {
        marginTop: 1,
      },
      post: {
        borderWidth: 1,
        borderColor: '#f1f3f6',
      },
      postHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#dfe4ea',
        borderTopColor: '#dfe4ea',
        backgroundColor: '#fff',
        height:68
      },
      postUserImage: {
        width: 48,
        height: 48,
        borderRadius: 100,
      },
      postUserNameContainer:{
        flex:1,
        flexDirection:'column',
        marginLeft:15
      },
      postUsernameText: {
        fontWeight:'bold',
        fontSize:16,
        fontFamily:'Roboto'
       
      },
      postUsernameCity: {      
        fontSize:12,
        marginLeft:2
      },
     
      postContent: {
        backgroundColor: '#fafafa',
      },
      postImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'contain',
      },
      postActions: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#dfe4ea',
        paddingVertical: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      postActionsLeftView: {
        display: 'flex',
        flexDirection: 'row',
      },
      postActionIcon: {
        paddingHorizontal: 6,
      },
      postDescView: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dfe4ea',
      },
      postDescText: {
        fontSize: 16,
        fontWeight: '300',
      },
      postDescUsernameText: {
        fontWeight: 'bold',
        marginTop: 6,
        fontSize: 16,
      },
    
})
export default HomePostCard;
