let str ="masai";
let bag ="";
for(let  i=str.lenth-1;i>=0;i--){
    bag=bag+str[i];
}if(bag===str){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}