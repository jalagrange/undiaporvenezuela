export default function() {
  this.namespace = '/api';

  let people = [{
    type: 'people',
    id: 'daniel',
    attributes: {
      name: 'Daniel Sabal',
      category: 'Creativo',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }
  }, {
    type: 'people',
    id: 'abraham',
    attributes: {
      name: 'Abraham Aguero',
      category: 'Creativo',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }
  },{
    type: 'people',
    id: 'patricia',
    attributes: {
      name: 'Patricia Dominguez',
      category: 'Creativo',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }
  }, {
    type: 'people',
    id: 'valerie',
    attributes: {
      name: 'Valerie Gomes',
      category: 'Creativo',
      age: 30,
      profileimage: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }
  }];

  this.get('/people', function() {
    return { data: people};
  });

  // Find and return the provided rental from our rental list above
    this.get('/people/:id', function (db, request) {
      return { data: people.find((person) => request.params.id === person.id) };
    });

}
