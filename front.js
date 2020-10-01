$ = require('jquery');
todotxt = require('todotxt');
k = todotxt.parse($("#src").text());
$("#dst").text("priority: " + k[0].priority + ", compete: " + k[0].complete);
