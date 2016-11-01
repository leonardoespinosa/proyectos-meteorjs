/**
 * Created by kira on 1/10/16.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Notes } from './notes';

export const Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Nombre del proyecto",
        max: 200
    },
    owner: {
        type: String,
        label: "Propietario",
        autoValue(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    created: {
        type: Date,
        autoValue(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
    summary: {
        type: String,
        label: "Detalle del proyecto",
        optional: true,
        max: 2000,
        autoform: {
            atFieldInput: {
                type: "textarea",
                rows: 10,
                class: "materialize-textarea"
            }
        }
    },
    notes: {
        type: [Notes]
    }
}));