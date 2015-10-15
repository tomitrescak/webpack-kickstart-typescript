import Institutions from "../institutions_collection";

Meteor.methods({
  addInstitution: function (params: any) {
    console.log(arguments.length);
    console.log(JSON.stringify(params));
      // Institutions.insert({
      //   name: name
      // })
  }
});
