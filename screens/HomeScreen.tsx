import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import exampleImage from "../assets/logo.jpg";
import Navs from "../components/NavItem";

const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: exampleImageUri,
          }}
        />
        <Navs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
