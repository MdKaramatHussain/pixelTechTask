import { View, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from '../constants';

export default function ImageSlider() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(5).keys()]}
                scrollAnimationDuration={1000}
                mode='parallax'
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={sliderImages[index]} />

                    </View>
                )}
            />
        </View>
    );
}