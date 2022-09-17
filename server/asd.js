const list = [{
    id:1
},{
    id:2
},{
    id:3
},{
    id:4
}
,{
    id:5
}]


const dis= [{
    id:123 ,list_id: [1,2],code:"a"
},{
    id:243213,list_id: [4],code : "b"
},
{
    id:243213,list_id: [5],code : "c"
}]

// const a = dis.map(e => {
//   const b =  e.list_id.map(el => el === e.id)

//   return b
// })
// console.log(a);
const newArr = []
dis.forEach(e =>{
    const ar = list.filter(el=> e.list_id.includes(el.id))
    if(ar.length !== 0){
        newArr.push({list : ar,code : e.code})
    }
})
console.log(newArr);
