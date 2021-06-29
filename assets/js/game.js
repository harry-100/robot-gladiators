/* function fight() {
    window.alert("The fight has begun");
} */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]

/*
var fight = function(enemyName) {
    // Alert players that they are starting the new round
    
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?. Enter 'FIGHT' or 'SKIP' to choose.")
        if (promptFight==="skip" || promptFight==="SKIP") {
            var confirmSkip = window.confirm("Are you sure you want to quit?")
            if (confirmSkip){
                playerMoney = playerMoney - 10;
                window.alert(playerName + " has chosen to skip the fight! Goodbye!")
                console.log("player money= " + playerMoney)
                break;
            }
        if (promptFight==='FIGHT' || promptFight==='fight') {

            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
            // check enemy's health
            if (enemyHealth<=0) {
                console.log(enemyName + " has died!");
                break;
            }
      //      else {
      //          console.log(enemyName + " still has " + enemyHealth + " health left.")
      //      }
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked. 
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health  remaining.")

            if (playerHealth<=0) {
                console.log(playerName + " has died!")
                break;
            }
        //    else {
        //        console.log(enemyName + " attacked. " + playerName + " has " + playerHealth + " health remaining.")
        //    }
        }
                    
        }   
        else {
            window.alert("You need to choose a valid option. try again!")
        }
    }    
} 
*/
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
for(var i=0; i < enemyNames.length; i++){
   // debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}