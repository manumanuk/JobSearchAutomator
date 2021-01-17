global.fetch = require("node-fetch");

let token = '9f9cc8a21bb32ad7e5e2036f919346c9863b71e1'

let identifier = '';

fetch('https://resume-parser.affinda.com/public/api/v1/documents/', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ file: '/home/goodmanmcgee/JobSearchAutomator/parser/Resume_V1.pdf' }),
}).then(r => r.json()).then(r => {
    identifier = r['identifier']
    console.log(identifier);

    fetch(`https://resume-parser.affinda.com/public/api/v1/documents/${identifier}`,
    {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
  }).then(r => r.json()).then(r => console.log(r))

});
