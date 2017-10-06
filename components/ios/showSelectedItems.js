import React, { Component } from 'react';
import inArray from './in_array';

import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class showSelectedItems extends Component {

    constructor(props) {
        super(props);

        console.log("Props", this.props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this._renderRow = this._renderRow.bind(this);

        this.state = {
            dataSource: ds.cloneWithRows(['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E','E']),
            rowToSelect: this.props.rowToSelect,
        }

    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {

        var rowBackground = "#FFF";
        var _titleColor, _subtitleColor = "#000";
        var _title = "HTML ELEMENT";
        var _subtitle = "NO SELECTED";

        if(inArray.in_array(rowID, this.state.rowToSelect)) {
            rowBackground = "#FAE14B";
            _subtitle = "SELECTED";
            _titleColor = "#FFF";
            _subtitleColor = "#FFF";
        }

        if(rowID > 0) {

            return (

                <View>
                    <View style={[styles.row, {backgroundColor: rowBackground }]}>
                        <Image
                            style={styles.thumb}
                            source={{uri: 'HTMLElement'}}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={[styles.title, {color: _titleColor }]}>
                                [{rowID}] {_title}
                            </Text>
                            <Text style={[styles.subtitle, {color: _subtitleColor }]}>
                                {_subtitle}
                            </Text>
                        </View>
                    </View>
                </View>

            );

        }else{
            return false;
        }

    }

    render() {

        return (
            <View style={styles.container}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 63,
        backgroundColor: "#FAE14B",
    },
    rightContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
    },
    separator: {
        height: 1,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 10,
    },
    title: {
        marginBottom: 5,
        marginTop: 6,
        fontSize: 10,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 9,
    },
});

module.exports = showSelectedItems;
