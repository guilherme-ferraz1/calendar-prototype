export interface UserI {
	name: string
	picture: string
}

export const USERS_MOCK: UserI[]  = [
  {
    name: "Alice",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Bob",
    picture: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Charlie",
    picture: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "David",
    picture: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Eva",
    picture: "https://randomuser.me/api/portraits/women/55.jpg"
  }
]