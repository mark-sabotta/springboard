function createAccount(pin, amount = 0) {
    const account = {
        checkBalance(tryPin){
            if(tryPin !== pin) return "Invalid PIN.";
            return `$${amount}`
        },

        deposit(tryPin, value){
            if(tryPin !== pin) return "Invalid PIN.";
            amount += value;
            return `Successfully deposited $${value}. Current balance: $${amount}.`;
        },

        withdraw(tryPin, value){
            if(tryPin !== pin) return "Invalid PIN.";
            if(value > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= value;
            return `Successfully withdrew $${value}. Current balance: $${amount}.`;
        },

        changePin(tryPin, newPin){
            if(tryPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }
    return account;
}

module.exports = { createAccount };
