import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons size={28} name="search" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default _layout