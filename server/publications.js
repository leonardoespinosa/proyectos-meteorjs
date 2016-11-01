/**
 * Created by kira on 1/10/16.
 */
import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections/projects';

Meteor.publish('projects', function projectsPublication(){
    return Projects.find({owner: this.userId});
})