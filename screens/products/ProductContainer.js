import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import ProductList from "./ProductList";
import Banner from "../../Shared/Banner";
import SearchedProduct from "./SearchedProduct";
import CategoryFilter from "./CategoryFilter";
import { ScrollView } from "react-native-gesture-handler";
const data = require("../../assets/data/products.json");
const productsCategories = require("../../assets/data/categories.json");
const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCategories);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => {
                i.category.$oid === ctg;
              })
            ),
            setActive(true),
          ];
    }
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProduct productsFiltered={productsFiltered} />
      ) : (
        <View>
          <View>
            <Banner />
          </View>
          <View>
            <CategoryFilter
              categories={categories}
              categoryFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
          </View>

          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <ProductList item={item} key={item.$oid} />
            )}
            keyExtractor={(item) => item.brand}
          />
        </View>
      )}
    </Container>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    marginBottom: 60,
  },
  listContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});
