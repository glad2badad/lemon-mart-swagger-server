/**
 * @param {Object} options
 * @param {String} options.search Search text
 * @param {Integer} options.offset The number of items to skip before starting to collect the result set.
 * @param {Integer} options.limit The numbers of items to return.
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUsers = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getUsers ok!'
  };
};

