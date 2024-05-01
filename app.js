/**
 * Map Object:
 * holds key-value pairs; remembers the original inserion order of the keys
 * 
 *  4 Primary properties: 
 *  .set(key, value)
 *  .get(key)
 *  .size
 *  .delete(key)
 * 
 *  each key in the map must be unique in the Map's collection
 */

const test = document.getElementById('test')

const users = new Map()

// .set(key, value) => sets the value for the passed key in the object

users.set('user1', {
    id: 1,
    username: 'apologicode',
    email: 'apologicode.com',
    password: '12345',
    following: 124, 
    followers: 5000
})

users.set('user2', {
    id: 2,
    username: 'maggie',
    email: 'magpie.com',
    password: '78910',
    following: 248, 
    followers: 506
})

users.set('user3', {
    id: 3,
    username: 'garrett',
    email: 'gterry.com',
    password: 'moby3',
    following: 598, 
    followers: 329
})

users.set('user4', {
    id: 4,
    username: 'anders',
    email: 'seemore.com',
    password: 'allwords',
    following: 82, 
    followers: 3009
})

users.set('user5', {
    id: 5,
    username: 'clark',
    email: 'clark.com',
    password: 'kentphone',
    following: 238, 
    followers: 593
})

users.set('user6', {
    id: 6,
    username: 'dhon',
    email: 'dhon.com',
    password: 'dohwhat',
    following: 108, 
    followers: 218
})

// console.log(users)

// .get(key) => returns value associated with the passed key or undefined

// console.log(users.get('user2'))

// .size => returns the number of key/value pairs

// console.log(users.size)

// .delete(key) => returns true if an element in the Map object existed if the object existed and has been removed
//              => returns false if the element does not exist

// users.delete('user2')

// console.log(users.delete('user7'))
// console.log(users)

const user = document.getElementById('user')
user.innerText = users.get('user3').username

const following = document.getElementById('following')
following.innerText = users.get('user3').following

const followers = document.getElementById('followers')
followers.innerText = users.get('user3').followers

const paragraph = document.createElement('p')
paragraph.innerText = users.get('user4').username

// const test = document.getElementById('test')
test.appendChild(paragraph)

// loop through a map using a for/of loop to iterate through an object
// destructuring the users object and getting then key and value
// then get the
// for (const [key, value] of users) {
//     for (const prop in value) {
//         console.log(`key: ${key}, value: { ${prop}: ${value[prop]}}`)
//     }
// }

// for (const [key, value] of users) {
//     // console.log(key, value)
//     for (const prop in value) {
//         if (prop == 'email') {
//             console.log(`${key}, email: ${value[prop]}`)
//         }
//     }
// }

// Iterate using a for/each loop  forEach(callback function)

// users.forEach((key) => {
//     console.log(`${key.username}, email: ${key.email}`)
//     const paragraph = document.createElement('p')
//     paragraph.innerText = `${key.username}'s email: ${key.email}`
//     test.appendChild(paragraph)
// })

// .keys() => returns a new iterator object that contains the keys
// .values() => returns a new iterator object that contains the values
let keys = users.keys()
console.log(keys)

let values = users.values()
console.log(values)

// .has => returns a boolean indicating whether a value has been associated with the passed in key

let hasValue = users.has('user1')
hasValue = users.has('user8')
console.log(hasValue)

// Useful for caching data on local device
// .clear() => removes all key/value pairs from the map object

// Example:  use a currentUser object that is cleared once the session is over

// Convert a two-dimensional array to a map
const playerScores = [
    ['basicallyAI', 3400],
    ['Semij', 2290],
    ['AndresTheGiant01', 4322]
]

const playerMap = new Map(playerScores)
// console.log(playerMap)

// use Array.from() method to create an array from an iterable object
const playerMap2 = Array.from(playerScores)
// console.log(playerMap2)


// clone Map make a copy to avoid corrupting the data; cloned map is unique from original array      

const player = new Map([[' Mookie Betts', 'Second Base']])
const playerClone = new Map(player)

console.log(player === playerClone)

// merge two maps together

const eaGames = new Map([
    ['Madden', 'sport'],
    ['FIFA', 'sport'],
    ['Battlefield', 'shooter']
])

const activisionGames = new Map([
    ['C.O.D.', 'shooter'],
    ['Splinter Cell', 'shooter'],
    ['Crash Bandicoot', 'adventure']
])

// spread both maps to merge into new Map
const mergedMaps = new Map([...eaGames, ...activisionGames])
console.log(mergedMaps)

// .groupBy() static method that groups elements of a given iterable using the values returned by a provided callback function.
// The final returned map uses the unique values from the test function as keys, which can be used to get the array of elements in each group

const inventory = [
    { name: 'hip hop', qty: 90 },
    { name: 'jazz', qty: 600 }, 
    { name: 'soul', qty: 7 },
    { name: 'rock', qty: 633 }, 
    { name: 'classical', qty: 45 }, 
    { name: 'country', qty: 200 }
]
console.clear()

const getMore = { getMore: true }
const sufficient = { getMore: false }

const result = Map.groupBy(inventory, ({ qty }) => qty < 200 ? getMore : sufficient)

console.log(result)
console.log(result.get(getMore))

const artists = [ 
    {id: 2, fName: 'John', lName: 'Coltrane', alias: null},
    {id: 4, fName: 'Prince', lName: 'Nelson', alias: 'Prince'},
    {id: 6, fName: 'David', lName: 'Jones', alias: 'David Bowie'}
]

const hasAlias = { hasAlias: true }
const noAlias = { hasAlias: false }

const artistMap = Map.groupBy(artists, ({ alias }) => alias == '' || alias == null ? noAlias : hasAlias)

const useAlias = artistMap.get(hasAlias)

console.log(useAlias)

console.clear()
// write a set of data to use for the Map object

const courses = [
    { course: 'english 1', staff: 4, enrollment: 455 },
    { course: 'english 2', staff: 4, enrollment: 398 },
    { course: 'english 3', staff: 2, enrollment: 255 },
    { course: 'english 4', staff: 1, enrollment: 197 },
    { course: 'AP english 3', staff: 1, enrollment: 89 },
    { course: 'AP english 4', staff: 1, enrollment: 16 }
] 


// const courses = [
//     { course: 'english 1',  enrollment: 423 },
//     { course: 'english 2',  enrollment: 398 },
//     { course: 'english 3', enrollment: 255 },
//     { course: 'english 4',  enrollment: 197 },
//     { course: 'AP english 3',  enrollment: 89 },
//     { course: 'AP english 4', enrollment: 16 }
// ] 
const moreTeachers = { moreTeachers: true }
const enoughTeachers = { moreTeachers: false }

// staff needed = enrollment / 33 +1

const teachersNeeded = Map.groupBy(courses, ({ course, enrollment, staff }) => (enrollment /staff) % 33 > staff 
? console.log(course, enrollment / staff, (enrollment / staff) % 33) : console.log(course, enrollment / staff) )

// const result = Map.groupBy(inventory, ({ qty }) => qty < 200 ? getMore : sufficient)


// const teachersNeeded = Map.groupBy(courses, ({ enrollment, staff }) => enrollment % staff > 33 ? moreTeachers : enoughTeachers)

console.log(teachersNeeded)