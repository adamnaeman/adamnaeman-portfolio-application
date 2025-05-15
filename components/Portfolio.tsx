import PortfolioCard from '@/components/cards/PortfolioCard';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';


  


export function Portfolio(){
    const projects = [
        {
            id: '1',
            title: 'E-Commerce Mobile App',
            description: 'A full-featured',
            tags: ['React Native', 'Redux', 'Firebase'],
            imageUrl: 'https://example.com/ecommerce-preview.jpg',
            onPress: () => console.log('E-Commerce project pressed'),
        }
    ]
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardList}>
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              onPress={project.onPress}
              style={styles.card}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
  },
  scrollView: {
    flex: 1,
  },
  cardList: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
})