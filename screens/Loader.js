import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Loader() {
    return (
        <View style={styles.container}>
            <View style={styles.portfolioLoader}>
                <View style={styles.sun}></View>
                <View style={[styles.orbit, styles.orbit1]}></View>
                <View style={[styles.orbit, styles.orbit2]}></View>
                <View style={[styles.orbit, styles.orbit3]}>
                    <View style={[styles.planetX, styles.planet3]}></View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    portfolioLoader: {
        position: 'relative',
    },
    sun: {
        backgroundColor: '#ff0',
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
    },
    planetX: {
        position: 'absolute',
        zIndex: 100,
        borderRadius: 25,
    },
    planet3: {
        left: 49,
        height: 17,
        width: 17,
        backgroundColor: '#ff9900',
    },
    orbit: {
        borderColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
    },
    orbit1: {
        height: 100,
        width: 100,
    },
    orbit2: {
        height: 150,
        width: 150,
    },
    orbit3: {
        height: 200,
        width: 200,
        animationDuration: '6s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
});