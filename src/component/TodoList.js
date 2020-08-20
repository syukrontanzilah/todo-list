import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { colors } from '../utils/colors'
import TodoModal from './TodoModal'

export default class TodoList extends Component {
    state = {
        showListVisible: false,

    }
    togleListModal() {
        this.setState({ showListVisible: !this.state.showListVisible })
    }

    render() {
        // const list = this.props.list
        // const completeCount = list.todos.filter(todo => todo.completed).length
        return (
            <View>
                <Modal animationType="slide" visible={this.state.showListVisible}
                    onRequestClose={() => this.togleListModal()}>
                 <TodoModal
                 onPress={()=> this.togleListModal()}
                 name={this.props.list}
                 todos={this.props.todos}
                 complete={this.props.complete}
                 color={this.props.bckg}
                 title={this.props.title}
                 data={this.props.data}
                //  list={list}
                //  closeModal={()=> this.togleListModal()}
                 
                 />
                </Modal>
                <TouchableOpacity
                onPress={()=> this.togleListModal()}
                style={[styles.listContainer, { backgroundColor: this.props.bckg }]}>
                    <Text
                        numberOfLines={1}
                        style={styles.listTitle}>{this.props.list}
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}>{this.props.complete}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}>{this.props.remaining}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}
// export default TodoList

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200

    },
    listTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 40,
        fontWeight: '200',
        color: colors.white,
        opacity: 0.9
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.white,
        opacity: 0.6

    }
})
