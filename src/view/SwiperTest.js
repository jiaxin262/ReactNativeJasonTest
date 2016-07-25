/**
 * Created by xin.jia
 * since 2016/7/25
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
//horizontal true bool	If true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
//loop true bool	Set to false to disable continuous loop mode.
//index 0 number	Index number of initial slide.
//showsButtons false bool	Set to true make control buttons visible.
//autoplay false bool Set to true enable auto play mode.

export default class SwiperTest extends Component {
    constructor() {
        super();
        this.state={
            page1Text: 'A',
            page2Text: 'B',
            page3Text: 'C'
        }
    }
    
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Swiper height={150} style={styles.wrapper} loop={true} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>{this.state.page1Text}</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>{this.state.page2Text}</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>{this.state.page3Text}</Text>
                    </View>
                </Swiper>
                <View style={styles.blank}></View>
                <Swiper height={150} style={styles.wrapper}
                        showsButtons={true}
                        buttonWrapperStyle={styles.buttonWrapper}
                        nextButton={<Text style={styles.buttonText}>Next</Text>}
                        prevButton={<Text style={styles.buttonText}>Pre</Text>}
                        loop={false}
                        showsPagination={false}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>{this.state.page1Text}</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>{this.state.page2Text}</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>{this.state.page3Text}</Text>
                    </View>
                </Swiper>
                <View style={styles.blank}></View>
                <Swiper height={150} autoplay={true} horizontal={false}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>{this.state.page1Text}</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>{this.state.page2Text}</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>{this.state.page3Text}</Text>
                    </View>
                </Swiper>
                <View style={styles.blank}></View>
                <Swiper style={styles.wrapper}
                        height={150}
                        loop={false}
                        index={1}
                        paginationStyle={styles.paginationStyle}
                        dot={<View style={styles.dotStyle}/>}
                        activeDot={<View style={styles.activeDotStyle}/>}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>{this.state.page1Text}</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>{this.state.page2Text}</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>{this.state.page3Text}</Text>
                    </View>
                </Swiper>
                <View style={styles.blank}></View>
                <Swiper height={150} style={styles.wrapper} autoplay={true} autoplayTimeout={0.9}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>{this.state.page1Text}</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>{this.state.page2Text}</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>{this.state.page3Text}</Text>
                    </View>
                </Swiper>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    blank: {
        height: 5
    },
    paginationStyle: {
        backgroundColor: '#aabbcc'
    },
    dotStyle: {
        backgroundColor:'#112323',
        width: 8, height: 8,
        borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3
    },
    activeDotStyle: {
        backgroundColor: '#567a2a',
        width: 8, height: 8,
        borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3
    },
    buttonWrapper: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0, left: 0,
        flex: 1,
        paddingHorizontal: 10, paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'}

});
