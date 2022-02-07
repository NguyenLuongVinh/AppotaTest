import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import ChatHeader from './Component/ChatHeader';
import {
  renderSend,
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderBubble,
} from './Component/CustomBubbleChat';
const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  interface User {
    _id: number;
    name: string;
    avatar: string;
  }

  interface Message {
    _id: number;
    text: string;
    createdAt: Date;
    user: User;
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((mes = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, mes));
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ChatHeader />
        <GiftedChat
          messages={messages}
          onSend={(mes: any) => onSend(mes)}
          user={{
            _id: 1,
          }}
          isTyping={true}
          placeholder={'Aa'}
          renderActions={renderActions}
          renderComposer={renderComposer}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
          renderBubble={renderBubble}
          scrollToBottom
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
});

export default ChatContainer;
