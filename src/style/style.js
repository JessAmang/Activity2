import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f8f4",
  },
  head: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#f9f8f4",
  },
  body: {
    padding: 20,
    flex: 1
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    height: 80,
    alignItems: 'center'
  },
  cards: {},
  card1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
    height: 190
  },
  card1s: {
    flex: 1,
    gap: 80
  },
  card2s: {
    width: 90,
    alignItems: 'flex-end',
    
  },
  foot: {
    backgroundColor: 'white',
    padding: 10,

  },
  footer:{
backgroundColor: 'white',
flexDirection: 'row',
justifyContent: 'space-around',
paddingTop: 10
  },
  foot1: {},
  foot2: {
    flexDirection: 'row',
    paddingVertical: 20
  },
  foot2s: {
   justifyContent: 'center'
  },
  foot3s: {
    alignItems: 'center',
   },
  foot3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    height: 80
  },
  column: {
    alignItems: 'center'
  },
  //Text
  image: {

    height: 50,
    width: 50,
    marginRight: 10
  },
  imagegift: {
marginLeft: 10,
    height: 130,
    width: 90,
  },
  hometext: {},
  icon:{
    padding: 10,
    backgroundColor: 'white',
    width: 40,
    borderRadius: 50
  },
  amount:{
    fontSize: 25,
    fontWeight: '100'
  },
  personal:{
    fontSize: 18,
    
  },
  sends:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  bot:{
    padding: 15,
    backgroundColor: '#ffd140',
    borderRadius: 50,
    paddingHorizontal: 50,
    fontWeight: 'bold',
    color: '#142c8e',
    fontSize: 20
  },
  sendpay:{
    color: 'black',
    fontSize: 18
  },
  pay:{
fontSize: 18,

  },
  to:{
fontSize: 14,
color: 'grey'
  },
  sendnow:{
    color: '#0070e0',
    fontSize: 20,
    fontWeight: 'bold'
  }

});
