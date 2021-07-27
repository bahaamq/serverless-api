const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {

    //?optional if it has only..
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      const results = await peopleModel.query('id').eq(id).exec();
      data = results[0];
    } else {
      data = await peopleModel.scan().exec();
    }

    //Res.send
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
