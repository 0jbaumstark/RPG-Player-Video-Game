//generic stats object

let p1Name = "Krackan";

let p1Stats = {
  hp: 175,
  mp: 90,
  atk: 30,
  def: 40,
  sp: 60
}

let p2Name = "Hammerhead";

let p2Stats = {
  hp: 125,
  mp: 75,
  atk: 80,
  def: 40,
  sp: 30
}

  //not finsihed

  let p1battle = {

  attack: function(mv){
    if(mv === 1){
      return this.moves.punch(); 
    }
    else if(mv === 2){
      return this.moves.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.def;
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;
    }
  }

},

let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75 
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage + bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - bonus/4;
      return this.stats.atk+bonus;
    }
  },
furyStrike: function(){
  let baseDamage = this.stats.atk
  let bonus = this.stats.atk*Math.random();
  let pain = Math.random();
  if(pain < 0.50){
    this.stats.hp = this.stats.hp - (baseDamage + bonun)/2;
    return baseDamage+bonus; 
  }
},
falconPunch: function(){
  let baseDamage = this.stats.atk*0.5 
  let bonus = 0.75*this.stats.atk*Math.random();
  return baseDamage + bonus;
}
},



let magic = {
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random();
      let pump = Math.celi(this.stats.sp/3)
      if(tetradice <0.10){
        return pump;
      }
      else if(tetradice <0.30){
        return 2*pump
    }
    else if(tetradice <0.60){
      return 3*pump
  }
  else{
    return 4*pump
  }
}
  },
  hyperBeam: function(){
    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
      let baseDamage = this.stats.sp 
  let bonus = 1.5*this.stats.sp;
  return baseDamage + bonus
  }
},
  lightingSlap: function(){
    if(this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let baseDamage = this.stats.atk*0.66 
      let bonus = 1.5*this.stats.atk*Math.random();
      return baseDamage + bonus
  }
}  
}

let weapon = {
  swordSlash: function(){
    if(this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let tetradice = Math.random();
      let slash = Math.celi(this.stats.atk/3)
      if(tetradice <0.10){
        return slash;
      }
      else if(tetradice <0.30){
        return 2*slash
    }
    else if(tetradice <0.60){
      return 3*slash
  }
  else{
    return 4*slash
  }
}












}

let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
