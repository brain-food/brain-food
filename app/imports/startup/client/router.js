import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

notFound = {
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

FlowRouter.route('/food-item/:_id', {
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

FlowRouter.route('/add-food', {
  name: 'Add_Food_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Food_Page' });
  },
});

FlowRouter.route('/edit-food', {
  name: 'Edit_Food_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Food_Page' });
  },
});

FlowRouter.route('/account', {
  name: 'Account_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Account_Page' });
  },
});