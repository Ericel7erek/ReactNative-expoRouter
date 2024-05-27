import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <Text style={{ color: "white" }}>Loading...</Text>;
  }
  return (
    <View>
      <Text style={{ color: "white" }}>
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
    </View>
  );
};

export default ProductDetail;
