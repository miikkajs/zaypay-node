var request = require('request');
module.exports = {
    init: function(paylogueId, sessionId, ipAddress) {
        if (paylogueId && !isNaN(paylogueId)) {
            this.paylogueId = paylogueId;
            if (sessionId && ipAddress) {
                this.sessionId = sessionId;
                this.ipAddress = ipAddress;
            } else {
                throw new Error("sessionId or ipAddress not set");
            }

        } else {
            throw new Error("paylogueId should be set and numeric");
        }

    },

    checkAccess : function(cb) {
        var options = {
            url: "https://secure.zaypay.com/permit/" + this.paylogueId + "/" + this.sessionId + "/" + this.ipAddress,
        };
        request.get(options, function(err, response, body) {
           cb(body);
        });


    }


}