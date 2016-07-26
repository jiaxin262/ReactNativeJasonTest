/**
 * Created by xin.jia
 * since 2016/7/25
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text
} from 'react-native';
import Util from '../util/utils';

var food = [
    {name: "Apple", category: "Fruit"},
    {name: "peach", category: "Fruit"},
    {name: "Orange", category: "Fruit"},
    {name: "Pear", category: "Fruit"},
    {name: "Banana", category: "Fruit"},
    {name: "Apple", category: "Fruit"},
    {name: "peach", category: "Fruit"},
    {name: "Orange", category: "Fruit"},
    {name: "Pear", category: "Fruit"},
    {name: "Banana", category: "Fruit"},
    {name: "Apple", category: "Fruit"},
    {name: "peach", category: "Fruit"},
    {name: "Orange", category: "Fruit"},
    {name: "Pear", category: "Fruit"},
    {name: "Banana", category: "Fruit"},
    {name: "Apple", category: "Fruit"},
    {name: "peach", category: "Fruit"},
    {name: "Orange", category: "Fruit"},
    {name: "Pear", category: "Fruit"},
    {name: "Banana", category: "Fruit"},
    {name: "Lettuce", category: "Vegetable"},
    {name: "Cabbage", category: "Vegetable"},
    {name: "tomato", category: "Vegetable"},
    {name: "Potato", category: "Vegetable"},
    {name: "Pork", category: "Meat"},
    {name: "Beef", category: "Meat"},
    {name: "Mutton", category: "Meat"},
    {name: "Pork", category: "Meat"},
    {name: "Beef", category: "Meat"},
    {name: "Mutton", category: "Meat"},
    {name: "Pork", category: "Meat"},
    {name: "Beef", category: "Meat"},
    {name: "Mutton", category: "Meat"},
    {name: "Pork", category: "Meat"},
    {name: "Beef", category: "Meat"},
    {name: "Mutton", category: "Meat"}
];

export default class ListViewWithSH extends Component {
    constructor() {
        super();
        this.state={
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }).cloneWithRowsAndSections(this.convertFood2Map())
        };
    }

     render() {
         return (
             <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderFoodRow}
                renderSectionHeader={this.renderFoodHeader}/>
         );
     }

    convertFood2Map() {
        var foodCategoryMap = {};
        food.forEach(function (foodItem) {
            if (!foodCategoryMap[foodItem.category]) {
                foodCategoryMap[foodItem.category] = [];
            }
            foodCategoryMap[foodItem.category].push(foodItem);
        });
        return foodCategoryMap;
    }

    renderFoodRow(foodItem) {
        return(
            <View style={styles.listViewItem}>
                <Text style={styles.itemText}>{foodItem.name}</Text>
            </View>
        );
    }

    renderFoodHeader(sectionData, category) {
        return(
            <View style={styles.listViewHeader}>
                <Text style={styles.headerText}>{category}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    listViewHeader: {
        paddingLeft: 20,
        height: 90,
        backgroundColor: '#99d1d3d4'
    },
    listViewItem: {
        borderBottomWidth:Util.pixel,
        borderBottomColor:"#bbb",
        paddingLeft: 30,
        height: 45,
        backgroundColor: '#f2f8fb'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500'
    },
    itemText: {
        fontSize: 15,
    },
    divideLine: {
        height: 1,
        width: 100,
        backgroundColor: '#FF000000'
    }
});