class BankAccount {
    #balance;

    constructor(accountHolder,initialBalance = 0){  // initialbalance is a default value
        this.accountHolder = accountHolder
        this.#balance = initialBalance
    }

    getBalance(){   // public method for get saldo
        return this.#balance   
    }
 
    deposit(amount){   // public method for deposit money
        if(amount > 0){
            this.#balance = this.#balance+amount
            return `Deposit sebesar ${amount} , new Balance : ${this.#balance} `
        }else {
            return `Deposit amount must be positive.`
        }
    }

    withdrawl(amount){ // public method for withdrwal (Tarik tunai)
        if(amount > 0){
            this.#balance = this.#balance - amount
            return `withdraw ${amount}  , new Balance : ${this.#balance}`
        }else{
            return `invalid amount, saldo not enough`
        }
    }

}


const myAccount = new BankAccount("Adri",100)
console.log("🚀 Current  balance saldo:", myAccount.getBalance())

myAccount.deposit(200)
myAccount.withdrawl(50)

console.log(`Update Salado : ${myAccount.getBalance()}`)

// console.log(myAccount.#balance);   // SyntaxError: Private field '#balance' must be declared in an enclosing class

// So , #balance tidak bisa di akses langsung , hanya bisa digunakan sesuia method yang telah di tentukan,
// tidak bisa seenaknya di rubah , mengurangi reiko keslaahan dan penyalahgunaan 




