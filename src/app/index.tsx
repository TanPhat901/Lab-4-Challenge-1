import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
];

export default function Magic8Ball() {
  const [answer, setAnswer] = useState('Ask Me Anything');

  const askQuestion = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      
      <Text style={styles.title}>Ask Me Anything</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={askQuestion}>
        <View style={styles.ballOuter}>
          <View style={styles.ballInner}>
            <View style={styles.triangle}>
              <Text style={styles.answerText}>{answer}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 60,
    letterSpacing: 2,
  },
  ballOuter: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  ballInner: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  triangle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  answerText: {
    color: '#03A9F4',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
