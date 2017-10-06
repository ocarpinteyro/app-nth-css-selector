import React, { Component } from 'react';
import showSelectedItems from './showSelectedItems';
import KernelEquation from './KernelEquation';

import {
    AlertIOS,
    Image,
    ListView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

class NthChild extends Component {

    constructor(props) {
        super(props);

        this.rowToSelect = 0;

        this.state = {
            equation: "",
            placeholderInput: "Type the equation",
            noEquationAlert: "Ups! Type the equation.",
        }
    }

    pressEquation(typo) {

        var typoEq = typo.text;
        this.setState({
            equation: typoEq,
        });

    }

    goEvalutation() {

        var formatValid = this.state.equation;

        if(formatValid && formatValid!=="") {

            formatValid = formatValid.replace(/ /g,'').toLowerCase();

            console.log("formatValid", formatValid);

            var itemsToSelect = KernelEquation.getElementsToSelect(formatValid);

            if(itemsToSelect && itemsToSelect.length>0) {

                this.rowToSelect = itemsToSelect;

                this.setState({
                    equation: KernelEquation._equationOnTextInput(),
                });

                this.props.navigator.push({
                    navigationBarHidden: false,
                    translucent: false,
                    backButtonTitle: ' ',
                    barTintColor: '#000',
                    tintColor: "#fff",
                    titleTextColor: "#fff",
                    title: this.state.equation,
                    component: showSelectedItems,
                    passProps: { rowToSelect: this.rowToSelect },
                });

            }else{
                AlertIOS.alert(
                    'It looks like the equation is incorrect. Try with other.',
                );
            }

        }else{
            AlertIOS.alert(
                this.state.noEquationAlert,
            );
        }

    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.viewInputText}>
                    <TextInput
                        ref={(ref) => this.equationTyped = ref}
                        key="equation.1.00001"
                        style={styles.inputText}
                        placeholderColor={"#FFF"}
                        placeholder={this.state.placeholderInput}
                        placeholderTextColor={"#FFF"}
                        keyboardType={'default'}
                        autoFocus={true}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text) => this.pressEquation({text})}
                        onSubmitEditing={() => this.goEvalutation()}
                        clearButtonMode={'while-editing'}
                        maxLength={8}
                        value={this.state.equation}
                    />
                </View>

                <TouchableOpacity onPress={() => this.goEvalutation(this.state.equation)} style={styles.goButtonArea}>
                    <Text style={styles.goButton}>Try</Text>
                </TouchableOpacity>

            </View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAE14B',
        alignItems: "center",
    },
    viewInputText: {
        marginTop: 50,
        height: 50,
        width: 280,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
    },
    inputText: {
        backgroundColor: "#FAE14B",
        height: 32,
        width: 260,
        margin: 10,
        paddingLeft: 10,
        color: "#fff",
        borderRadius: 2,
        textAlign: "center",
    },
    goButtonArea: {
        backgroundColor: "#FFF",
        marginTop: 30,
        width: 120,
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 20,
    },
    goButton: {
        backgroundColor: "transparent",
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "Helvetica",
        fontStyle: "normal",
        color: "#FAE14B",
        textAlign: "center",
        fontSize: 15,
    },
});

module.exports = NthChild;
