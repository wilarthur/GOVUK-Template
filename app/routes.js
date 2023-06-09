//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post("/test-page-1-answer", function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var whereDoYouLive = req.session.data["where-do-you-live"];

  // Check whether the variable matches a condition
  if (whereDoYouLive == "northern-ireland") {
    // Send user to ineligible page
    res.redirect("/ineligible");
  } else {
    // Send user to next page
    res.redirect("/test-page-2");
  }
});
