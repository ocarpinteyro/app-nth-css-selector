import React, { Component } from 'react';
import NthChild from './NthChild';
import help from './HelpNthChild';
import ActivityView from 'react-native-activity-view';

import {
    findNodeHandle,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class Welcome extends Component {

    _help() {

        this.props.navigator.push({
            navigationBarHidden: false,
            translucent: false,
            backButtonTitle: ' ',
            barTintColor: '#000',
            tintColor: "#fff",
            titleTextColor: "#fff",
            title: ":nth-child() Selector",
            component: help
        });

    }

    _nthChild() {

        this.props.navigator.push({
            navigationBarHidden: false,
            translucent: false,
            backButtonTitle: ' ',
            barTintColor: '#000',
            tintColor: "#fff",
            titleTextColor: "#fff",
            title: ":nth-child(an+b)",
            component: NthChild,
            rightButtonIcon: require('image!NavBarButtonInfoCircle'),
            onRightButtonPress: this._help.bind(this),
        });

    }

    _inviteFriends() {
        ActivityView.show({
            text: ':NTH - Download on the App Store',
            url: 'https://itunes.apple.com/us/app/nth/id1102663176',
            anchor: findNodeHandle(this.refs.share),
        });
    }

    render() {

        return (
            <View style={styles.container}>

                <Image
                    style={styles.background}
                    source={{uri: 'WelcomeBG'}}
                />

                <View style={styles.overlayBG}></View>

                <View style={styles.welcomeWin}>
                    <Image
                        style={styles.logoWelcome}
                        source={{uri: "AppLogoSubtitleWhite"}}
                    />

                    <Text style={styles.welcomeInstructions}>
                        SELECT THE CSS SELECTOR TO TEST
                    </Text>

                    <TouchableOpacity onPress={this._nthChild.bind(this)} style={styles.selectorsButtonsArea}>
                        <Text style={styles.selectorsButtons}>:nth-child</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.inviteFriendsButtonArea}>

                    <TouchableOpacity onPress={this._inviteFriends.bind(this)} style={styles.inviteFriends}>
                        <Text ref="share" style={styles.ifButton}>INVITE FRIENDS</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );

    }

}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000",
    },
    overlayBG: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    welcomeWin: {
        flex: 1,
        marginTop: 145,
        alignItems: 'center',
    },
    logoWelcome: {
        width: 170,
        height: 88,
    },
    welcomeTitle: {
        backgroundColor: "transparent",
        fontFamily: "Helvetica",
        fontStyle: "normal",
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
    welcomeInstructions: {
        backgroundColor: "transparent",
        marginTop: 120,
        width: 170,
        fontFamily: "Helvetica",
        fontStyle: "normal",
        color: "#fff",
        textAlign: "center",
        fontSize: 12,
    },
    selectorsButtonsArea: {
        backgroundColor: "#FAE14B",
        marginTop: 20,
        width: 200,
        borderWidth: 1,
        borderColor: "#FAE14B",
        borderRadius: 20,
    },
    selectorsButtons: {
        backgroundColor: "transparent",
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "Helvetica",
        fontStyle: "normal",
        color: "#514B0D",
        textAlign: "center",
        fontSize: 15,
    },
    inviteFriendsButtonArea: {
        flex: 1,
        position: "absolute",
        alignItems: "center",
        backgroundColor: "transparent",
        bottom: 10,
        justifyContent: "center",
        right: 10,
    },
    inviteFriends: {
        padding: 10,
    },
    ifButton: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        color: "#CCC",
        textAlign: "center",
        fontSize: 15,
    },
});

module.exports = Welcome;
