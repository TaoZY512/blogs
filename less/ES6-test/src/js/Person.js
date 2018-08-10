
  //定义Person类
  class Person{
    //构造器
    //创建对象使用，自动调用
    constructor(name,age){
        this.name = name;
        this.age  = age;
      console.log("一个Persson对象正在被创建......")
    }
    //方法
    description(){
        console.log(`Hello,I'm ${this.name},I'm ${this.age} year old.`)
    }
    //静态方法
    static play(str){
     console.log(`玩${str}!`)
    }
  };