function fight() {
    window.alert("The fight has begun");
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the new round
    window.alert("Welcome to Robot Gladiators!");
    
    /* Subtract the value of 'playerAttack' from the value of 'enemyHealth'
    and use that result to update the value in 'enemyHealth' variable. */
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
    // check enemy's health
    if (enemyHealth<=0) {
        console.log(enemyName + " has died!");
    }
    else {
        console.log(enemyName + " still has " + enemyHealth + " health left.")
    }
    /* Subtract the value of 'enemyAttack' from the value of 'playerHealth'
    and use that result to update the value in the 'playerHealth' variable */
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked. 
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health  remaining.")

    if (playerHealth<=0) {
        console.log(playerName + " has died!")
    }
    else {
        console.log(playerName + " attacked. " + playerName + " has " + playerHealth + " health remaining.")
    }
};

fight();

// Subtract the value of "playerAttack" from the value of "enemyHealth"