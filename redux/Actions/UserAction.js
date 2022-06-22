export const SetUser = (fullName=null,age=null,job) =>{
    return { fullName:fullName,age:age,job:job,type:"update" }
}