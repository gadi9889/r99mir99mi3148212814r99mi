import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

const PlaceholderImage = require("../assets/Logo.jpg");
const handBook = require("../assets/hand-book.jpg");

export default function Header({ image, pickImage, name }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSelector, setImageSelector] = useState(0);
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%" }}
          colors={[
            "rgba(0, 97, 255,0.9)",
            "rgba(0, 97, 255,0.8)",
            "rgba(0, 97, 255,0.7)",
          ]}
          end={{ x: 1, y: 0 }}
        >
          <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={34} color="white" />
              </Pressable>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <View style={{ margin: 5 }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}
                  >
                    {name}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 13 }}>
                    מחובר כ- סטונדט.ית
                  </Text>
                </View>
                <Pressable
                  style={{
                    width: 85,
                    height: 85,
                    backgroundColor: "#0061ff",
                    borderRadius: 100,
                    overflow: "hidden",
                  }}
                  onPress={pickImage}
                >
                  <Image
                    source={{ uri: image }}
                    style={{ width: 85, height: 85 }}
                  />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
                התנתק
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  סטונדט.ית
                </Text>
                <Image
                  source={handBook}
                  style={{ width: 20, height: 20 }}
                  color="white"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Ionicons name="arrow-down" size={24} color="white" />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  הוספת פרופיל
                </Text>
                <Ionicons name="person-add-outline" size={20} color="white" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: 12 }}
              ></Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  ניתוק מכל הפרופילים
                </Text>
                <Feather name="log-out" size={20} color="white" />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "white",
                marginTop: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: 12 }}
              ></Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  הגדרות
                </Text>
                <Ionicons name="settings-sharp" size={20} color="white" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: 12 }}
              ></Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  הצהרת נגישות
                </Text>
                <Ionicons name="md-body" size={20} color="white" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: 12 }}
              ></Text>
              <Pressable
                onLongPress={() => setImageSelector(!imageSelector)}
                style={{ flexDirection: "row" }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                    marginRight: 15,
                  }}
                >
                  אודות
                </Text>
                <Ionicons name="information-circle" size={20} color="white" />
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </Modal>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 10,
            backgroundColor: "#fff",
          }}
        >
          <Pressable
            style={{
              width: 35,
              height: 35,
              backgroundColor: "#0061ff",
              borderRadius: 100,
              overflow: "hidden",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Image source={{ uri: image }} style={{ width: 35, height: 35 }} />
            {/* <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: "white",
                borderRadius: 100,
                position: "absolute",
                top: "15%",
                left: "29%",
              }}
            />
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "white",
                borderRadius: 100,
                position: "absolute",
                top: "70%",
                left: "-10%",
              }}
            /> */}
            {/* <Pressable /> */}
          </Pressable>
          <Image source={PlaceholderImage} style={{ width: 90, height: 40 }} />
          <View>
            <View
              style={{
                width: 25,
                height: 5,
                backgroundColor: "#0061ff",
                marginVertical: 3,
              }}
            />
            <View
              style={{
                width: 15,
                height: 5,
                backgroundColor: "#0061ff",
                marginVertical: 3,
              }}
            />
            <View
              style={{
                width: 25,
                height: 5,
                backgroundColor: "#0061ff",
                marginVertical: 3,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
