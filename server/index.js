const port = process.env.PORT || 3000;
// const seed = require("./seed")
const app = require('./app');

const init = async () => {
    // await seed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  };
  
  init();


