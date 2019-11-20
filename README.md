<h1>Simple Date to specific timezone converter</h1>

<h3>Usage example</h3>
<p>
    
    const TZ = require("tz-maker");
    let t = new TZ(new Date(),"+2");
    t.convert();
    console.log(t.date); //returns converted date
    
</p>