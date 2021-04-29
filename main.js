const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let name = 'Sehub';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function')
  return {'message': 'Hello ' + name}
})
