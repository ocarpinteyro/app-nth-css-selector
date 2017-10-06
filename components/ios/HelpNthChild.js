import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Linking,
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

class HelpNthChild extends Component {

    _goWOrg() {
    	url = 'https://www.w3.org/TR/selectors/#nth-child-pseudo';
    	Linking.canOpenURL(url).then(supported => {
		  if (!supported) {
		    console.log('Can\'t handle url: ' + url);
		  } else {
		    return Linking.openURL(url);
		  }
		}).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.h1}>{'Definition and Usage'.toUpperCase()}</Text>
                <Text style={[styles.p]}>The :nth-child(n) selector matches every element that is the nth child, regardless of type, of its parent. 'n' can be a number, a keyword, or a formula (an+b), where 'a' represents a cycle size, 'n' is a counter (starts at 0), and 'b' is an offset value.</Text>

                <Text style={styles.h1}>{'Examples'.toUpperCase()}</Text>
                <Text style={[styles.p]}>You can type the next equations and try it.</Text>
                <Text style={[styles.p]}><Icon name="angle-double-right" style={styles.vineta} /> 2n</Text>
                <Text style={[styles.p]}><Icon name="angle-double-right" style={styles.vineta} /> 2n+1</Text>
                <Text style={[styles.p]}><Icon name="angle-double-right" style={styles.vineta} /> 4n+2</Text>
                <Text style={[styles.p]}><Icon name="angle-double-right" style={styles.vineta} /> -n+10</Text>
                <Text style={[styles.p]}><Icon name="angle-double-right" style={styles.vineta} /> odd</Text>
                <Text style={[styles.p, styles.p_end]}><Icon name="angle-double-right" style={styles.vineta}  /> n+3</Text>

                <Text style={styles.h1}>{'CSS version'.toUpperCase()}</Text>
                <Text style={[styles.p, styles.p_end]}>Cascading Style Sheets 3 (CSS3)</Text>

                <Text style={styles.h1}>{'Browser Support'.toUpperCase()}</Text>
                <Text style={[styles.p, styles.p_end]}>The numbers in the list specifies the browser version that fully supports the selector:</Text>
                <Text style={[styles.p]}><Icon name="chrome" style={styles.vineta} /> Google Chrome >= 4.0</Text>
                <Text style={[styles.p]}><Icon name="internet-explorer" style={styles.vineta} /> Internet Explorer >= 9.0</Text>
                <Text style={[styles.p]}><Icon name="firefox" style={styles.vineta} /> Mozilla Firefox >= 3.5</Text>
                <Text style={[styles.p]}><Icon name="safari" style={styles.vineta} /> Safari >= 3.2</Text>
                <Text style={[styles.p, styles.p_end]}><Icon name="opera" style={styles.vineta}  /> Opera >= 9.6</Text>

                <TouchableHighlight onPress={this._goWOrg.bind(this)} style={styles.goWOrg}>
                	<Text style={styles.source}>More info: w3.org</Text>
               	</TouchableHighlight>

            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 10,
        marginBottom: 64,
    },
    h1: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "bold",
        color: "#efefef",
        textAlign: "left",
        fontSize: 17,
        paddingBottom: 10,
    },
    p: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#efefef",
        textAlign: "left",
        fontSize: 14,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    p_end: {
        paddingBottom: 30,
    },
    vineta: {
        fontSize: 15,
    },
    source: {
        color: "#777",
        textAlign: "left",
        fontSize: 13,
        paddingBottom: 20,
        paddingTop: 10,
    },
    goWOrg: {
        padding: 10,
    }
});

module.exports = HelpNthChild;
