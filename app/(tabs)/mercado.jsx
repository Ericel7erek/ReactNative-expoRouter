import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

const mercado = () => {
  const [cosas, setCosas] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=malabares")
      .then((res) => res.json())
      .then((data) => setCosas(data.results));
  }, []);
  return (
    <View>
      <FlatList
        data={cosas}
        renderItem={({ item }) => (
          <Text
            style={{
              fontWeight: "bold",
              color: "blue",
              backgroundColor: "grey",
              marginBottom: 5,
              margin: 10,
              borderRadius: 5,
            }}
            onPress={() => {
              alert(item.id);
              router.push(`/product/${item.id}`);
            }}
          >
            {item.title}
            {"\n"}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default mercado;
