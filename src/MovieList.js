/**
 * Created by xin.jia
 * since 2016/7/11
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ListView,
    StyleSheet
} from 'react-native';

var MOCKED_MOVIEW_DATA = [
    {title:'title', year:1990, posters: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class MoviewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,  //这里放自定义的state变量及初始值
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchDatas = this.fetchData.bind(this);
    }
    
    componentDidMount() {
        this.fetchData();
    }

    render() {
        //var movie = MOCKED_MOVIEW_DATA[0];
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        //var movie = this.state.movies[0];
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在加载电影数据...</Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image source={{uri: movie.posters.thumbnail}}
                 style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
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
        paddingTop: 20,
        backgroundColor: '#F0FFF0'
    },
    thumbnail: {
        width: 90,
        height: 120,
        marginLeft: 10
    }
});