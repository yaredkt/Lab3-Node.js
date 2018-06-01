var dns = require('dns');

var ip = dns.resolve4('www.mum.edu', function (err, addresses) {
    console.log(addresses);
  });