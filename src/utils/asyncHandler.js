const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve().catch((err) => {
      next(err);
    });
  };
};

// short and easy
// const asyncHandler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (err) {
//     res.status(err).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// long and complex

// const asyncHandler = (fun) => {
//   return async (req, res, next) => {
//     try {
//       await fun(req, res, next);
//     } catch (err) {
//       res.status(err).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };
