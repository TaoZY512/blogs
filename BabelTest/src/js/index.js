
//1.let关键字，不可重名
let a=10;

// let a=20;
{
    var b = 3.14;
}
console.log(b) //3.14
{
    let c=3.14;
}
//console.log(c); //c is not defined
//2.const 常亮
const nums = 10;

//3.解析与赋值
let [name,age,gender] = ["栀子",21,"女"];
console.log(`
姓名：${name}
年龄:${age}
性别:${gender}
`)//姓名：栀子
//年龄:21
//性别:女

let {pername,address:locations} = {
    pername:"Admin",
     address:"成都市"
}
console.log(`
  姓名：${pername}
  地址：${locations}
`)// 姓名：Admin
//地址：成都市

function minAdnMax(nums){
    let min = nums[0];
    let max = nums[0];
   nums.forEach(num => {
       min = num < min ? num : min;
       max = num > max ? num : max;
   });
   return {min,max};
}
console.log(minAdnMax([1,2,3,4]));//{min: 1, max: 4}

let showInfos = ({name,age}) =>{
  console.log(`
  姓名：${name}
  年龄: ${age}
  `)
}
 showInfos({
     name:"张三",
     age:28
 }) //姓名：张三
    //年龄: 28

    let x1 = 20,
        x2 = 30;
    [x1,x2] = [x2,x1];
    console.log(x1);//30
    console.log(x2);//20