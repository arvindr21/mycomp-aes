'use strict';
var AES = require('aes')
 
module.exports = function (inputKey) {
	var key = [0xffffffff,0xffffffff,0xffffffff,0xffffffff,0xffffffff,0xfffffff8];
	var aes = new AES(inputKey || key);
	
	return {
		enc : function(text){
			return aes.encrypt(text);
		},
		dec : function(text){
			return aes.decrypt(text);
		}
	}
};
