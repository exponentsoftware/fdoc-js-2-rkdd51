import React from 'react'

const SecondDay = () => {
    return (
        <>
        <div>
         {/* Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
                const countries = [
                'ALBANIA',
                'BOLIVIA',
                'CANADA',
                'DENMARK',
                'ETHIOPIA',
                'FINLAND',
                'GERMANY',
                'HUNGARY',
                'IRELAND',
                'JAPAN',
                'KENYA'
                ]
                            createArrayOfArrays(countries)
                            [
                            ['Albania', 'ALB', 7],
                            ['Bolivia', 'BOL', 7],
                            ['Canada', 'CAN', 6],
                            ['Denmark', 'DEN', 7],
                            ['Ethiopia', 'ETH', 8],
                            ['Finland', 'FIN', 7],
                            ['Germany', 'GER', 7],
                            ['Hungary', 'HUN', 7],
                            ['Ireland', 'IRE', 7],
                            ['Japan', 'JAP', 5],
                            ['Kenya
                            ', 'KEN', 5]
                            ] */}


                          const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let arrays = [];

createArrayOfArrays(countries);

function createArrayOfArrays(countries) {
  countries.map((item, index) => {
    const abr = item.split("").splice(0, 3).join("");
    const countriesNameLength = item.length;

    return arrays.push([item + " " + abr + " " + countriesNameLength]);
  });
}
console.log(arrays);



{/* 
Write a function which filter users who has scoresGreaterThan85,
Write a function which addUser to the user array only if the user does not exist.
Write a function which addUserSkill which can add skill to a user only if the user exist.
Write a function which editUser if the user exist in the users array.
/////////////////////////////// function to filter out users who scores above 85/////////////////////////
// const scoresGreaterThan85 = (users) => {
//   const userscoresabove85 = users.filter((elem, index) => elem.scores > 85);
//   console.log(userscoresabove85);
// };

// scoresGreaterThan85(users);

//////////////////////	Write a function which addUser to the user array only if the user does not exist. ///////////  
// const addUser = (user) => {

//   const array = [...users]

//   const find = array.filter((elem, index) => elem.name == user.name)
  
//   switch (find.length) {
//     case 0:
//       array.push(user)
//       console.log("User added.");
//       break;
//     case 1:
//       console.log("user already exist.");
//     default: 
//       break;
//   }

//   console.log(array);
// }

// newUser = {
//   name: "Aman",
//   score: 98,
//   skills: ["React", "Js", "CSS", "HTML", "MongoDB", "Node.Js", "Express"],
//   age: 25
// }
 
// addUser(newUser)




///////////////////////////////To add Skills to already existing user////////////////////////

const addSkills = (user) => {
  
  const array = [...users]

  const find = array.filter((elem, index) => elem.name == user.name)

  if (find.length == 0) {
  return  console.log("user doesn't exist");
  }
  find[0].skills.push(...user.skills)
//  console.log(find[0].skills)
  console.log(array);
}

newUser = {
  name: "Alex",
  score: 98,
  skills: ["MongoDB", "Node.Js", "Express"],
  age: 25
}

addSkills(newUser)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////// function to filter out users who scores above 85/////////////////////////
// const scoresGreaterThan85 = (users) => {
//   const userscoresabove85 = users.filter((elem, index) => elem.scores > 85);
//   console.log(userscoresabove85);
// };

// scoresGreaterThan85(users);

//////////////////////	Write a function which addUser to the user array only if the user does not exist. ///////////  
// const addUser = (user) => {

//   const array = [...users]

//   const find = array.filter((elem, index) => elem.name == user.name)
  
//   switch (find.length) {
//     case 0:
//       array.push(user)
//       console.log("User added.");
//       break;
//     case 1:
//       console.log("user already exist.");
//     default: 
//       break;
//   }

//   console.log(array);
// }

// newUser = {
//   name: "Aman",
//   score: 98,
//   skills: ["React", "Js", "CSS", "HTML", "MongoDB", "Node.Js", "Express"],
//   age: 25
// }
 
// addUser(newUser)




///////////////////////////////To add Skills to already existing user////////////////////////
{/* 
const addSkills = (user) => {
  
  const array = [...users]

  const find = array.filter((elem, index) => elem.name == user.name)

  if (find.length == 0) {
  return  console.log("user doesn't exist");
  }
  find[0].skills.push(...user.skills)
//  console.log(find[0].skills)
  console.log(array);
}

newUser = {
  name: "Alex",
  score: 98,
  skills: ["MongoDB", "Node.Js", "Express"],
  age: 25
}

addSkills(newUser)

            
        </div>
        </>
    )
} */}

export default SecondDay;
