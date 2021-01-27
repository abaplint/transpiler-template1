const runtime = require("@abaplint/runtime");
global.abap = new runtime.ABAP();

async function run() {
  require("./output/zhello_world.prog.js");
  console.log("----------------START ABAP CONSOLE OUTPUT-------------------");
  console.log(abap.console.get());
}

run().then().catch(err => {
  console.dir(err);
  process.exit(1);
});