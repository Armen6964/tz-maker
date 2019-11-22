class TZ {

    constructor(date,tz) {
       this.date = date;
       this.tz = tz;
       this.operator = null;
    }

    convert(){
        let isValid = this.validate();
        if (!isValid) throw Error("Invalid Date Object");

        let hours = this.date.getHours();
        if (this.operator === "-"){
            let tz = this.tz.replace("-","");
            hours = hours-parseInt(tz);
            this.date.setHours(hours);
        }
        if (this.operator === "+"){
            let tz = this.tz.replace("+","");
            hours = hours+parseInt(tz);
            this.date.setHours(hours);
        }
    }

    static getTimeZone(){
        let date = new Date();
        return date.getTimezoneOffset() / 60
    }

    validate() {
        this.operator = this.tz[0];
        let notMinus = false;
        let notPlus = false;
        if (this.operator[0] !== "-") notMinus = true;

        if (this.operator[0] !== "+") notPlus = true;

        if (notPlus && notMinus)
            throw Error("Missing - or + operator in tz variable")

        return (this.date instanceof Date && !isNaN(this.date.valueOf()));

    }


    get getDate(){
        return this.date;
    }
    set setDate(date){
        this.date = date;
    }
}
module.exports = TZ;
