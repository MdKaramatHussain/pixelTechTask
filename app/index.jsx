import { SafeAreaView } from 'react-native'
import React from 'react'
import ImageSlider from '../components/ImageSlider';

export default function index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageSlider />
        </SafeAreaView>
    );
}