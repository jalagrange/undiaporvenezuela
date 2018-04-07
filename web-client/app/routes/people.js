import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      name: 'Daniel Sabal',
      category: 'Grand Old Mansion',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      name: 'Abraham Aguero',
      category: 'Grand Old Mansion',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      name: 'Valerie Gomes',
      category: 'Grand Old Mansion',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }];
  }
});
