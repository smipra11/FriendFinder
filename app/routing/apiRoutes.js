//===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data array
// ===============================================================================

var friends= require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/friens... they are shown a JSON of the  friends data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.score)

        var user = req.body;
        console.log(user);
        var bestfrind = 0;
        var minimumdiff = 30;
        
        for(var i=0;i<user.score.length;i++){
            user.score[i] = parseInt(user.score[i])
        }

        for( var i=0;i<friends.length;i++){
            var totaldifference  = 0;
            for(var j=0;j<friends[i].score.length;j++){
                var diff = Math.abs(user.score[j] - friends[i].score[j])
                totaldifference  += diff


            
        }

        if(totaldifference < minimumdiff){
            bestfrind = i;
            minimumdiff = totaldifference;
        }
    }
        friends.push(user)
        res.json(friends[bestfrind]);
    });


}