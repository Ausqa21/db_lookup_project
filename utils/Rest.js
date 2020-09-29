// This object contains all status codes and their respective methods
const Rest = {

    // Status codes
    codes: {
        success: "00",
        failed: "01",
        not_existing: "02",
        unauthourised: "03"
    },

    success: function(data = null, msg = "Request successful") {
        return {
            code: this.codes.success,
            data: data,
            msg: msg
        }
    },

    failed: function(data  = null, msg = "Request failed") {
        return {
            code: this.codes.failed,
            data: data,
            msg: msg
        }
    }
}

module.exports = Rest;