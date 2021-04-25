import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313__340.jpg",
      "https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303__340.jpg",
      "https://images.unsplash.com/photo-1611282104229-04e1120e8e31?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNhbXN1bmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHNhbXN1bmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButton={false}
            autoplay={true}
            autoplayTimeout={2}
            style={{ height: width / 2.5 }}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 2,
  },
  imageBanner: {
    height: width / 1.5,
    width: width - 60,
    borderRadius: 10,
    marginHorizontal: 30,
  },
});
