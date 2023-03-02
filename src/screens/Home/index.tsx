import { useState } from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native'

import { styles } from './styles'

export function Home(){
    const [tasks, setTasks] = useState<string[]>([])
    const [task, setTask] = useState('')

    function handleAddTask(){
        setTasks(prevState => [...prevState, task])
    }
    function handleRemoveTask(){}

    return(
        <View style={styles.container}> 
            <Image style={{marginTop: 36}} source={require('../../assets/Logo.png')} />
            <View style={styles.form}>
                <TextInput
                    placeholder='Adicione uma nova tarefa' 
                    placeholderTextColor='#808080' 
                    style={styles.input}
                    onChangeText={e => setTask(e)}
                    />
                <TouchableOpacity
                    style={styles.inputBtn}
                    onPress={handleAddTask}
                    >
                    <Image source={require('../../assets/plus.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.status}>
                <View style={[styles.statusContent, {flex: 1}]}>
                    <Text style={[styles.statusTitle, {color: '#4ea8de'}]}>Criadas</Text>
                    <Text style={styles.statusCount}>0</Text>
                </View>
                <View style={styles.statusContent}>
                    <Text style={[styles.statusTitle, {color: '#8284FA'}]}>Concluidas</Text>
                    <Text style={styles.statusCount}>0</Text>
                </View>
            </View>
            {/* <FlatList /> */}
        </View>
    )
}