global.fetch = require("node-fetch");
const ResumeParser = require('resume-parser');

ResumeParser
  .parseResumeFile('/home/goodmanmcgee/JobSearchAutomator/parser/Resume_2021.pdf') // input file, output dir
  .then(file => {
    console.log("Yay! " + file);
  })
  .catch(error => {
    console.error(error);
  });