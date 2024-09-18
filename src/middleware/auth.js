  //middleware for all request GET, POST etc
   const adminAuth = (req,res,next) => {
    let token = 'xyz';
    let isAuth = token === 'xyz'
    if(isAuth){
      next();
    } else{
      res.status(401).send("Unauthorize request")
    }
  };

  const userAuth = (req,res,next) => {
    let token = 'xyz';
    let isAuth = token === 'xyz'
    if(isAuth){
      next();
    } else{
      res.status(401).send("Unauthorize request")
    }
  };

  module.exports ={
    adminAuth,
    userAuth
  }