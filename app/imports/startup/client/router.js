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

FlowRouter.route('/edit-food/:_id', {
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
FlowRouter.route('/edit-account', {
  name: 'Edit_Account_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Account_Page' });
  },
});
FlowRouter.route('/add-location', {
  name: 'Add_Location_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Location_Page' });
  },
});
FlowRouter.route('/search', {
  name: 'Search_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Page' });
  },
});

FlowRouter.route('/maps', {
  name: 'Google_Maps',
  action() {
    BlazeLayout.render('App_Body', { main: 'Google_Maps' });
  },
});

FlowRouter.route('/place', {
  name: 'Place_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Place_Page' });
  },
});

FlowRouter.route('/place-item/:_id', {
  name: 'A_Place_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'A_Place_Page' });
  },
});
