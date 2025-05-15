import { default as ThemeSlider } from '@/components/ThemeSlider';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  /**
   * Whether to show the slider controls
   * @default false
   */
  showControls?: boolean;
  /**
   * Custom initial font size (will override the type default)
   */
  customFontSize?: number;
  /**
   * Custom initial line height (will override the type default)
   */
  customLineHeight?: number;
  /**
   * Custom initial letter spacing
   */
  customLetterSpacing?: number;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  showControls = false,
  customFontSize,
  customLineHeight,
  customLetterSpacing = 0,
  ...rest
}: ThemedTextProps) {
  // Get the theme color from your existing hook
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
  // Get initial values based on type (or custom values if provided)
  const getInitialFontSize = () => {
    if (customFontSize !== undefined) return customFontSize;
    switch (type) {
      case 'title': return 32;
      case 'subtitle': return 20;
      default: return 16;
    }
  };
  
  const getInitialLineHeight = () => {
    if (customLineHeight !== undefined) return customLineHeight;
    switch (type) {
      case 'title': return 32;
      case 'link': return 30;
      default: return 24;
    }
  };
  
  // State for customizable text properties
  const [fontSize, setFontSize] = useState<number>(getInitialFontSize());
  const [lineHeight, setLineHeight] = useState<number>(getInitialLineHeight());
  const [letterSpacing, setLetterSpacing] = useState<number>(customLetterSpacing);
  
  // Get font weight based on type
  const getFontWeight = () => {
    switch (type) {
      case 'title':
      case 'subtitle':
        return 'bold';
      case 'defaultSemiBold':
        return '600';
      default:
        return 'normal';
    }
  };
  
  // Special handling for link color
  const textColor = type === 'link' && !color ? '#0a7ea4' : color;
  
  // Combined style for the text
  const textStyle: TextStyle = {
    fontSize,
    lineHeight,
    letterSpacing,
    fontWeight: getFontWeight(),
    color: textColor,
  };

  return (
    <View style={styles.container}>
      <Text
        style={[textStyle, style]}
        {...rest}
      />
      
      {showControls && (
        <View style={styles.controlsContainer}>
          <ThemeSlider
            label="Font Size"
            minimumValue={8}
            maximumValue={48}
            step={1}
            initialValue={fontSize}
            onValueChange={setFontSize}
            unit="px"
          />
          
          <ThemeSlider
            label="Line Height"
            minimumValue={10}
            maximumValue={60}
            step={1}
            initialValue={lineHeight}
            onValueChange={setLineHeight}
            unit="px"
          />
          
          <ThemeSlider
            label="Letter Spacing"
            minimumValue={-2}
            maximumValue={10}
            step={0.1}
            initialValue={letterSpacing}
            onValueChange={setLetterSpacing}
            unit="px"
          />
        </View>
      )}
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  controlsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    // Use minimal styling to avoid conflicting with user's style prop
  },
  controlsContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
  },
});