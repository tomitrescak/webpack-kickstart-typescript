import Institutions from "../institutions_collection";

Meteor.publish("institutions", function () {
  return Institutions.find();
});
