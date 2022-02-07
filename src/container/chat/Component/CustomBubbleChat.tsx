import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {
  InputToolbar,
  Actions,
  Composer,
  Send,
  Bubble,
  MessageText,
} from 'react-native-gifted-chat';

const ActionView = React.memo(props => {
  return (
    <>
      <Actions
        {...props}
        containerStyle={styles.iconGrid}
        icon={() => <EntypoIcons name="grid" size={25} color={'#3485f7'} />}
      />
      <Actions
        {...props}
        containerStyle={styles.iconAction}
        icon={() => (
          <FontAwesomeIcons name="camera" size={20} color={'#3485f7'} />
        )}
      />
      <Actions
        {...props}
        containerStyle={styles.iconAction}
        icon={() => (
          <FontAwesomeIcons name="image" size={20} color={'#3485f7'} />
        )}
      />
      <Actions
        {...props}
        containerStyle={styles.iconAction}
        icon={() => (
          <FontAwesomeIcons name="microphone" size={20} color={'#3485f7'} />
        )}
      />
    </>
  );
});

export const renderSend = (props: any) => {
  return (
    <Send {...props} alwaysShowSend={true} containerStyle={styles.iconSendCtn}>
      {
        <AntIcon
          name={'like1'}
          size={20}
          color={'#3485f7'}
          style={styles.iconSend}
        />
      }
    </Send>
  );
};

export const renderInputToolbar = (props: any) => (
  <InputToolbar
    {...props}
    containerStyle={styles.inputToolbarCtn}
    renderActions={renderActions}
  />
);

export const renderActions = (props: any) => {
  return <ActionView {...props} />;
};

export const renderComposer = (props: any) => (
  <Composer {...props} textInputStyle={styles.txtComposer} />
);

export const renderBubble = (props: any) => {
  const {position} = props;
  return (
    <View>
      {position === 'left' && <Text style={styles.txtUserName}>Vinh</Text>}
      <Bubble
        {...props}
        wrapperStyle={{
          left: {backgroundColor: '#454747'}, // Changes dynamically
          right: {backgroundColor: '#3485f7'}, // Changes dynamically
        }}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        renderMessageText={(props: any) => {
          return (
            <MessageText
              {...props}
              textStyle={{
                left: {color: '#ffffff'}, // Does not change dynamically
                right: {color: '#ffffff'},
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGrid: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 14,
  },
  iconAction: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 12,
  },
  iconSendCtn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconSend: {
    alignSelf: 'flex-end',
    margin: 10,
    marginHorizontal: 5,
  },
  inputToolbarCtn: {
    backgroundColor: 'black',
  },
  txtComposer: {
    color: '#fff',
    backgroundColor: '#454747',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#454747',
    paddingHorizontal: 12,
    paddingTop: 8,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtUserName: {
    color: '#8A8888',
    marginBottom: 5,
  },
});
