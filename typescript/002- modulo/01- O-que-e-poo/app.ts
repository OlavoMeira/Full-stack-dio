class User {
    name: string 
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User('Olavo', 28)
user.showName()

const otherUser: User = new User('João', 32)
otherUser.showName()