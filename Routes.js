class Routes {
  get(route, args) {
    if ('undefined' == typeof this[route]) {
      console.warn('No route found with name: ' + name);
      return false;
    } else {
      return this[route].call(this, args);
    }
  }

  home() {
    return {
      name: "home",
      title: "Tuts+ Social",
      component: null,
      leftButton: null,
      rightButton: null,
      hideNavigationBar: false,
      statusBarStyle: 'light-content',
    }
  }

}
