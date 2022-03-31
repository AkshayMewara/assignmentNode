import animal from 'botanic-zoo-api';

animal.getAnimal('crocodile')
  .then(response => console.log(response))
  .catch(err => console.error(err))