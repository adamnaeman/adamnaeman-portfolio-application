import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

const TextSliderDemo: React.FC = () => {
  const [showTextControls, setShowTextControls] = useState<boolean>(true);
  const [activeType, setActiveType] = useState<'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'>('default');
  
  const textTypes: ('default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link')[] = [
    'default', 
    'title', 
    'defaultSemiBold', 
    'subtitle', 
    'link'
  ];
  
  const getTypeButtonStyle = (type: string) => [
    styles.typeButton,
    activeType === type ? styles.activeTypeButton : null,
  ];
  
  const getTypeTextStyle = (type: string) => [
    styles.typeButtonText,
    activeType === type ? styles.activeTypeButtonText : null,
  ];
  
  const sampleText = "This is a sample text that demonstrates the theme customization capabilities.";
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Text Theme Customization</Text>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Text Controls</Text>
            <Switch
              value={showTextControls}
              onValueChange={setShowTextControls}
              trackColor={{ false: '#D1D1D6', true: '#81b0ff' }}
              thumbColor={showTextControls ? '#4F8EF7' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.typeSelectorContainer}>
            <Text style={styles.sectionSubtitle}>Select Text Type:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typeSelector}>
              {textTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={getTypeButtonStyle(type)}
                  onPress={() => setActiveType(type)}
                >
                  <Text style={getTypeTextStyle(type)}>{type}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <View style={styles.previewContainer}>
            <Text style={styles.previewLabel}>Text Preview:</Text>
            <ThemedText 
              type={activeType}
              showControls={showTextControls}
            >
              {sampleText}
              {activeType === 'title' && " (Title Style)"}
              {activeType === 'subtitle' && " (Subtitle Style)"}
              {activeType === 'defaultSemiBold' && " (Semi Bold Style)"}
              {activeType === 'link' && " (Link Style)"}
            </ThemedText>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Text Types</Text>
          
          <View style={styles.allTypesContainer}>
            <View style={styles.textTypeExample}>
              <Text style={styles.typeLabel}>Default:</Text>
              <ThemedText type="default">{sampleText}</ThemedText>
            </View>
            
            <View style={styles.textTypeExample}>
              <Text style={styles.typeLabel}>Default Semi Bold:</Text>
              <ThemedText type="defaultSemiBold">{sampleText}</ThemedText>
            </View>
            
            <View style={styles.textTypeExample}>
              <Text style={styles.typeLabel}>Title:</Text>
              <ThemedText type="title">{sampleText}</ThemedText>
            </View>
            
            <View style={styles.textTypeExample}>
              <Text style={styles.typeLabel}>Subtitle:</Text>
              <ThemedText type="subtitle">{sampleText}</ThemedText>
            </View>
            
            <View style={styles.textTypeExample}>
              <Text style={styles.typeLabel}>Link:</Text>
              <ThemedText type="link">{sampleText}</ThemedText>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Font Size & Line Height</Text>
          
          <ThemedText
            type="default"
            customFontSize={18}
            customLineHeight={32}
            customLetterSpacing={1.5}
            showControls={true}
          >
            This text has custom initial values for font size (18px), line height (32px), 
            and letter spacing (1.5px). You can adjust these values using the sliders below.
          </ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
  headerContainer: ViewStyle;
  headerTitle: TextStyle;
  section: ViewStyle;
  sectionHeader: ViewStyle;
  sectionTitle: TextStyle;
  sectionSubtitle: TextStyle;
  typeSelectorContainer: ViewStyle;
  typeSelector: ViewStyle;
  typeButton: ViewStyle;
  activeTypeButton: ViewStyle;
  typeButtonText: TextStyle;
  activeTypeButtonText: TextStyle;
  previewContainer: ViewStyle;
  previewLabel: TextStyle;
  allTypesContainer: ViewStyle;
  textTypeExample: ViewStyle;
  typeLabel: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  section: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  typeSelectorContainer: {
    marginBottom: 16,
  },
  typeSelector: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  typeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginRight: 8,
  },
  activeTypeButton: {
    backgroundColor: '#4F8EF7',
  },
  typeButtonText: {
    color: '#333333',
    fontWeight: '500',
  },
  activeTypeButtonText: {
    color: '#FFFFFF',
  },
  previewContainer: {
    marginVertical: 16,
  },
  previewLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  allTypesContainer: {
    marginTop: 16,
  },
  textTypeExample: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  typeLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    marginBottom: 4,
  },
});

export default TextSliderDemo;