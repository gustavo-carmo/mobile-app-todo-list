import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 173,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        width: '100%',
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    inputContent: {
        height: 54,
        display: 'flex',
        flexDirection: 'row',
        marginTop: -27
        
    },
    input: {
        backgroundColor: '#262626',
        flex: 1,
        borderRadius: 6,
        padding: 12,
        fontSize: 18,
        color: '#F2F2F2'
    },
    button: {
        backgroundColor: '#1E6F9F',
        height: 54,
        width: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 4
    },
    todoListContainer: {
        marginTop: 27,
        width: '100%'
    },
    todoListHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    todoListHeaderTexts: {
        display: 'flex',
        flexDirection: 'row',
    },
    todoListHeaderLeftText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    todoListHeaderRightText: {
        color: '#5E60CE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    todoListHeaderValue: {
        marginLeft: 8,
        color: '#fff',
        backgroundColor: '#333333',
        paddingHorizontal: 10,
        borderRadius: 25,
        fontWeight: 'bold'
    },
    taks: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
        borderRadius: 6,
        paddingHorizontal: 16,
        marginBottom: 6
    },    
    checkboxContent: {
        flexDirection: 'row',
        flex: 1
    },
    checkboxText: {
        color: '#F2F2F2',
        marginLeft: -6,
        flex: 1
    },
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    divisor: {
        width: '100%',
        height: 2,
        backgroundColor: '#333333',
        borderRadius: 25,
        marginBottom: 64,
    },
    emptyListFirstText: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 16
    },
    emptyListSecondText: {
        color: '#808080',
        fontSize: 16
    },
    trash: {
        marginLeft: 6
    }
})

export { styles };