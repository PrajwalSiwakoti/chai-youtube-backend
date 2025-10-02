// const asyncHandler  = (fn) => {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }
// }

//alternatively using promise

const asyncHandler = (requestHandlerFn) => {
    return (req, res, next) => {
        Promise.resolve(requestHandlerFn(req, res, next))
            .catch((err) => next(err));
    }
};