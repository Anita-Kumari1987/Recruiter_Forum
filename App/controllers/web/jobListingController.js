let jobListingModel = require("../../models/jobListing.model.js");

let jobListingInsert = (req, res) => {
  let { CompanyName, JobCode, JobTitle, JobDetails } = req.body;
  let jobListing = new jobListingModel({
    CompanyName: CompanyName,
    JobCode: JobCode,
    JobTitle: JobTitle,
    JobDetails: JobDetails,
  });

  jobListing
    .save()
    .then(() => {
      res.send({
        status: 200,
        message: "Job Listing saved successfully",
      });
    })
    .catch((err) => {
      res.send({
        status: 404,
        message: "Error while saving job-Listing",
        error: err.message,
      });
    });
};

let jobListingList = async (req, res) => {
  let listOfJobListing = await jobListingModel.find();
  res
    .status(200)
    .json({ status: 200, message: "Job Listing list", data: listOfJobListing });
};

let jobListingDelete = async (req, res) => {
  let jobListingToBeDeleted = await jobListingModel.deleteOne({
    _id: req.params.id,
  });
  res.send({
    status: 200,
    message: "Job Listing deleted successfully",
    Deleted_data: jobListingToBeDeleted,
  });
};

let jobListingUpdate = async (req, res) => {
  let jobListingId = req.params.id;
  let { CompanyName, JobCode, JobTitle, JobDetails } = req.body;
  let updateObj = {
    CompanyName: CompanyName,
    JobCode: JobCode,
    JobTitle: JobTitle,
    JobDetails: JobDetails,
  };
  let jobListingToBeUpdated = await jobListingModel.updateOne(
    { _id: jobListingId },
    updateObj
  );
  res.send({
    status: 200,
    message: "Job Listing updated successfully",
    updated_Data: jobListingToBeUpdated,
  });
};

module.exports = {
  jobListingInsert,
  jobListingList,
  jobListingDelete,
  jobListingUpdate,
};
