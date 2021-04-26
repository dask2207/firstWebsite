// //For Empty object

// let object={}
// console.log(object);

let tony={
    name: 'Tony',
    lastName: 'Stark',
    friend: ['steve', 'Bruce', 'Peter'],
    age: 45,
    abc: undefined,
    address:{
        state: 'new york',
        city: 'long island'
    },
    saysHi:function fn()
    {
        console.log('Iron man says hello');
        return "Part of journey is the end"
    },
    isAvenger: true
}
// console.log(tony);


// console.log(tony.name);
// console.log(tony.lastName);
// console.log(tony.age);
// console.log(tony.friend);
// console.log(tony.address);
// console.log(tony.saysHi());
// console.log(tony.isAvenger);


// console.log(tony['name']);
// console.log(tony['lastName']);
// console.log(tony['age']);
// console.log(tony['friend']);
// console.log(tony['address']);
// console.log(tony['saysHi']());
// console.log(tony['isAvenger']);


//here we print key by using Object
let karr = Object.keys(tony);
// console.log(karr);

//value print krne k liye
// for(let k in tony)
// {
//     console.log(tony[k]);
// }

//here we print key by using loop
for(let i=0; i<karr.lenght; i++)
{
    let key = karr[i];
    console.log(tony[karr[i]]);
    console.log(key)
}