//@Project: Nick Higgins' Web Site 
//@Author:  Nicholas Higgins
//@Contact: spybob888@aol.com
//@Created: 10:33 AM Sunday, January 31, 2016
//@Modified: 11:25 AM Thursday, April 09, 2020


function randInt(size) {
    return Math.ceil(Math.random()*size);
  }
      function getJoke(jNum)
      {
          var mtTagline = new Array();
          mtTagline[1] = "I'm breaking into the shell access terminals with a server transdimensional phasing device";
          mtTagline[2] = "oh you fucking donkey vscode";
                  
          return mtTagline[jNum];
      }
      document.write(getJoke(randInt(2)));
  