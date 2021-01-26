import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../navigation/AuthProvider';

export function DrawerContent(props) {
    const {logout, user} = useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.header}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                            size={70}
                        />
                        <View style={{marginLeft:15, flexDirection:'column', justifyContent: 'center'}}>
                            <Title >John Doe</Title>
                            <Caption >{user.email}</Caption>
                        </View>
                    </View>
                    <Drawer.Section>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About Us')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Loading..."
                            onPress={() => {props.navigation.navigate('Loading...')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => logout()}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row', 
        backgroundColor: '#009387', 
        paddingTop: 15, 
        paddingLeft: 10, 
        paddingBottom: 20
    }
});