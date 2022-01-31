let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
} 
if (runnerAge > 18 && registeredEarly){
  console.log(`Hello Early Adult Runner ${raceNumber}, Your race starts at 9:30 am. `)
} else if (runnerAge > 18 && !registeredEarly){
  console.log(`Hello Late Adult Runner ${raceNumber}, Your race starts at 11:00 am. `)
} else if(runnerAge < 18){
console.log(`Hello Youth Runner ${raceNumber}, Your race starts at 12:30 pm. `)
} else
{
  console.log(`Hello Runner, Kindly see the registration desk. `)
}