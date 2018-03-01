/* eslint-disable no-console */

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur\
 that first appeared during the late Maastrichtian stage of the late\
 Cretaceous period.';

var dinosaur = 'triceratops';
var dinoUpperCased = dinosaur.toUpperCase();
var dinoSubstitution = text.replace('Velociraptor', dinoUpperCased);

console.log(dinoSubstitution.slice(0,((dinoSubstitution.length)/2)));
