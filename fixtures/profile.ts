interface Profile {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	avatar: string;
	bio: string;
}

export const profile: Profile = {
	id: 1,
	firstName: "John",
	lastName: "Doe",
	email: "johndoe@example.com",
	phone: "555-555-5555",
	address: "123 Main St",
	city: "New York",
	state: "NY",
	zipCode: "10001",
	country: "USA",
	avatar: "https://example.com/avatar.jpg",
	bio: "I'm a software engineer with a passion for building scalable and efficient applications."
};
