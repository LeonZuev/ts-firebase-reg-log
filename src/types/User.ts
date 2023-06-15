interface Name {
  firstname: string,
  lastname: string,
}

interface User {
  id: number,
  email: string,
  username: string,
  password: string,
  name: Name,
  // address: {
  //   city: 'kilcoole',
  //   street: '7835 new road',
  //   number: 3,
  //   zipcode: '12926-3874',
  //   geolocation: {
  //     lat: '-37.3159',
  //     long: '81.1496',
  //   }
  // },
  // phone: '1-570-236-7033'
}

export default User;
