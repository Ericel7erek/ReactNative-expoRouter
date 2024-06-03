import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useCartContext } from "../../Store/CartProvider.jsx";
const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [items, setItems] = useCartContext();
  useEffect(() => {
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);
  console.log(items);
  if (!product) {
    return <Text style={{ color: "blue" }}>Loading...</Text>;
  }
  return (
    <View>
      <Text style={{ color: "blue" }}>
        {product.title}
        {"\n"}
      </Text>
      <Text style={{ color: "green" }}>${product.price}</Text>
      <FlatList
        numColumns={4}
        style={{ margin: "auto" }}
        data={product.pictures}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
      />
      <Pressable
        onPress={() => {
          setItems([
            ...items,
            { id: product.id, title: product.title, price: product.price },
          ]);
        }}
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          margin: "auto",
          marginTop: 20,
          padding: 10,
        }}
      >
        <Text>Add To Cart</Text>
      </Pressable>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <>
            <Text style={{ color: "white" }}>{item.title}</Text>
            <Text style={{ color: "green" }}>${item.price}</Text>
          </>
        )}
      />
    </View>
  );
};

export default ProductDetail;
