'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _=require('.');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({anchors:{borderTopWidth:1,borderTopColor:'#f6f7f8',backgroundColor:'#e4e7e9',flexDirection:'row',justifyContent:'space-between'},anchor:{flex:1,paddingTop:12.5,paddingBottom:12.5,paddingLeft:18,paddingRight:18,overflow:'hidden'},anchorBar:{position:'absolute',bottom:-2,left:0,right:0,height:2},anchorBarSelected:{bottom:0}});var Anchors=function(_React$PureComponent){(0,_inherits3.default)(Anchors,_React$PureComponent);function Anchors(props){(0,_classCallCheck3.default)(this,Anchors);var _this=(0,_possibleConstructorReturn3.default)(this,(Anchors.__proto__||(0,_objectGetPrototypeOf2.default)(Anchors)).call(this,props));var defaultCategory=props.categories.filter(function(category){return category.first;})[0];_this.data=props.data;_this.state={selected:defaultCategory.name};return _this;}(0,_createClass3.default)(Anchors,[{key:'handlePress',value:function handlePress(index){var _props=this.props;var categories=_props.categories;var onAnchorPress=_props.onAnchorPress;onAnchorPress(categories[index],index);}},{key:'render',value:function render(){var _this2=this;var _props2=this.props;var categories=_props2.categories;var onAnchorPress=_props2.onAnchorPress;var color=_props2.color;var i18n=_props2.i18n;var emojiProps=_props2.emojiProps;var categoryEmojis=_props2.categoryEmojis;var selected=this.state.selected;return _react2.default.createElement(_reactNative.View,{style:styles.anchors},categories.map(function(category,i){var id=category.id;var name=category.name;var anchor=category.anchor;var isSelected=name==selected;if(anchor===false){return null;}return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,{key:id,'data-index':i,onPress:_this2.handlePress.bind(_this2,i)},_react2.default.createElement(_reactNative.View,{style:[styles.anchor,isSelected?styles.anchorSelected:null]},_react2.default.createElement(_.NimbleEmoji,(0,_extends3.default)({data:_this2.data},emojiProps,{emoji:categoryEmojis[id],onPress:null,onLongPress:null})),_react2.default.createElement(_reactNative.View,{style:[styles.anchorBar,isSelected?styles.anchorBarSelected:null,{backgroundColor:color}]})));}));}}]);return Anchors;}(_react2.default.PureComponent);Anchors.defaultProps={categories:[],onAnchorPress:function onAnchorPress(){}};exports.default=Anchors;