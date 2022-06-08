import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Product = () => {
  return (
   <Card style={{
       display: 'flex',
    //    flexDirection: 'row',
       
   }}>
    <Card.Cover source={{ uri: 'https://m.media-amazon.com/images/I/61Qu8KYuynS._SL1500_.jpg' }} />
    <Card.Content style ={{
        alignItems:'center',
    }}>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
      <Button>Add to Card</Button>
    </Card.Content>
   
  </Card>
  )
}

export default Product

const styles = StyleSheet.create({})