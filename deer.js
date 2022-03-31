import animal from 'botanic-zoo-api';

animal.getAnimal('deer')
  .then(response => console.log(response))
  .catch(err => console.error(err))