import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native'
import { colors } from '../utils/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { tempData } from '../asset/tempData'
import TodoList from '../component/TodoList'
import AddListModal from '../component/AddListModal'


export default class Home extends Component {
    state = {
        addTodoVisible: false
    }
    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible })
    }
    render() {
        return (
            <View style={styles.page}>
                <Modal
                    animationType="slide"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddTodoModal()}
                >
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} />

                </Modal>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.divider} />
                    <Text style={styles.title}>Todo <Text style={{ fontWeight: '300', color: colors.blue }}>List</Text></Text>
                    <View style={styles.divider} />
                </View>
                <View style={{ marginVertical: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.toggleAddTodoModal()}
                        style={styles.addList}>
                        <AntDesign name="plus" size={18} color={colors.blue} />
                    </TouchableOpacity>
                    <Text style={styles.add}>Add List</Text>
                </View>
                <View style={{ height: 280, paddingLeft: 0, }}>
                    <FlatList
                        data={tempData}
                        keyExtractor={item => item.name}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <View>
                                <TodoList
                                    complete={item.todos.filter(todo => todo.completed).length}
                                    remaining={item.todos.length - item.todos.filter(todo => todo.completed).length}
                                    list={item.name}
                                    bckg={item.color}
                                    todos={item.todos.length}
                                    data={item.todos}
                                />
                            </View>} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
        // padding: 10
    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: colors.black,
        paddingHorizontal: 60
    },
    addList: {
        borderWidth: 2,
        borderColor: colors.lightblue,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add: {
        color: colors.blue,
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center'
    }
})





