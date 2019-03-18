# \<uxl-ui-skeleton\>

An ui skeleton component

[![Build Status](https://travis-ci.org/uxland/uxl-ui-skeleton.svg?branch=master)](https://travis-ci.org/uxland/uxl-ui-skeleton)
[![npm version](https://badge.fury.io/js/%40uxland%2Fuxl-ui-skeleton.svg)](https://badge.fury.io/js/%40uxland%2Fuxl-ui-skeleton)

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


### Description

`<uxl-ui-skeleton>` is a component that provides different types of ui skeletons to display when a petitions is fetching, for example:

### Properties

`number`: the number of elements that will display the skeleton

`animation`: the animation type

`type`: choose between different skeleton types    
           
`classifier`: provide a classifier to display different layouts, for example: ``vertical`` | ``horizontal``            

### Styling

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-ui-skeleton-primary-color` | The background color of the items header | `#e4e3e3` |
| `--uxl-ui-skeleton-secondary-color` | The background color of the items body | `#f1f1f1` |
| `--uxl-ui-skeleton-opacity` | The opacity of skeleton items | `1` |


