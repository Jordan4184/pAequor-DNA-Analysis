# pAequor Simulation

## Overview

This project simulates the behavior of a fictional organism called pAequor, focusing on their DNA mutation, comparison, and survival likelihood based on DNA composition. The project includes functions to generate random DNA strands, create pAequor specimens, mutate their DNA, compare DNA between specimens, and determine the survival likelihood of a specimen.

## Features

1. **Generate Random DNA Base**: Function to generate a random DNA base.
2. **Generate Random DNA Strand**: Function to generate a random DNA strand containing 15 bases.
3. **Create pAequor Specimen**: Factory function to create a pAequor specimen with methods for DNA mutation, comparison, and survival likelihood determination.
4. **Mutate DNA**: Method to mutate a random base in the DNA strand.
5. **Compare DNA**: Method to compare DNA with another specimen and calculate the percentage of similarity.
6. **Determine Survival Likelihood**: Method to determine if a pAequor specimen is likely to survive based on the percentage of 'C' and 'G' bases in its DNA.
7. **Generate Surviving Specimens**: Loop to create 30 specimens that are likely to survive.

## Code Details

### Functions

#### 1. `returnRandBase()`
Returns a random DNA base ('A', 'T', 'C', 'G').

```javascript
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
```

#### 2. `mockUpStrand()`
Generates a random DNA strand containing 15 bases.

```javascript
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
```

### Factory Function

#### `pAequorFactory(specimenNum, dna)`
Creates a pAequor specimen with the given specimen number and DNA strand. The object includes methods for mutating DNA, comparing DNA, and determining survival likelihood.

```javascript
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randIndex = Math.floor(Math.random() * dna.length);
      let randDna = dna[randIndex];
      let newBase = returnRandBase();
      while (newBase === randDna) {
        newBase = returnRandBase();
      }
      dna[randIndex] = newBase;
      return dna;


```javascript
    },
    compareDNA(pAequor) {
      let matches = 0;
      for (let i = 0; i < dna.length; i++) {
        if (pAequor[i] === dna[i]) {
          matches += 1;
        }
      }
      let percentMatched = (matches / dna.length) * 100;
      let finalDif = percentMatched.toFixed(1);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${finalDif}% DNA in common`);
    },
    willLikelySurvive() {
      let sum = 0;
      for (let i = 0; i < dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          sum += 1;
        }
      }
      let percSurv = (sum / this.dna.length) * 100;
      return percSurv >= 60;
    }
  }
};
```

## Conclusion

This project simulates the behavior of pAequor organisms, including DNA mutation, comparison, and survival likelihood. The provided functions and methods enable the creation of pAequor specimens, mutation of their DNA, comparison of DNA with other specimens, and determination of their likelihood to survive based on their DNA composition.