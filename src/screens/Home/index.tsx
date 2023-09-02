import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LocalSvg } from "react-native-svg";
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import { styles } from "./styles";

import Logo from '../../assets/images/Logo.svg';
import Plus from '../../assets/images/plus.svg';
import Layer from '../../assets/images/Layer.svg';
import Clipboard from '../../assets/images/Clipboard.svg';

type TodoItem = {
    id: string;
    description: string;
    concluded: boolean;
}

const Home = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [taskDescription, setTaskDescription] = useState('');
    const [createds, setCreateds] = useState(0);
    const [concludeds, setConcludeds] = useState(0);

    function toggleTodoItem(id: string) {
        setTodos((prevState) => prevState.map(todo => {
            if (todo.id === id) {
                todo.concluded = !todo.concluded;
            }
            return todo;
        }));
    }

    function handleAdd() {
        setTodos((prevState) => [...prevState, {
            id: uuidV4(),
            description: taskDescription,
            concluded: false
        }]);

        setTaskDescription('');
    }

    function handleRemove(id: string) {
        setTodos((prevState) => prevState.filter(todo => todo.id !== id));
    }


    useEffect(() => {
    }, []);

    useEffect(() => {
        setCreateds(todos.length);
        setConcludeds(todos.filter(todo => todo.concluded).length)
    }, [todos])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LocalSvg
                    asset={Logo}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.inputContent}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        keyboardAppearance="dark"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAdd}>
                        <LocalSvg
                            asset={Plus}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.todoListContainer}>
                    <View style={styles.todoListHeader}>
                        <View style={styles.todoListHeaderTexts}>
                            <Text style={styles.todoListHeaderLeftText}>Criadas</Text>
                            <Text style={styles.todoListHeaderValue}>{createds}</Text>
                        </View>
                        
                        <View style={styles.todoListHeaderTexts}>
                            <Text style={styles.todoListHeaderRightText}>Concluídas</Text>
                            <Text style={styles.todoListHeaderValue}>{concludeds}</Text>
                        </View>
                    </View>
                    <FlatList
                        data={todos}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={(
                            <View style={styles.emptyListContainer}>
                                <View style={styles.divisor}/>
                                <LocalSvg
                                    asset={Clipboard}
                                />
                                <Text style={styles.emptyListFirstText}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.emptyListSecondText}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.taks}>
                                <View style={styles.checkboxContent}>
                                    <BouncyCheckbox
                                        size={20}
                                        isChecked={item.concluded}
                                        fillColor="#5E60CE"
                                        unfillColor="#262626"
                                        onPress={() => toggleTodoItem(item.id)}

                                    />
                                    <Text style={styles.checkboxText}>
                                        {item.description}
                                    </Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={() => handleRemove(item.id)}
                                    style={styles.trash}
                                >
                                    <LocalSvg
                                        asset={Layer}
                                    />
                                </TouchableOpacity>
                                
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

export { Home };