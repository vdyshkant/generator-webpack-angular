import angular from 'angular';
<% if (ngAnimate) { -%>
import ngAnimate from 'angular-animate';
<% } -%>
import ngAria from 'angular-aria';
<% if (ngCookies) { -%>
import ngCookies from 'angular-cookies';
<% } -%>
<% if (ngMessages) { -%>
import ngMessages from 'angular-messages';
<% } -%>
<% if (ngSanitize) { -%>
import ngSanitize from 'angular-sanitize';
<% } -%>
<% if (ngTouch) { -%>
import ngTouch from 'angular-touch';
<% } -%>
<% if (resource === 'ngResource') { -%>
import ngResource from 'angular-resource';
<% } -%>
<% if (resource === 'restangular') { -%>
import 'lodash';
import 'restangular';
<% } -%>

<% if (cssPreprocessor === 'sass') { -%>
import '../styles/main.scss';
<% } else if (cssPreprocessor === 'less') { -%>
import '../styles/main.less';
<% } else { -%>
import '../styles/main.css';
<% } -%>

import appComponent from './app.component';

angular.module('app', [<% if (ngAnimate) { %>
  ngAnimate,<% } %>
  ngAria<% if (ngCookies) { %>,
  ngCookies<% } -%><% if (ngMessages) { %>,
  ngMessages<% } -%><% if (ngSanitize) { %>,
  ngSanitize<% } -%><% if (ngTouch) { %>,
  ngTouch<% } -%><% if (resource === 'ngResource') { %>,
  ngResource<% } -%><% if (resource === 'restangular') { %>,
  'restangular'<% } %>
])
.component('app', appComponent)
.name;
