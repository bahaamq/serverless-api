const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {

    //?optional if it has only..
    const id = event?.pathParameters?.id;
    const { name } = JSON.parse(event.body);

    if (id) {
       results=await peopleModel.delete({"id": id});
  
    } 

    //Res.send
    return {
      statusCode: 200,
      body: JSON.stringify({"done":"Deleted!"}),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
