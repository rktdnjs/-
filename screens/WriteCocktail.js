import { useState } from "react"
import { Text, View, StyleSheet, TextInput, LinearGradient } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

function WriteCocktail () {
    // 사용자 측 이미지 업로드는 연구 필요
    const [cocktailname, setCocktailname] = useState('')
    const [comment, setComment] = useState('')
    const [flavor, setFlavor] = useState('')
    const [alcohol, setAlcohol] = useState('')
    const [recipe, setRecipe] = useState('')

    const cocktailnameHandler = (text) => {
        setCocktailname(text);
    }

    return (
        <View style={styles.Container}>
            <Text>이미지</Text>

            {/* 한 줄 평 */}
            <TextInput 
            maxLength={50} 
            onChangeText={cocktailnameHandler}
            keyboardType={null}
            />
            
            <Text>칵테일 이름</Text>
            <Text>한 줄 평</Text>
            <Text>맛</Text>
            <Text>도수</Text>
            <Text>재료</Text>
        </View>
    )
}

export default WriteCocktail;

const styles = StyleSheet.create({
    Container : {
        flex : 1
    }
})