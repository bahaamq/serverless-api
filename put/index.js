const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {

    //?optional if it has only..
    const id = event?.pathParameters?.id;
    const {name} = JSON.parse(event.body);


     const results  =await peopleModel.update({"id": id}, {"name": name});


    //Res.send
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
