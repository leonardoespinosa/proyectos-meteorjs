import { Proyects } from '../../../lib/collections/projects';

Template.projectForm.helpers({
    formCollection(){
        return Proyects;
    }
})