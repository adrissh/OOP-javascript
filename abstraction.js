//  abstraction  OOP i JS ES6

class UserManager {

    constructor(){
        if(this.constructor === UserManager){
            throw new Error(`Cannot instantiate abstract class UserManager directly`)
        }
        this.users = []
    }

    // method abstract
    addUser(user){
        throw new Error(`Method addUser() must be implemented`)
    }

    findUser(userId){
        return this.users.find(user => user.id === userId)
    }

}

class InMemoryUserManager extends UserManager{
    constructor(){
        super() // call constructor class abstarct
    }

    addUser(user){
        this.users.push(user)
        console.log(`User '${user.name}' success Added`)
    }
}


const userManager = new InMemoryUserManager()
userManager.addUser({id : 1 ,name :'Supratman'})
userManager.addUser({id : 2 ,name :'Agung'})

console.log(userManager.findUser(2))


const testDirectly = new UserManager()   
// ini pasti gagal karena langsung membuat instal dari class UserManager
// harusnya membuat class abru yang di extends ke UserManager

console.log("🚀 ~ testDirectly:", testDirectly.addUser({no : 3,name : josep}))  
// ini pasti gagal akan menampilkan pesan error










