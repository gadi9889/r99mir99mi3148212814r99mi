import { View, Text, Image } from "react-native";
import React from "react";

const messageLogo = require("../assets/messageLogo.jpg");

export default function Section() {
  return (
    <>
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
            הטכנולוגית ב"ש.סקר ההוראה נותן לסטונדטים מקום לציון הערכה והשפעה על
            מערכת
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
            שלום רב {"\n"}תגבור בכימיה אורגנית עם בקמן הילה לא יתקיים היום יום ג
            27/12.
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
    </>
  );
}
