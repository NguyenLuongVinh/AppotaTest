import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <IonIcons
        name="arrow-back"
        size={28}
        color={'#8c35d6'}
        style={styles.iconBack}
      />
      <View style={styles.avataView}>
        <Image
          source={{uri: 'https://placeimg.com/140/140/any'}}
          style={styles.avataOne}
        />
        <Image
          source={{uri: 'https://placeimg.com/140/140/any'}}
          style={styles.avataTwo}
        />
        <EntypoIcons
          name="dot-single"
          size={30}
          color={'#35d649'}
          style={styles.onlineDot}
        />
      </View>
      <View style={styles.groupNameView}>
        <Text numberOfLines={1} style={styles.txtGroupName}>
          Team 3 - Tốc chiến
        </Text>
      </View>
      <FontAwesomeIcons
        name="phone"
        size={25}
        color={'#8c35d6'}
        style={styles.iconPhone}
      />
      <FontAwesomeIcons
        name="video-camera"
        size={25}
        color={'#8c35d6'}
        style={styles.iconVideoCamera}
      />
      <EntypoIcons
        name="dot-single"
        size={20}
        color={'#35d649'}
        style={styles.iconDotCamera}
      />
      <MaterialIcons
        name="info"
        size={25}
        color={'#8c35d6'}
        style={styles.iconInfo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  iconBack: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  avataView: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  avataOne: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 20,
  },
  avataTwo: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    borderRadius: 10,
    marginLeft: -10,
    marginTop: 10,
  },
  onlineDot: {
    alignSelf: 'center',
    marginLeft: -20,
    marginTop: 20,
  },
  groupNameView: {
    flex: 1,
    justifyContent: 'center',
  },
  txtGroupName: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18,
    width: '100%',
  },
  iconPhone: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  iconVideoCamera: {
    alignSelf: 'center',
    marginLeft: 15,
  },
  iconDotCamera: {
    alignSelf: 'center',
    marginLeft: -5,
  },
  iconInfo: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
export default ChatHeader;
