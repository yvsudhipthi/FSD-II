let userName:string = "Sudhipthi";
let userAge:number=18;
let isMember:boolean=true;
console.log("Data type of userName is-->"+typeof userName);
console.log("Data type of userAge is-->"+typeof userAge);
console.log("Data typeof is Member is-->"+typeof isMember);
function displayUserProfile(name:string,age:number,active:boolean):void{
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active ? "Active":"Inactive"}`);
}
displayUserProfile(userName, userAge,isMember);