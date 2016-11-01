import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

FlowRouter.route('/about', {
  name: 'About_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Page' });
  },
});

FlowRouter.route('/food-list', {
  name: 'Food_List_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Food_List_Page' });
  },
});

FlowRouter.route('/food-item', {
  name: 'Food_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Food_Item_Page' });
  },
});

FlowRouter.route('/food-hunt', {
  name: 'Food_Hunt_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Food_Hunt_Page' });
  },
});

// FlowRouter.route('/add-contact', {
//   name: 'Add_Contact_Page',
//   action() {
//     BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
//   },
// });
