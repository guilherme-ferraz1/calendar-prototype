import React from 'react';
import { View, Image, Text, Colors } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native'
import { USERS_MOCK, UserI } from '../mocks/users'

interface UserSelectorProps {
	setSelectedUser: (user: UserI) => void
	selectedUser: UserI
}

export const UserSelector = ({ selectedUser, setSelectedUser }: UserSelectorProps) => {
  return (
		<View row center style={{ borderColor: '#33415599', borderTopWidth: 1}}>
			{USERS_MOCK.map((user) => 
				<TouchableOpacity key={user.name} onPress={() => setSelectedUser(user)}>
					<View 
						backgroundColor={selectedUser === user ? Colors.blueGray900 : undefined}
						row 
						center 
						marginH-4
						padding-8
						style={{ paddingHorizontal: selectedUser === user ? 16 : 4 }}
					>
						<Image width={40} height={40} borderRadius={20} marginR-5 source={{ uri: user.picture }} />
						{selectedUser === user && <Text h3 color='white' marginL-8>{user.name}</Text>}
					</View>
				</TouchableOpacity>
			)}
		</View>
  )
}