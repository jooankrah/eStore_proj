// var Applicant = require("../models/applicant");
// var Applications = require("../models/application");

// // all the middleare goes here
// var middlewareObj = {};

// /* middlewareObj.checkCampgroundOwnership = function(req, res, next) {
//  if(req.isAuthenticated()){
//         Campground.findById(req.params.id, function(err, foundCampground){
//            if(err){
//                req.flash("error", "Campground not found");
//                res.redirect("back");
//            }  else {
//                // does user own the campground?
//             if(foundCampground.author.id.equals(req.user._id)) {
//                 next();
//             } else {
//                 req.flash("error", "You don't have permission to do that");
//                 res.redirect("back");
//             }
//            }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
// } */

// /* middlewareObj.checkCommentOwnership = function(req, res, next) {
//  if(req.isAuthenticated()){
//         Comment.findById(req.params.comment_id, function(err, foundComment){
//            if(err){
//                res.redirect("back");
//            }  else {
//                // does user own the comment?
//             if(foundComment.author.id.equals(req.user._id)) {
//                 next();
//             } else {
//                 req.flash("error", "You don't have permission to do that");
//                 res.redirect("back");
//             }
//            }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
// } */

// middlewareObj.isLoggedIn = function(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/applicant/login");
// }

// middlewareObj.isActive = function(req, res, next){
//     if(req.isAuthenticated()){
//     return  res.redirect("/applicant/apply");;
//     }
//     next();
// }


// module.exports = middlewareObj;