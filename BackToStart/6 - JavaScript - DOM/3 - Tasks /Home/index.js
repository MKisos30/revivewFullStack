// 1. create class of tasks (לא משנה הנושא)

// class task {
//     constructor (homeClean, homeShopping, cook, dishes, careOfKids) {
//         this.homeClean = homeClean;
//         this.homeShopping = homeShopping;
//         this.cook = cook;
//         this.dishes = dishes;
//         this.careOfKids = careOfKids;
//     }

// }

class Task {
    constructor (nameOfTask, theTask) {
        this.nameOfTask = nameOfTask;
        this.theTask = theTask;
    }
 
}

const homeClean = new Task("Clean home", "You need to clean the house")
const homeShopping = new Task("Home shopping", "Need to do shooping for home")
const cook = new Task("Cook food", "Need to cook")
const careOfKids = new Task("Babysiting", "Need to ask someone to take care of the kids")


// 2. create method or function (chosse what and when): 
//     2.1. create new task. 

const newTask () {
    
}
//     2.2. update the task.
//     2.3. delete task.