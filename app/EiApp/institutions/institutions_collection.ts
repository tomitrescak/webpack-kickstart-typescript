export interface IInstitution {
  name: string;
}

export const Institutions = new Mongo.Collection<IInstitution>('institutions');

// export to global namespace
if (Meteor.isClient) {
  Meteor.startup(() => window["Institutions"] = Institutions);
}

Institutions.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
})

export default Institutions;
