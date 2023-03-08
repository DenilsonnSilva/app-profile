import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.headerImage}
          source={{
            uri: 'https://source.unsplash.com/random/?sig=1',
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>
            Lorem ipsum
          </Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque
            fringilla, nunc a laoreet malesuada,justo risus pulvinar dui, ac
            luctus elit orci eget massa.
          </Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://source.unsplash.com/random/?sig=2'
          }}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://source.unsplash.com/random/?sig=3'
          }}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://source.unsplash.com/random/?sig=4'
          }}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://source.unsplash.com/random/?sig=5'
          }}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 10,
  },
  headerImage: {
    width: 150,
    height: 200,
  },
  info: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
  },
  body: {
    fontSize: 12,
    width: 180,
  },
  content: {
    marginTop: 10,
    width: 300,
    height: 200,
  },
  contentImage: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
});
