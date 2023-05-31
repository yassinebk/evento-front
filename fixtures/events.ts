export interface EventX {
	id: number;
	name: string;
	date: Date;
	location: string;
	image: string;
	tags: string[];
	description: string;
	organizer: string;
	price: string;
}

export const EventXs: EventX[] = [
	{
		id: 1,
		name: "Music Festival",
		date: new Date("2023-06-10T19:00:00"),
		location: "Central Park, New York",
		image: "https://example.com/music-festival.jpg",
		tags: ["music", "festival"],
		description: "Join us for a night of music and fun in Central Park!",
		organizer: "New York Music Association",
		price: "10.00"
	},
	{
		id: 2,
		name: "Comedy Show",
		date: new Date("2023-06-15T20:00:00"),
		location: "The Comedy Cellar, New York",
		image: "https://example.com/comedy-show.jpg",
		tags: ["comedy", "stand-up"],
		description:
			"Get ready to laugh with some of the best comedians in the city!",
		organizer: "New York Comedy Association",
		price: "25.00"
	},
	{
		id: 3,
		name: "Art Exhibition",
		date: new Date("2023-06-20T10:00:00"),
		location: "The Museum of Art, New York",
		image: "https://example.com/art-exhibition.jpg",
		tags: ["art", "exhibition"],
		description:
			"Experience the beauty and creativity of some of the world's most talented artists!",
		organizer: "New York Art Association",
		price: "50.50"
	},
	{
		id: 4,
		name: "Food Festival",
		date: new Date("2023-06-25T12:00:00"),
		location: "Times Square, New York",
		image: "https://example.com/food-festival.jpg",
		tags: ["food", "festival "],
		description:
			"Satisfy your taste buds with a variety of delicious foods from around the world!",
		organizer: "New York Food Association",

		price: "150.50"
	},
	{
		id: 5,
		name: "Film Festival",
		date: new Date("2023-07-01T18:00:00"),
		location: "Lincoln Center, New York",
		image: "https://example.com/film-festival.jpg",
		tags: ["film", "festival"],
		description:
			"Experience the magic of cinema with some of the best films from around the world!",
		organizer: "New York Film Association",

		price: "20.50"
	},
	{
		id: 6,
		name: "Tech Conference",
		date: new Date("2023-07-05T09:00:00"),
		location: "Javits Center, New York",
		image: "https://example.com/tech-conference.jpg",
		tags: ["tech", "conference"],
		description:
			"Learn about the latest trends and innovations in the world of technology!",
		organizer: "New York Tech Association",
		price: "25.50"
	},
	{
		id: 7,
		name: "Fashion Show",
		date: new Date("2023-07-10T19:00:00"),
		location: "Madison Square Garden, New York",
		image: "https://example.com/fashion-show.jpg",
		tags: ["fashion", "show"],
		description:
			"Experience the glamour and style of the fashion world with some of the top designers in the industry!",
		organizer: "New York Fashion Association",
		price: "35.50"
	}
];
