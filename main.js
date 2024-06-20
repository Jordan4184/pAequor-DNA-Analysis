// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum, 
    dna: dna, 
    mutate(){
    
      let randIndex = Math.floor(Math.random() * dna.length);
      let randDna = dna[randIndex];
      let newBase = returnRandBase();
      while(newBase === randDna){
        newBase = returnRandBase();
      }
      dna[randIndex] = newBase;

      return dna;
    },
    compareDNA(pAequor){
      let matches = 0;
      for(let i = 0; i < dna.length; i++){
        if(pAequor[i] === dna[i]){
          matches += 1;
        }
      }
      
      let percentMatched = (matches/dna.length)*100;
      let finalDif = percentMatched.toFixed(1);

      console.log(`Specimen #1 and mutated specimen #2 have ${finalDif} % DNA in common`);
    },

    willLikelySurvive(){
      let sum = 0
      for(let i = 0; i < dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          sum += 1;
        }
      }
      
      let percSurv = (sum/this.dna.length)* 100
      
      if(percSurv >= 60){
        return true;
      } else {
        return false;
      }
    }       
  }
} 

let pAequor1 = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequorFactory(2, mockUpStrand());

pAequor1.compareDNA(pAequor2.dna);

let pAequor = pAequorFactory(1, mockUpStrand());
let survivalChance = pAequor.willLikelySurvive();
console.log(`pAequor has a higher % chance of survival: ${pAequor.willLikelySurvive()}`);


let survivingPAequor = [];
  while(survivingPAequor < 30) {
    let pAequor = pAequorFactory(survivingPAequor + 1, mockUpStrand());
    if (pAequor.willLikelySurvive()) {
      survivingPAequor.push(pAequor);
    }
  }