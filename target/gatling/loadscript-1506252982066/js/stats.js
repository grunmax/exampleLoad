var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1216",
        "ok": "1042",
        "ko": "174"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "239",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "813",
        "ok": "813",
        "ko": "219"
    },
    "meanResponseTime": {
        "total": "372",
        "ok": "426",
        "ko": "48"
    },
    "standardDeviation": {
        "total": "149",
        "ok": "74",
        "ko": "27"
    },
    "percentiles1": {
        "total": "406",
        "ok": "419",
        "ko": "41"
    },
    "percentiles2": {
        "total": "457",
        "ok": "469",
        "ko": "44"
    },
    "percentiles3": {
        "total": "530",
        "ok": "541",
        "ko": "81"
    },
    "percentiles4": {
        "total": "666",
        "ok": "676",
        "ko": "196"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1039,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 174,
        "percentage": 14
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10.133",
        "ok": "8.683",
        "ko": "1.45"
    }
},
contents: {
"req_http-request-co-c2b8c": {
        type: "REQUEST",
        name: "HTTP Request completedtasksreport skill",
path: "HTTP Request completedtasksreport skill",
pathFormatted: "req_http-request-co-c2b8c",
stats: {
    "name": "HTTP Request completedtasksreport skill",
    "numberOfRequests": {
        "total": "1042",
        "ok": "1042",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "426",
        "ok": "426",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles2": {
        "total": "469",
        "ok": "469",
        "ko": "-"
    },
    "percentiles3": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "percentiles4": {
        "total": "676",
        "ok": "676",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1039,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.683",
        "ok": "8.683",
        "ko": "-"
    }
}
    },"req_http-request-co-905fb": {
        type: "REQUEST",
        name: "HTTP Request completedtasksreport skill Redirect 1",
path: "HTTP Request completedtasksreport skill Redirect 1",
pathFormatted: "req_http-request-co-905fb",
stats: {
    "name": "HTTP Request completedtasksreport skill Redirect 1",
    "numberOfRequests": {
        "total": "174",
        "ok": "0",
        "ko": "174"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "219",
        "ok": "-",
        "ko": "219"
    },
    "meanResponseTime": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "-",
        "ko": "27"
    },
    "percentiles1": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles2": {
        "total": "44",
        "ok": "-",
        "ko": "44"
    },
    "percentiles3": {
        "total": "81",
        "ok": "-",
        "ko": "81"
    },
    "percentiles4": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 174,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.45",
        "ok": "-",
        "ko": "1.45"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
