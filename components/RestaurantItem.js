/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1567667778211-b19f5a4e1efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://media.istockphoto.com/id/939055280/photo/view-of-stylish-empty-cafe-with-arranged-tables-and-chairs-for-visitors.jpg?s=612x612&w=0&k=20&c=9zfETB_UA_U-9IaM5VgwNLp12-Uy0OXNNjdIfCaw5WE=',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginBottom: 30,
      }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: 'white',
          }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: '100%',
          height: 180,
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
        }}
      />
    </>
  );
};

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {props.name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: 'gray',
        }}>
        30-45 min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: '#fff',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
