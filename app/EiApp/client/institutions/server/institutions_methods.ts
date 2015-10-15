import Institutions from "../../../collections/institutions";

Meteor.methods({
  addInstitution: function (params: any) {
    console.log(arguments.length);
    console.log(JSON.stringify(params));
      // Institutions.insert({
      //   name: name
      // })
  }
});
