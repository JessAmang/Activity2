import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import { styles } from "./src/style/style.js";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/Entypo";
import Icons1 from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon style={styles.icon} name="person-sharp" size={20} color="blue" />
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./src/image/paypal.jpg")}
          />
          <View style={styles.cards}>
            <Text style={styles.amount}>₱0.00</Text>
            <Text>Balance . Estimated</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <View style={styles.card1s}>
            <Text style={styles.personal}>
              Personalize payments with new stickers, emojis, and more
            </Text>
            <Text style={styles.sends}>Send money now</Text>
          </View>
          <View style={styles.card2s}>
            <Icons name="x" size={20} color="grey" />
            <Image
              style={styles.imagegift}
              source={require("./src/image/gift.jpg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.foot}>
        <View style={styles.foot1}>
          <Text style={styles.sendpay}>Send Payment</Text>
        </View>
        <View style={styles.foot2}>
          <Image
            style={styles.image}
            source={require("./src/image/send.jpg")}
          />
          <View style={styles.foot2s}>
            <Text style={styles.pay}>Pay from your phone</Text>
            <Text style={styles.to}>To people and places you love</Text>
          </View>
        </View>
        <View style={styles.foot3s}>
        <Text style={styles.sendnow}>Send now</Text>
        </View>
        <View style={styles.foot3}>
          <Text style={styles.bot}>Send</Text>
          <Text style={styles.bot}>Request</Text>
        </View>
        <View style={styles.footer}>
        <View style={styles.column}>
          <Icon1 name="home" size={20} color="blue" />
          <Text style={styles.hometext}>Home</Text>
        </View>
        <View style={styles.column}>
          <Icons1 name="dollar" size={20} color="#142c8e" />
          <Text style={styles.hometext}>Payments</Text>
        </View>
        <View style={styles.column}>
          <Icon1 name="wallet" size={20} color="#142c8e" />
          <Text style={styles.hometext}>Wallet</Text>
        </View>
        </View>
      </View>

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f9f8f4"
        translucent={true}
      />
    </View>
  );
}
