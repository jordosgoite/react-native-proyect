import React from "react";
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 20, paddingBottom: 5, paddingTop: 5
    },
    strong:{
        fontWeight: "bold", marginBottom: 5, color: "#4a54e0"
    }
})
const RepositoryItem = ({ item }) => {
    return (
        <View key={item.id} style={styles.container}>
            <Text style={styles.strong}>{item.id}</Text>
            <Text>{item.fullname}</Text>
            <Text>{item.description}</Text>
            <Text>{item.reviewCount}</Text>
            <Text>{item.ratingAverage}</Text>
            <Text>{item.forksCount}</Text>
            <Text>{item.language}</Text>
            <Text>{item.reviewCount}</Text>
            <Text>{item.description}</Text>
            <Text>{item.fullname}</Text>
            <Text>{item.id}</Text>
            <Text>{item.reviewCount}</Text>
        </View>
    )
}
export default RepositoryItem