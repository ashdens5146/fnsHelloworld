const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let name = 'Ashish is the Best Developer';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function')
  //return {'message': 'Hello ' + name}
  return { 'userId': 1, 'id': 1,'title': 'Functions and Jenkins Demos','completed': false }
})
