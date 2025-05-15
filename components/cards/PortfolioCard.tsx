import React from 'react';
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';


/** 
A reusable card component for portfolio projects

@param {Object} props
@param {string} props.title - The title of the project
@param {string} props.description - A brief description of the project
@param {string} props.imageURL - The image URL for the project
@param {string} props.tags - An array of tags associated with the project
@param {function} props.onPress - Function to call when the card is pressed
@param {Object} props.style - Additional styles to apply to the card

*/
interface PortfolioCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PortfolioCard:React.FC<PortfolioCardProps> = ({
    title = '',
    description = '',
    imageUrl = '',
    tags = [],
    onPress,
    style = []
}) => {
  return (
    <TouchableOpacity 
        style={[styles.cardContainer, style]}
        onPress={onPress}
        activeOpacity={0.9}
    >
        
    {imageUrl && (
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.cardImage}
          resizeMode="cover"
        />
      )}
    <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>

        <Text style={styles.cardDescription} numberOfLines={3}>{description}</Text>
        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
        </View>
        )}
    </View>     
    </TouchableOpacity>
  )
}

export default PortfolioCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        marginVertical: 8,
        overflow: 'hidden',
    },
    cardImage: {
        height: 200,
        width: '100%',
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    tag: {
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        fontSize: 12,
        color: '#555555',
    }
})