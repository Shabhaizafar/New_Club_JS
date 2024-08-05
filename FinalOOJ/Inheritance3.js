// 3. Multiple Inheritance
// Definition:
// Multiple inheritance refers to a scenario where a class or object inherits from more than one parent class or object. JavaScript does not support multiple inheritance directly through classes; however, you can achieve similar behavior using mixins.
class All{

}




const Father = (superclass)=> class extends superclass{ 
    fathername = "Kaleen Bhaiya";
    
}


const Mother = (superclass)=> class extends superclass{ 
    mothername = "Beena Bhabhi";
}
class MixinBuilder{
    constructor(superclass){
        this.superclass = superclass;
    }
    with(...mixins){
        return mixins.reduce((c,mixin) => mixin(c), this.superclass);
    }
}


var mix = (superclass)=>{
    new MixinBuilder(superclass);
}



class Child extends mix(All).with(Father,Mother){
        constructor(cname,lname){
        this.childname = cname;
        this.lastname = lname;
    }
}



var c1 = new Child("Munna","Tripathi");
console.log(c1);