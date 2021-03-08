let app = new Vue({
  el: "#app",
  data: {
    title: "Star Maker", 
    message: "Hi~♫꒰･◡･๑꒱",
    acting: 0,   
    singing: 0,
    fame: 10,
    name: "",
    money: 0,
    energy: 100,
    succeedURL:"https://imglf5.lf127.net/img/REhMQ2hFVmR3c0d3T2Mwd1BncU16SkRFczRUeEVieDVreEZPZVpzSW94THk4ZnVJVWFHZjBnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",
    failURL:"https://imglf3.lf127.net/img/REhMQ2hFVmR3c0d3T2Mwd1BncU16Qmx6bTUybWtaYUdoMDhwODVqOGM0M1RwcmNXeVRDL0tRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",
    normalURL:"https://imglf3.lf127.net/img/REhMQ2hFVmR3c0d3T2Mwd1BncU16UDIzQ0dYc0JIR1RqN2Y5bmJtS3p3c3dUNk5qZ3VzUE5BPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",
  },
  
methods: {
    partTimeActing() {
      this.money += 5;
      this.acting += 1;
      this.energy -= 5;
      this.fame += 1;
      this.message = "🦹🏻";
    },
    partTimeSinging() {
      this.money += 5;
      this.singing += 1;
      this.energy -= 5;
      this.fame += 1;
      this.message = "🎶";
    },
    actingTraining() {
      if (this.money >= 10) {
        this.energy -= 5;
        this.acting += 10;
        this.money -= 10;
        this.message = "I learned so much, let me act for you!";
      }else {
        this.message = "you don't have enought money for acting training";
      }
    },
    singingTraining() {
        if (this.money >= 10) {
          this.energy -= 5;
          this.singing += 10;
          this.money -= 10;
          this.message = "I learned so much, let me sing for you!";
        } else {
          this.message = "I don't have enough money for singing training";
        }
      },
  
    shootAnAd() {
      if (this.acting >= 40 && this.acting < 60) {
        let num = Math.floor(Math.random() * 10) + 1;
        num *= Math.round(Math.random()) ? 1 : -1;
        if (num >= 0) {
          this.message = "I did well!";
          this.acting += 10;
        } else {
          this.message = "Sorry, I didn't do well...";
          this.acting -= 10;
        }
        this.fame += num;
      } else if (this.acting >= 60) {
        let num = Math.floor(Math.random() * 20) + 1;
        num *= Math.round(Math.random()) ? 1 : -1;
        if (num >= 0) {
          this.message = "I did well!";
          this.acting += 10;
        } else {
          this.message = "sorry, I didn't do well";
          this.acting -= 10;
        }
        this.fame += num;
      } else {
        this.message = "I don't have enough skill shoot an ad";
      }     
    },
  
  
    releaseRecord() {
      if (this.singing >= 40 && this.singing < 60) {
        let num = Math.floor(Math.random() * 10) + 1;
        num *= Math.round(Math.random()) ? 1 : -1;
        if (num >= 0) {
          this.message = "I did well!";
          this.singing += 10;
        } else {
          this.message = "sorry, I didn't do well";
          this.singing -= 10;
        }
        this.fame += num;
      } else if (this.singing >= 60) {
        let num = Math.floor(Math.random() * 20) + 1;
        num *= Math.round(Math.random()) ? 1 : -1;
        if (num >= 0) {
          this.message = "I did well!";
          this.singing += 10;
        } else {
          this.message = "sorry, I didn't do well";
          this.singing -= 10;
        }
        this.fame += num;
      } else {
        this.message = "I don't have enough skill to release record";
      }     
    },
  
    starredInMovie() {
        if (this.singing >= 40 && this.singing < 60 && this.acting >= 40 && this.acting < 60) {
          let num = Math.floor(Math.random() * 20) + 1;
          num *= Math.round(Math.random()) ? 1 : -1;
          if (num >= 0) {
            this.message = "I did well!";
            this.singing += 20;
            this.acting += 20;
          } else {
            this.message = "sorry, I didn't do well";
            this.singing -= 20;
            this.acting -= 20;
          }
          this.fame += num;
        } else if (this.singing >= 60 || this.acting >= 60) {
          let num = Math.floor(Math.random() * 30) + 1;
          num *= Math.round(Math.random()) ? 1 : -1;
          if (num >= 0) {
            this.message = "I did well!";
            this.singing += 20;
            this.acting += 20;
          } else {
            this.message = "sorry, I didn't do well";
            this.singing -= 20;
            this.acting -= 20;
          }
          this.fame += num;
        } else {
          this.message = "I don't have enough skill to Starred in a Movie";
        }     
      },
  
      vacation(){
        if (this.energy < 100 && this.money >= 10) {
          this.energy = 100;
          this.money -= 10;
          this.message = "What a nice vacation!";
        } else if (this.money < 10){
          this.message = "I don't have enough money for a vacation";
        } else {
          this.message = "I don't need rest, I am ready to work!";
        }
      },
 
    },
  
 
  computed: {
    isFailed() {
      if (this.fame < 0) {
        return true;
      } else if (this.energy < 0){
        return true;
      } else {
        return false;
      }
    },
    isNormal() {
      if ( this.fame >= 100) {
        return false;
      } else if ( this.fame < 0) {
        return false;
      } else if ( this.energy < 0) {
        return false;
      } else {
        return true;
      }
    },
    isSucceeded() {
      if (this.fame >= 100) {
        return true;
      } else {
        return false;
      }
    },
  }
});