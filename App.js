import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Section from "./components/Section";
const PlaceholderImage = require("./assets/Logo.jpg");
const slider = require("./assets/slider.jpg");
const messageLogo = require("./assets/messageLogo.jpg");
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("רמי");
  const [isConfirm, setIsConfirm] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name={name} image={image} pickImage={pickImage} />
      {!isConfirm && (
        <>
          <TextInput
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          />
          <Button title="E" onPress={() => setIsConfirm(true)}></Button>
        </>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 15, marginVertical: 20 }}>
            ערב טוב! {name}
          </Text>
          <Image
            source={slider}
            style={{
              width: Dimensions.get("window").width,
              height: 200,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontWeight: "800",
              fontSize: 13,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            ברוכים הבאים
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 97, 255,0.05)",
            flex: 1,
            padding: 15,
          }}
        >
          <Text style={{ textAlign: "center", justifyContent: "flex-start" }}>
            &#11044;
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 7,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 10,
                marginBottom: 10,
                color: "#0061ff",
              }}
            >
              לכל ההודעות
            </Text>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 14,
                marginBottom: 10,
              }}
            >
              חשוב שתדעו
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 3,
              paddingVertical: 15,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                borderRightWidth: 1,
                borderRightColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>15:01</Text>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                >
                  סקר הוראה
                </Text>
              </View>
              <Text numberOfLines={3} style={{ fontWeight: "400" }}>
                לסטודנטים שלום!היום בתאריך 01/01/2023 מתחיל סקר ההוראה במכללה
                הטכנולוגית ב"ש.סקר ההוראה נותן לסטונדטים מקום לציון הערכה והשפעה
                על מערכת
              </Text>
            </View>
            <View>
              <Image
                source={messageLogo}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 3,
              paddingVertical: 15,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                borderRightWidth: 1,
                borderRightColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>27/12/2022</Text>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                >
                  כימיה בוקר- שנה ב
                </Text>
              </View>
              <Text numberOfLines={3} style={{ fontWeight: "400" }}>
                שלום רב {"\n"}תגבור בכימיה אורגנית עם בקמן הילה לא יתקיים היום
                יום ג 27/12.
              </Text>
            </View>
            <View>
              <Image
                source={messageLogo}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
          {/* ////////////////////////////////////////////////////////////////// */}
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 7,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: 10,
                marginBottom: 10,
                color: "#0061ff",
              }}
            >
              לכל ההודעות
            </Text>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 14,
                marginBottom: 10,
              }}
            >
              חשוב שתדעו
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 3,
              paddingVertical: 15,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                borderRightWidth: 1,
                borderRightColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>15:01</Text>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                >
                  סקר הוראה
                </Text>
              </View>
              <Text numberOfLines={3} style={{ fontWeight: "400" }}>
                לסטודנטים שלום!היום בתאריך 01/01/2023 מתחיל סקר ההוראה במכללה
                הטכנולוגית ב"ש.סקר ההוראה נותן לסטונדטים מקום לציון הערכה והשפעה
                על מערכת
              </Text>
            </View>
            <View>
              <Image
                source={messageLogo}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 3,
              paddingVertical: 15,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                borderRightWidth: 1,
                borderRightColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>27/12/2022</Text>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                >
                  כימיה בוקר- שנה ב
                </Text>
              </View>
              <Text numberOfLines={3} style={{ fontWeight: "400" }}>
                שלום רב {"\n"}תגבור בכימיה אורגנית עם בקמן הילה לא יתקיים היום
                יום ג 27/12.
              </Text>
            </View>
            <View>
              <Image
                source={messageLogo}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style={"auto"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
