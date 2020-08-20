import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils/colors'

export class TodoModal extends Component {
    state = {
        name: this.props.name,
        color: this.props.color,
        todos: this.props.todos,
        complete: this.props.complete,
        data: this.props.data,
        title: this.props.title

    }

    // renderTodos = todo => {
    //     return <View>
    //         <Text>{todo.title}</Text>
    //     </View>
    // }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
                    <AntDesign name='close' size={24} color={colors.gray} />
                </TouchableOpacity>
                <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.taskCount}>{this.state.complete} dari {this.state.todos} tugas selesai</Text>
                    </View>
                </View>
                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 50, paddingVertical: 20 }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.title}
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <TouchableOpacity>
                                    <Ionicons
                                        name={item.completed ? "ios-square" : "ios-square-outline"}
                                        size={24}
                                        color={colors.lightGray} />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 24,
                                    color:item.completed ? colors.lightGray : colors.gray,
                                    paddingBottom: 8,
                                    marginLeft: 10,
                                    marginTop: 0,
                                    textDecorationLine: item.completed ? 'line-through' : 'none',
                                }}>
                                    {item.title}
                                </Text>
                            </View>

                        }
                    />
                </View>
                <KeyboardAvoidingView style={[styles.section, styles.footer]}>
                    <TextInput
                        placeholder="Tambahkan tugas"
                        style={[styles.input, { borderColor: this.state.color }]} />
                    <TouchableOpacity style={[styles.addTodo, { backgroundColor: this.state.color }]}>
                        <AntDesign name="plus" size={22} color={colors.white} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default TodoModal

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    section: {
        flex: 1,
        alignSelf: 'stretch'
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 50,
        borderBottomWidth: 4
    },
    title: {
        fontSize: 30,
        color: colors.gray
    },
    taskCount: {
        fontSize:18,
        color: colors.gray,
        fontWeight: '500',
        marginBottom: 5,
        paddingVertical:5
    },
    input: {
        // backgroundColor: 'wheat',
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    footer: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    addTodo: {
        borderRadius: 5,
        padding: 13
    }
})






