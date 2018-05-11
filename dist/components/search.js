'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _objectGetPrototypeOf=require('../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _MaterialCommunityIcons=require('react-native-vector-icons/MaterialCommunityIcons');var _MaterialCommunityIcons2=_interopRequireDefault(_MaterialCommunityIcons);var _nimbleEmojiIndex=require('../utils/emoji-index/nimble-emoji-index');var _nimbleEmojiIndex2=_interopRequireDefault(_nimbleEmojiIndex);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({searchContainer:{paddingLeft:5,paddingRight:10,paddingTop:2,paddingBottom:2,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#eceff1',borderBottomWidth:1,borderBottomColor:'#e0e0e0'},searchInput:{flex:1},closeButtonContainer:{width:44,height:44,flexDirection:'row',alignItems:'center',justifyContent:'center'},closeButton:{width:28,height:28,margin:10,borderRadius:500},closeButtonIcon:{marginTop:1,marginLeft:2}});var Search=function(_React$PureComponent){(0,_inherits3.default)(Search,_React$PureComponent);function Search(props){(0,_classCallCheck3.default)(this,Search);var _this=(0,_possibleConstructorReturn3.default)(this,(Search.__proto__||(0,_objectGetPrototypeOf2.default)(Search)).call(this,props));_this.data=props.data;_this.emojiIndex=new _nimbleEmojiIndex2.default(_this.data);_this.setRef=_this.setRef.bind(_this);_this.handleChange=_this.handleChange.bind(_this);_this.pressCancel=_this.pressCancel.bind(_this);_this.state={searchTerm:''};return _this;}(0,_createClass3.default)(Search,[{key:'handleChange',value:function handleChange(value){this.setState({searchTerm:value});this.props.onSearch(this.emojiIndex.search(value,{emojisToShowFilter:this.props.emojisToShowFilter,maxResults:this.props.maxResults,include:this.props.include,exclude:this.props.exclude,custom:this.props.custom}));}},{key:'pressCancel',value:function pressCancel(){this.props.onSearch(null);this.clear();}},{key:'setRef',value:function setRef(c){this.input=c;}},{key:'clear',value:function clear(){this.setState({searchTerm:''});}},{key:'render',value:function render(){var _props=this.props;var i18n=_props.i18n;var autoFocus=_props.autoFocus;var onPressClose=_props.onPressClose;var searchTerm=this.state.searchTerm;var background=void 0;if(_reactNative.Platform.Version>=21){background=_reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless();}else{background=_reactNative.TouchableNativeFeedback.SelectableBackground();}return _react2.default.createElement(_reactNative.View,{style:styles.searchContainer},_react2.default.createElement(_reactNative.View,{style:styles.closeButtonContainer},_react2.default.createElement(_reactNative.TouchableNativeFeedback,{onPress:onPressClose,background:background},_react2.default.createElement(_reactNative.View,{style:[styles.closeButton]},_react2.default.createElement(_MaterialCommunityIcons2.default,{style:styles.closeButtonIcon,name:'arrow-left',size:24})))),_react2.default.createElement(_reactNative.TextInput,{style:styles.searchInput,ref:this.setRef,value:searchTerm,onChangeText:this.handleChange,placeholder:i18n.search,autoFocus:autoFocus,underlineColorAndroid:'transparent'}),searchTerm.length>0?_react2.default.createElement(_reactNative.View,{style:styles.closeButtonContainer},_react2.default.createElement(_reactNative.TouchableNativeFeedback,{onPress:this.pressCancel,background:background},_react2.default.createElement(_reactNative.View,{style:[styles.closeButton]},_react2.default.createElement(_MaterialCommunityIcons2.default,{style:styles.closeButtonIcon,name:'close',size:24})))):null);}}]);return Search;}(_react2.default.PureComponent);Search.defaultProps={onSearch:function onSearch(){},onPressClose:function onPressClose(){},maxResults:75,emojisToShowFilter:null,autoFocus:false};exports.default=Search;