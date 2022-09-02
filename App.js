import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import StartGamesScreen from "./screens/StartGamesScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSansRegular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSansBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandlder() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGamesScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
    userNumber={userNumber} 
    roundsNumber={guessRounds} 
    onStartNewGame={startNewGameHandlder}
    />;
  }

  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/img/backgroundimg.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});