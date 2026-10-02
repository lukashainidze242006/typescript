console.log("Hotel Booking System luka shainidze");

// 2.1
const accommodationType = "Single Room";
const roomLevel = 8;
const roomAvailable = true;
const nightlyRate = 120;

console.log(accommodationType);
console.log(roomLevel);
console.log(roomAvailable);
console.log(nightlyRate);

// 2.2
function showRoomDetails(): string {
  return `ოთახი: ${accommodationType}, სართული: ${roomLevel}, ხელმისაწვდომია: ${roomAvailable}, ფასი ღამეში: ${nightlyRate};`;
}

console.log(showRoomDetails());

// 2.3
function classifyRoom(priceValue: number): void {
  if (priceValue < 100) {
    console.log("economy");
  } else if (priceValue <= 250) {
    console.log("Standard");
  } else {
    console.log("Luxury");
  }
}


classifyRoom(80);
classifyRoom(300);


// 2.4 - მასივი და ციკლი
const cities: string[] = [
    "Tbilisi",
    "Batumi",
    "Kutaisi",
    "Rustavi",
    "Gori"
];
for (let i = 0; i < cities.length; i++) {
    console.log(`${i} - ${cities[i]}`);
}
// 2.5 - საშუალო შეფასება
const ratings: number[] = [8, 9, 7, 10];
let totalRating = 0;
for (const rating of ratings) {
    totalRating += rating;
}
const averageRating = totalRating / ratings.length;
console.log("საშუალო შეფასება:", averageRating);

// 3.1 - Type Alias
type TRoom = {
  id: number;
  name: string;
  type: string;
  capacity: number;
  price: number;
};

// 3.2 - Interface
interface IHotel {
  name: string;
  city: string;
  country: string;
  foundedYear: number;
  website?: string;
}

// 3.3 - Objects
const hotel: IHotel = {
  name: "Hotel Tbilisi",
  city: "თბილისი",
  country: "საქართველო",
  foundedYear: 2015,
  website: "https://hoteltbilisi.ge",
};

const room: TRoom = {
  id: 1,
  name: "Sea View",
  type: "Deluxe",
  capacity: 2,
  price: 180,
};

console.log("სასტუმრო:", hotel);
console.log("ოთახი:", room);

// 3.4 - Array of objects
const rooms: TRoom[] = [
  { id: 1, name: "Sea View", type: "Deluxe", capacity: 2, price: 180 },
  { id: 2, name: "Mountain View", type: "Standard", capacity: 3, price: 150 },
  { id: 3, name: "Garden Room", type: "Suite", capacity: 4, price: 220 },
];

rooms.forEach((roomItem) => {
  console.log(`${roomItem.name} - ${roomItem.price} ლარი`);
});

// No visible page output. Everything is shown in the browser console only.

// 4.1 - Guest კლასი
class Guest {
  public firstName: string;
  public lastName: string;
  public email: string;
  private age: number;
  constructor(firstName: string, lastName: string, email: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
  // 4.4 - getProfile
  public getProfile(): string {
    return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age};`;
  }
}
// 4.2 - Guest ობიექტი
const guest = new Guest("Luka", "Rukhadze", "luka@mail.com", 22);
console.log(guest.firstName);
console.log(guest.lastName);
console.log(guest.email);
// 4.3 - მემკვიდრეობა
class VipGuest extends Guest {
  private bookedRooms: string[];
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    bookedRooms: string[],
  ) {
    super(firstName, lastName, email, age);
    this.bookedRooms = bookedRooms;
  }
  public getBookedRooms(): string[] {
    return this.bookedRooms;
  }
}
// VipGuest ობიექტი
const vipGuest = new VipGuest("Nika", "Beridze", "nika@mail.com", 30, [
  "Sea View",
  "Family Room",
]);
// 4.4 - ორივე ობიექტის ინფორმაცია
console.log(guest.getProfile());
console.log(vipGuest.getProfile());
console.log(vipGuest.getBookedRooms());
