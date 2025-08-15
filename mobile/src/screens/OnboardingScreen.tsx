import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

/**
 * Tipo para as props do componente OnboardingScreen.
 * Atualmente vazio, pode ser expandido futuramente.
 */
type OnboardingScreenProps = {};

/**
 * Componente funcional que representa a tela inicial (onboarding) do app.
 * Reproduz o layout da primeira página do protótipo Figma.
 */
const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bem-vindo ao App</Text>
        <Text style={styles.description}>
          Esta é a tela inicial do aplicativo, baseada no protótipo Figma.
        </Text>
      </View>
    </View>
  );
};

/**
 * Estilos para o componente OnboardingScreen.
 * Utiliza StyleSheet do React Native para definir cores, fontes, tamanhos e espaçamentos.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cor de fundo branca
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#6B46C1', // Cor roxa conforme protótipo
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    maxWidth: Dimensions.get('window').width * 0.8,
  },
});

export default OnboardingScreen;
