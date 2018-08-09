/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.AddressState');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.qrl.LatticePK');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qrl.AddressState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qrl.AddressState.repeatedFields_, null);
};
goog.inherits(proto.qrl.AddressState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.AddressState.displayName = 'proto.qrl.AddressState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qrl.AddressState.repeatedFields_ = [4,5,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qrl.AddressState.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.AddressState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.AddressState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.AddressState.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 3, 0),
    otsBitfieldList: msg.getOtsBitfieldList_asB64(),
    transactionHashesList: msg.getTransactionHashesList_asB64(),
    tokensMap: (f = msg.getTokensMap()) ? f.toObject(includeInstance, undefined) : [],
    latticepkListList: jspb.Message.toObjectList(msg.getLatticepkListList(),
    proto.qrl.LatticePK.toObject, includeInstance),
    slavePksAccessTypeMap: (f = msg.getSlavePksAccessTypeMap()) ? f.toObject(includeInstance, undefined) : [],
    otsCounter: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qrl.AddressState}
 */
proto.qrl.AddressState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.AddressState;
  return proto.qrl.AddressState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.AddressState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.AddressState}
 */
proto.qrl.AddressState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addOtsBitfield(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTransactionHashes(value);
      break;
    case 6:
      var value = msg.getTokensMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readUint64);
         });
      break;
    case 7:
      var value = new proto.qrl.LatticePK;
      reader.readMessage(value,proto.qrl.LatticePK.deserializeBinaryFromReader);
      msg.addLatticepkList(value);
      break;
    case 8:
      var value = msg.getSlavePksAccessTypeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readUint32);
         });
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOtsCounter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qrl.AddressState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.AddressState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.AddressState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.AddressState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getOtsBitfieldList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getTransactionHashesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
  f = message.getTokensMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getLatticepkListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.qrl.LatticePK.serializeBinaryToWriter
    );
  }
  f = message.getSlavePksAccessTypeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeUint32);
  }
  f = message.getOtsCounter();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.AddressState.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.qrl.AddressState.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.qrl.AddressState.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.AddressState.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 balance = 2;
 * @return {number}
 */
proto.qrl.AddressState.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.qrl.AddressState.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 nonce = 3;
 * @return {number}
 */
proto.qrl.AddressState.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.qrl.AddressState.prototype.setNonce = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated bytes ots_bitfield = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.qrl.AddressState.prototype.getOtsBitfieldList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes ots_bitfield = 4;
 * This is a type-conversion wrapper around `getOtsBitfieldList()`
 * @return {!Array.<string>}
 */
proto.qrl.AddressState.prototype.getOtsBitfieldList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getOtsBitfieldList()));
};


/**
 * repeated bytes ots_bitfield = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOtsBitfieldList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.qrl.AddressState.prototype.getOtsBitfieldList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getOtsBitfieldList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.qrl.AddressState.prototype.setOtsBitfieldList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.qrl.AddressState.prototype.addOtsBitfield = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.qrl.AddressState.prototype.clearOtsBitfieldList = function() {
  this.setOtsBitfieldList([]);
};


/**
 * repeated bytes transaction_hashes = 5;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.qrl.AddressState.prototype.getTransactionHashesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * repeated bytes transaction_hashes = 5;
 * This is a type-conversion wrapper around `getTransactionHashesList()`
 * @return {!Array.<string>}
 */
proto.qrl.AddressState.prototype.getTransactionHashesList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getTransactionHashesList()));
};


/**
 * repeated bytes transaction_hashes = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionHashesList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.qrl.AddressState.prototype.getTransactionHashesList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTransactionHashesList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.qrl.AddressState.prototype.setTransactionHashesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.qrl.AddressState.prototype.addTransactionHashes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.qrl.AddressState.prototype.clearTransactionHashesList = function() {
  this.setTransactionHashesList([]);
};


/**
 * map<string, uint64> tokens = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.qrl.AddressState.prototype.getTokensMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.qrl.AddressState.prototype.clearTokensMap = function() {
  this.getTokensMap().clear();
};


/**
 * repeated LatticePK latticePK_list = 7;
 * @return {!Array.<!proto.qrl.LatticePK>}
 */
proto.qrl.AddressState.prototype.getLatticepkListList = function() {
  return /** @type{!Array.<!proto.qrl.LatticePK>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qrl.LatticePK, 7));
};


/** @param {!Array.<!proto.qrl.LatticePK>} value */
proto.qrl.AddressState.prototype.setLatticepkListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.qrl.LatticePK=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qrl.LatticePK}
 */
proto.qrl.AddressState.prototype.addLatticepkList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.qrl.LatticePK, opt_index);
};


proto.qrl.AddressState.prototype.clearLatticepkListList = function() {
  this.setLatticepkListList([]);
};


/**
 * map<string, uint32> slave_pks_access_type = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.qrl.AddressState.prototype.getSlavePksAccessTypeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


proto.qrl.AddressState.prototype.clearSlavePksAccessTypeMap = function() {
  this.getSlavePksAccessTypeMap().clear();
};


/**
 * optional uint64 ots_counter = 9;
 * @return {number}
 */
proto.qrl.AddressState.prototype.getOtsCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.qrl.AddressState.prototype.setOtsCounter = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


