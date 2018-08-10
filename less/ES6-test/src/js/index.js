$(function(){
  //箭头函数 =>
  let sayHello =(name ="Petter") =>{
      console.log(`Hello,${name}`)
  }
  sayHello("Tom");

  let total = (...nums) =>{
    //...nums:rest参数
   // 存储所有调用时传递的参数
   //其类型为数组Array
    let res =0;
    nums.forEach(num =>{
      res += num;
    });
    return res;
  }
  console.log(total(1,2)); //3

  let numbers = [1,2,3,4,5,6,7];
  console.log(`max:${Math.max(...numbers)}`);
  console.log(`min:${Math.min(...numbers)}`);


  let per = new Person("林彦俊",30);
  console.log(per);
  per.description();
  Person.play("乒乓");
});