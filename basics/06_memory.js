// Stack(primitive),          Heap(non-primitive)

let myyoutubename ="hiteshchoudarydotcom"

let anothername=myyoutubename

anothername="cahiaurcode"

console.log(myyoutubename);
console.log(anothername);


let userone={//it is stored in heap memory means only

    email:"Avi@google.com",
    upi:"avi@ypl"


}
let usertwo=userone// if we use it ,it will take raferance of memory
usertwo.email="harsh@google.com"

//but in stack memory it will make a copy of itself, therefore 
//if we change the its value it will of its copied version and can't affect real one


