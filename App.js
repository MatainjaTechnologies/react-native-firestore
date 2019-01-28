/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage,Button,Divider,Card } from 'react-native-elements'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' ,
});

type Props = {};
export default class App extends Component<Props> {

  

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.adduser = this.adduser.bind(this)
    
    this.state = {
      posts: [],
      fname:"",
      lname:"",
      email:"",
      
      loading: true,
    };
  }
  adduser ()
  {

    let uName= this.state.fname;

 let email= this.state.email;


 if (uName=="")
 {
alert("Error!! Please Enter First Name ");

 }
else if (email=="")
{
alert("Error!! Please Enter Email ");
}
else
{

  this.ref.add({
  fname: this.state.fname,
  lname: this.state.lname,
  email:this.state.email,
    });
  this.fetchUser();
  alert("Upload Successfully");
  
}

    



  }


  fetchUser()
    {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)

    }


  componentDidMount() {
    this.unsubscribe = this.ref.where("email", "==", "matainja038@gmail.com").where("fname", "==", "Utpal").onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    const email2="";
    querySnapshot.forEach((doc) => {

      console.log(doc.data());
      const { email, fname } = doc.data();
     
      posts.push({
        key: doc.id, // Document ID
        email, // DocumentSnapshot
        fname,
       
      });
    });
    this.setState({
      posts,
      loading: false,
      
   });
  }
  render() {

    

    const { posts}=this.state;

    posts.reverse();

    console.log(posts);

    return (
      <View style={styles.container}>
      <Card>
        <Text style={styles.welcome}>Firestore DEMO</Text>

        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({fname:text})}/>
        <Divider style={{ backgroundColor: 'blue' }} />
        

        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({lname:text})}/>
        <Divider style={{ backgroundColor: 'blue' }} />
       
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(text) => this.setState({email:text})}/>
        <Divider style={{ backgroundColor: 'blue' }} />

        <View style={{height:20}}></View>
        
    <Button
    style={{ marginTop: 100 }}
  raised
  icon={{name: 'cached'}}
  backgroundColor="red"
  onPress={this.adduser}
  title='Store USER' />

  </Card>

 <ScrollView>
  <List containerStyle={{marginBottom: 20}}>
  {
    posts.map((l) => (
     
      <ListItem
        roundAvatar
        
        key={l.email}
        title={l.fname}
      />
       
    ))
  }
</List>
</ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
