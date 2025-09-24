const randomUser = {
  firstName: "Gerald",
  lastName: "Week",
  email: "gerald@week.de",
  dateOfBirth: "1986-3-28",
  adress: {
    street: "5th Avenue",
    number: 62,
    zipCode: 98627,
    city: "Berlin",
  },
  phoneNumber: {
    mobile: "012783645",
    home: "09898675",
  },
  password: "hello1234",
  pictureUrl: "http://example.com",
};

const userString = `{
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Marolo",
                "last": "de Souza"
            },
            "location": {
                "street": {
                    "number": 6089,
                    "name": "Rua Mato Grosso "
                },
                "city": "Indaiatuba",
                "state": "Rio de Janeiro",
                "country": "Brazil",
                "postcode": 28454,
                "coordinates": {
                    "latitude": "-77.5556",
                    "longitude": "-68.2564"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "marolo.desouza@example.com",
            "login": {
                "uuid": "a5c966a3-92a7-4a60-976b-3972384c9f7f",
                "username": "happypanda306",
                "password": "jackie",
                "salt": "MjMEMzbe",
                "md5": "0d8efad7b402cd0eb7e4807966e55f0c",
                "sha1": "bbdbf403b9ba26f4d1e9adb94685453661bc51a8",
                "sha256": "05e3080cb9e2d9c3a84ef1b4147345b40df5bc1f749f55675add5ad776fd1efe"
            },
            "dob": {
                "date": "1979-03-28T05:42:20.534Z",
                "age": 46
            },
            "registered": {
                "date": "2011-11-06T07:37:22.303Z",
                "age": 13
            },
            "phone": "(25) 2859-4973",
            "cell": "(46) 6228-2175",
            "id": {
                "name": "CPF",
                "value": "017.085.923-65"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/12.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
            },
            "nat": "BR"
        }`;

const deserialUser = JSON.parse(userString);
console.log(deserialUser);
deserialUser.name.first = "Robert";
deserialUser.name.last = "Blahnik";
const serialUser = JSON.stringify(deserialUser);
console.log(serialUser);

