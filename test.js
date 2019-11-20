const tz = require("./index");

let errors = {
   invalid_date_validation : false,
   invalid_time_zone_validation : false,
   no_params_validation : false,
   success_test : false
};

function test() {
    try{
        let t = new tz("invalid date","+1");
        t.convert();
    }catch (e) {
        errors.invalid_date_validation = true;
    }

    try {
        let t = new tz(new Date(),"8");
        t.convert();
    }catch (e) {
        errors.invalid_time_zone_validation = true;
    }

    try {
        let t = new tz("","");
        t.convert()
    }catch (e) {
        errors.no_params_validation = true;
    }

    try {
        let t = new tz(new Date(),"+5");
        t.convert()
        errors.success_test = true;
    }catch (e) {
       errors.success_test = false;
    }
}

test();

let isError = false;
for (let key in errors){
    if (errors[key] === true){
        console.log(key + ": passed validation :)\n");
    }else{
        isError = true;
        console.error(key + ": error :(\n");
    }
}
console.log("\n\n");
if (isError){
    console.error("****************************");
    console.log("ERROR TRY TO CONNECT WITH ADMIN");
    console.error("****************************");
}else{
    console.log("*************************");
    console.log("tz-maker WORKING");
    console.log("*************************");
}