import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

interface ThemeSliderProps {
    label: string;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    initialValue?: number;
    onValueChange: (value: number) => void;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    style?: ViewStyle;
    unit?: string;
}

const ThemeSlider: React.FC<ThemeSliderProps> = ({
    label, 
    minimumValue = 0,
    maximumValue = 100,
    step = 1,
    initialValue = 16, 
    onValueChange,
    minimumTrackTintColor = '#e0e0e0',
    maximumTrackTintColor = '#5a67d8',
    thumbTintColor = '#3f51b5',
    style,
    unit = ''
}) => {
    const [value, setvalue] = useState<number>(initialValue);

    const handleValueChange = (newValue: number) => {
        setvalue(newValue);
        onValueChange(newValue);
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.valueText}>{value}{unit}</Text>
            </View>

            <Slider 
                style={styles.slider}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                step={step}
                value={initialValue}
                onValueChange={handleValueChange}
                minimumTrackTintColor={minimumTrackTintColor}
                maximumTrackTintColor={maximumTrackTintColor}
                thumbTintColor={thumbTintColor}
            />

        </View>
        
    );
};

interface Styles {
    container: ViewStyle;
    labelContainer: ViewStyle;
    label: TextStyle;
    valueText: TextStyle;
    slider: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: '100%',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    valueText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    slider: {
        width: '100%',
        height: 40,
    },
});

export default ThemeSlider;