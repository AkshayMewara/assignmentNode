import animal from 'botanic-zoo-api';

animal.getAnimal('giraffe')
  .then(response => console.log(response))
  .catch(err => console.error(err))