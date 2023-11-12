//let x=1
//let sum = 0

//do{
//    sum += x
//    x++
//}
//while(x <= 10)
//for(x; x <=10; x++){
//    sum+=x

//}
//console.log(sum)

//let sum = 0
//for(x=0; x<=10; x++){
//    if(x%3==2){
//        console.log(x)
//    }
//    sum+=x
//}
//
//let classJSA01 = ["HA", "TA", "DT", "TD", "DT", "KD", "XY"]
//console.log(classJSA01.length)
//for(let i = 0; i<classJSA01.length; i++){
//        console.log(classJSA01[i])
//}
//console.log(classJSA01.pop())
//console.log(classJSA01)
//console.log(classJSA01.push("NIGGA"))
//console.log(classJSA01)

let arr = [["apple" , 16] , ["banana" , 12] , ["guava" , 18]]
let sub_arr = arr[1]
let fruit = sub_arr[0]
let quantity = sub_arr[1]
console.log("I have "+quantity+" "+fruit)

let array = [["apple" , 16] , ["banana" , 12] , ["guava" , 18]]
//for(let hoaianh = 0 ; hoaianh<array.length;hoaianh++){
//    console.log(array[hoaianh])
//}

//let i = 0 
//while (i < arr.length ){
//    console.log("i have"+ arr[i][1]+" "+arr[i][0])
//    i++
//}       
//
//let person = {
//    fname : "Ho Trinh Hoai Anh",
//    age : 16,
//    add : "Ha Noi"
//};
//person.job = "student"
//delete person.job
//console.log(person)
//console.log(person.fname)
//console.log(person["fname"])
//
//for(key in person){
//    console.log(person[key])
//}
//
//let myDog = {
//    fname : "Thien Anh",
//    legs : "4",
//    fur : "black"
//};
//
//for(thayPhu in myDog){
//    console.log(myDog[thayPhu])
//}

const height = 5 
for(let i= 1; i <= height; i++){
    let space = ' ' . repeat(height - i)
    let stars = '1' . repeat(2 * i - 1)
    console.log(space + stars)
}

let myArray = [9, 7, 9, 0, 7, 8, 387,125, 456]
for(number in myArray){
    if(number % 2 == 0 || number == 0){
        console.log(number)
    }
}

let myAnswer = []
let q1 = prompt('Do you love me ?')
if(q1 != ' '){
    myAnswer.push(q1)
    let q2 = prompt('Do you love me ?')
    if(q2 != ' '){
        myAnswer.push(q2)
        let q3 = prompt('Do you love me ?') 
        if(q3 != ' '){
            myAnswer.push(q3)

}
}
}


