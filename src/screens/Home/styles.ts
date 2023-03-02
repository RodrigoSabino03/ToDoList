import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#272727',

        alignItems: "center",
        
    },
    form: {
        width: '100%',
        flexDirection: "row",

        marginTop: 24,
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#0d0d0d',
        height: 56,
        flex: 1,
        marginRight: 16,

        fontSize: 16,
        color: '#fff',

        borderRadius: 5,
        padding: 16,
    },
    inputBtn: {
        width: 56,
        height: 56,
        borderRadius: 5,
  
        backgroundColor: '#1e6f9f',
  
        alignItems: 'center',
        justifyContent: "center"
    },
    status: {
        width: '100%',
        flexDirection: 'row',
    },
    statusContent: {
        flexDirection: 'row',
        height: 16
    },
    statusTitle: {
        marginRight: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },
    statusCount: {
        color: '#FFF',
        backgroundColor: '#333',
        borderRadius: 100,
        padding: 2,
    },

})