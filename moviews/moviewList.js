/**
 * Created by xin.jia
 * since 2016/7/11
 */
import React, {Component} from 'react';
import {
    View,
    TextView,
    TouchableOpacity,
    Image,
    ListView,
    Navigator,
    StyleSheet
} from 'react-native';

var MOCKED_MOVIEW_DATA = [
    {title:'title', year:1990, poster: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
];

export default class MoviewList extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var movie = MOCKED_MOVIEW_DATA[0];
        return this.renderMovie(movie);
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image resource={{uri: movie.poster.thumbnail}}
                 style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.name}</Text>
                    <Text style={year.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F0FFFF'
    },
    rightContainer: {
        flex: 1,
        height: 120,
        backgroundColor: '#AEEEEE',
        marginRight: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year:{
        textAlign: "center"
    },
    listView: {

    },
    thumbnail: {
        width: 90,
        height: 120,
        marginLeft: 10
    }
});