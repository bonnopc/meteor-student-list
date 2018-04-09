import { Template } from 'meteor/templating';
import { Students } from '../lib/collections.js';

import './main.html';

Template.body.helpers({
  students(){
    return Students.find({});
  },
});

Template.body.rendered=function() {
	$('#birthday').datepicker({
    format: "dd-mm-yyyy",
    startView: 3,
    multidate: false,
    autoclose: true,
  });
};

Template.stuAdd.events({
  'submit .stuAddForm': function(e, template){
    e.preventDefault();
    
    // Get values from inputs
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const birthday = e.target.birthday.value;

    // Store values to DB
    Students.insert({
      name,
      email,
      phone,
      birthday,
      createdAt: new Date(),
    });

    // Reset form values
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.birthday.value = "";

    // Close the modal
    $('#addStuModal').modal('toggle');

    return false;
  }
});