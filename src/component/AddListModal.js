import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../utils/colors'
import { tempData } from '../asset/tempData';

export default class AddListModal extends Component {
    backgroundColor = ["#5cd859", "#24a6d9", "#595bd9", "#343340", "#433311", "#999911"];
    state = {
        name: '',
        color: this.backgroundColor[0]
    }

    createTodo = () => {
        const {name, color} = this.state
        tempData.push({
            name,
            color,
            todos: []
        })

        this.setState({name:''})
        this.props.closeModal();
    }

    renderColor() {
        return this.backgroundColor.map(color => {
            return (
                <TouchableOpacity key={color} style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })} />
            )
        })
    }

    render() {
        return (
            <KeyboardAvoidingView
                // behavior="padding"
                style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.closeModal}
                    style={{ position: 'absolute', top: 24, right: 32 }}>
                    <AntDesign name="close" size={24} color="#474747" />
                </TouchableOpacity>

                <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
                    <Text style={styles.title}>Create Todo List</Text>
                    <TextInput
                        onChangeText={text => this.setState({ name: text })}
                        style={styles.input} placeholder="List name" />

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:12}}>{this.renderColor()}</View>

                    <TouchableOpacity 
                    onPress={this.createTodo}
                    style={[styles.create, { backgroundColor: this.state.color }]}>
                        <Text style={{ color: colors.white, fontWeight: '600' }}>Create</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18,
        color: colors.gray
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorSelect: {
        width: 30,
        height:30, 
        borderRadius:4
    }
})





