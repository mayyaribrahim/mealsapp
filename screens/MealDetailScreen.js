import { Text, Image, View } from "react-native";
import MealDetail from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>

      <Image source={{uri: selectedMeal.imageUrl}} />

      <Text>{selectedMeal.title}</Text>

      <MealDetail 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability} 
      />

      <Text></Text>
      <Text></Text>

    </View>
  )
}

export default MealDetailScreen;