import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Students = new Mongo.Collection('students');

Meteor.methods({
    'students.insert'(studentInfo){
        name = studentInfo.name;
        email = studentInfo.email;
        phone = studentInfo.phone;
        birthday = studentInfo.birthday;

        // Checking inputs
        check(name, String);
        check(email, ValidEmail);

        // Insert into DB
        Students.insert({
            name,
            email,
            phone,
            birthday,
            createdAt: new Date(),
        });
    },

    'students.remove'(student){
        check(student._id, String);
        Students.remove(student._id);
    }
});