import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectSeeder() {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Select the Seeder Type</Text>
            </View>
            
            <View style={styles.devicesListContainer}>
                <View style={styles.devicesListRow}>
                    <TouchableOpacity style={styles.deviceItem} onPress={() => console.log("Button Pressed!")}>
                        <Text style={styles.btnText}>Device Icon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deviceItem} onPress={() => console.log("Button Pressed!")}>
                        <Text style={styles.btnText}>Device Icon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.devicesListRow}>
                    <TouchableOpacity style={styles.deviceItem} onPress={() => console.log("Button Pressed!")}>
                        <Text style={styles.btnText}>Device Icon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deviceItem} onPress={() => console.log("Button Pressed!")}>
                        <Text style={styles.btnText}>Device Icon</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
    },
    headingContainer: {
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '20%',

        // borderColor: '#E3E3E3',
        // borderWidth: 1.5,
        // borderRadius: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        
       
    },
    devicesListContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        gap: 80,
    },
    devicesListRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    deviceItem: {
        borderRadius: 50,
        width: 100,
        height: 100,
        borderColor: '#E3E3E3',
        borderWidth: 1.5,
    }
});



