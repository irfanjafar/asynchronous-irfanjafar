 
 const async = () => new Promise((res,rej) =>{
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
      }
      console.log("done");
  })
  
  async().then(data => {
    res(data);
  })