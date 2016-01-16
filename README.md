# Redux Matter
[![npm version](https://img.shields.io/npm/v/redux-matter.svg?style=flat-square)](https://www.npmjs.com/package/redux-matter)
[![npm downloads](https://img.shields.io/npm/dm/redux-matter.svg?style=flat-square)](https://www.npmjs.com/package/redux-matter)
[![build status](https://img.shields.io/travis/KyperTech/redux-matter/master.svg?style=flat-square)](https://travis-ci.org/KyperTech/redux-matter)
[![dependencies status](https://img.shields.io/david/KyperTech/redux-matter/master.svg?style=flat-square)](https://david-dm.org/KyperTech/redux-matter)
[![license](https://img.shields.io/npm/l/redux-matter.svg?style=flat-square)](https://github.com/KyperTech/matter/blob/master/LICENSE)

Redux middleware, actions, and reducer for [Matter](https://github.com/kypertech/matter).


## Documentation

### Middleware

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'; // Combined reducers
import thunkMiddleware from 'redux-thunk';
import { createMiddleware } from 'redux-matter';

let matterMiddleware = createMiddleware('tessellate', {});
const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware, matterMiddleware)
)(createStore);
```

### Reducers

Add reducers to combineReducers function:

```javascript
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { Reducers } from 'redux-matter';
const rootReducer = combineReducers({
  account: Reducers.account,
  entities: Reducers.entities,
  router: routerStateReducer
});

export default rootReducer;
```
### Actions

Example of using Actions from `redux-matter` in a smart component:

```javascript
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'redux-matter';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }
  onLoginClick(e) {
    e.preventDefault();
    let testLogin = {username: 'test', password: 'asdfasdf'};
    this.props.login(testLogin);
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.onLoginClick }>Login</button>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

```
