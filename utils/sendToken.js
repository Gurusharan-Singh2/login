export const sendToken=(token,user,statusCode,message,res)=>{
  
  res.status(statusCode).cookie("token",token,{
    expires:new Date(Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000),
    httpOnly:true
  }).json({
    success:true,
    userInfo:{
      name:user.name,
      email:user.email,
      
    },
    message,
    token
  })
}