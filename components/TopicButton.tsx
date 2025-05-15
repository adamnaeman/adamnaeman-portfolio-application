import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'; // Import your themed components
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TopicButtons = () => {
  const topics = [
    'Mobile Development',
    'Photography',
    'Video Editing',
    'UI/UX Design',
    'Web Development',
    'Machine Learning',
    'Data Science'
  ];

  const handleTopicPress = (topic: string) => {
    console.log(`Selected topic: ${topic}`);
    // Add your button press logic here
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTopicPress(topic)}
          activeOpacity={0.7}
        >
          <ThemedView style={styles.buttonContainer}>
            <ThemedText type="defaultSemiBold" style={styles.buttonTopic}>
              {topic}
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonContainer: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  buttonTopic: {
    fontSize: 14,
  },
});

export default TopicButtons;