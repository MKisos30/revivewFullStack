// ex1

// class Child {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     detailsOfChild () {
//         return `name of child is ${this.name}, the age is ${this.age}, in grade ${this.grade}`
//     }
// }

// const pini = new Child('Pini', 8, 'second')
// const michael = new Child('Michael', 5, 'kinder garden')

// console.log(pini.detailsOfChild());
// console.log(michael.detailsOfChild());

// document.getElementById('piniEl').innerHTML =
// `name of child is <h1>${pini.name}</h1>,
// the age is <h4>${pini.age}</h4>
// and grade <p style="color: green">${pini.grade}</p>`

// document.getElementById('michaelEl').innerHTML =
// `name of child is <h1>${michael.name}</h1>,
// the age is <h4>${michael.age}</h4>
// and grade <p style="color: blue">${michael.grade}</p>`

/*
name - h1
age - h4
grade - p
*/

// **********************************

// ex2

// const rotemCohen = new Celleb('Rotem Cohen', 'Rotem-Cohen', '5000') 
// rotemCohen.updateNumOfFollowers(9874)
//need to include in class function that update the amount of followers
//need to unclude in class function that show the amount of followers


// 1. create a class of celebs with properties:
// name, genre, account in TikTok, account in Instagram, and the number of followers.

class Celeb {
    constructor(name, gender, tikTokAccount, instegramAccount, numOfFollower) {
        this.name = name;
        this.gender = gender;
        this.tikTokAccount = tikTokAccount;
        this.instegramAccount = instegramAccount;
        this.numOfFollower = numOfFollower;

    // console.log(`${this.name} has ${this.numOfFollower} followers`)
    }

    amountFollower() {
        return console.log('hy');
    }

    // followersAmount () {
    //     return console.log(`${this.name} has ${this.numOfFollower} followers`); 
    // }
}

const shiriMaimon = new Celeb('Shiri Maimon', 'Female', 'shirimaimon1', 'shiri-maimon', 40000)
const ravivKaner = new Celeb('Raviv Kaner', 'Male', 'ravivkaner', 'raviv-kaner', 100000)
// console.log(typeof(ravivKaner.numOfFollower));
const yehoramGaon = new Celeb('Yehoram Gaon', 'Male', 'yehoramgaon', 'yehoram-gaon', 70000)
const kerenPeles = new Celeb('Keren Peles', 'Female', 'kerenpeles', 'keren-peles', 120000)
// console.log(shiriMaimon, ravivKaner, yehoramGaon, kerenPeles)

document.getElementById('cellebs').innerHTML =
`The celeb ${shiriMaimon.name}
she is ${shiriMaimon.gender} 
and her tiktok account is ${shiriMaimon.tikTokAccount} 
her instegram account is ${shiriMaimon.instegramAccount} 
her number of followers ${shiriMaimon.numOfFollower}`


// 2. based on question number one,
// create a method to set the number of followers and another method to get the number of followers.
// Create a few celebs-objects, and set the number of followers.
// Write to the console each celeb TikTok account.

// const followersAmount () => {
//     return console.log(`${Celeb.name} has ${Celeb.numOfFollower} followers`);
// }



// 3. create a function that gets all the celebs and returns the celeb with the most followers. 

// const cellebFunc () => {
//     return (
//         document.getElementById('cellebs').innerHTML 
//     )
// }

// 4. return a list of celebs, ordered by their number of followers