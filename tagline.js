//@Project: Nick Higgins' Web Site 
//@Author:  Nicholas Higgins
//@Contact: spybob888@aol.com
//@Created: 10:33 AM Sunday, January 31, 2016
//@Modified: 10:01 PM Wednesday, June 30, 2021


function randInt(size) {
    return Math.ceil(Math.random()*size);
  }
      function getJoke(jNum)
      {
          var mtTagline = new Array();
          mtTagline[1] = "I'm breaking into the shell access terminals with a server transdimensional phasing device";
          //mtTagline[2] = "oh you fucking donkey vscode";
          mtTagline[2] = "I've hacked the oc6 level optical line with a Linux 0.01 non-rotatable disk";
          mtTagline[3] = "I've hacked into your transdimensional phasing device network";
          mtTagline[4] = "I broke into the vulnerable networking firewall with network routing device multiphase processors";
          mtTagline[5] = "I've hacked the server with a side fumbling CPU processor";
          mtTagline[6] = "I'm gaining root access to vulnerable networking firewall with a non-rotatable network switch";
          mtTagline[7] = "I've gained effective root access to your x86 IBM level architecture";
          mtTagline[8] = "I'm breaking into the network routing device with non-rotatable disk microprocessors";
          mtTagline[9] = "I've gained effective root access to your network routing device with x86 IBM tremmy pipes";
          mtTagline[10] = "I've hacked the with multidimension network security access vulnerabilities with a network routing device";
                  
          return mtTagline[jNum];
      }
      document.write(getJoke(randInt(10)));
  
