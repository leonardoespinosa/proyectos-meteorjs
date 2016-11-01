/**
 * Created by kira on 2/10/16.
 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Notes = new SimpleSchema({
    note: {
        type: String,
        label: "Nota"
    }
})