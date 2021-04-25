import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ProductCard from "./ProductCard";
let { width } = Dimensions.get("window");
const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductCard item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
