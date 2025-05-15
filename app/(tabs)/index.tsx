import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Portfolio } from '@/components/Portfolio';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TopicButtons from '@/components/TopicButton';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#000000' }}
      headerImage={ 
        <Image
          source={require('@/assets/images/adamnaeman-profile-1.jpg')}
          style={styles.profileBanner}
        />
      }
      >
      <Image
          source={require('@/assets/images/adamnaeman-profile-1.jpg')}
          style={styles.profileLogo}
        />
      <ThemedView style={styles.header}>
        <ThemedText type="title" >Adamnaeman</ThemedText>
      </ThemedView>
      <TopicButtons/>
      <Portfolio/>
      <Portfolio/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  profileBanner: {
    height: 300,
    width: 390,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
  },
  profileLogo: {
    height: 100, 
    width: 100, 
    alignSelf: 'center', 
    borderRadius: 100, 
    borderWidth: 3, 
    borderColor: '#fff'
  },
  buttonTopic: {
    alignSelf: 'center',
    backgroundColor: '#111100',
    padding: 5,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 10
  }
});
