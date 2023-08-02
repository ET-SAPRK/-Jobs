import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { TextInput } from 'react-native-gesture-handler';

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
     <View style={styles.container}>
     <Text style={styles.userName}>Hello samuel</Text>
     <Text style={styles.welcomeMessage}>Find your perfect job</Text>
     </View>
     <View style={styles.searchContainer}>
     <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Welcome