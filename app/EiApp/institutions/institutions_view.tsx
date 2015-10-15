import React from "react";
import reactMixin from "react-mixin";
import ReactMeteorData from "react-meteor-data";
import { Institutions, IInstitution } from "./institutions_collection";
import Loading from "../../shared/client/components/loading";

var subscriptions = new SubsManager();

//////////////////////////////////////////////////////////////////////////////
// InstitutionView Component                                                      //
//////////////////////////////////////////////////////////////////////////////

interface IMeteorData {
    institutions: IInstitution[];
}

interface IInstitutionViewState {
    bar: string;
}

class InstitutionView extends React.Component<IMeteorData, IInstitutionViewState> {
    constructor(props: IMeteorData) {
        super();
        this.state = {
            bar: ""
        };
    }

    render() {
        return <ul>{
            this.props.institutions.map((ei: IInstitution, index: number) => {
                return <li key={index}>{ei.name}</li>
            })
        }</ul>
    }
}


//////////////////////////////////////////////////////////////////////////////
// EiMain Component                                                             //
//////////////////////////////////////////////////////////////////////////////

@reactMixin.decorate(ReactMeteorData)
export default class InstitutionMeteor extends React.Component<{}, {}> {
    data: IMeteorData;

    getMeteorData(): IMeteorData {
        var data: IMeteorData = {
            institutions: null
        };
        var handle = subscriptions.subscribe("institutions");
        if (handle.ready()) {
            data = {
                institutions: Institutions.find().fetch()
            };
        }
        return data;
    }

    render() {
        console.log("Rendering: " + this.data.institutions);
        return (
            <div>
        { this.data.institutions ? <InstitutionView {...this.data} /> : <Loading what="loading.EiMains" /> }
                </div>
        );
    }
}
