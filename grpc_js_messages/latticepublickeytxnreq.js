/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.LatticePublicKeyTxnReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.qrl.LatticePublicKeyTxnReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qrl.LatticePublicKeyTxnReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.LatticePublicKeyTxnReq.displayName = 'proto.qrl.LatticePublicKeyTxnReq';
}


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
proto.qrl.LatticePublicKeyTxnReq.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.LatticePublicKeyTxnReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.LatticePublicKeyTxnReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.LatticePublicKeyTxnReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressFrom: msg.getAddressFrom_asB64(),
    kyberPk: msg.getKyberPk_asB64(),
    dilithiumPk: msg.getDilithiumPk_asB64(),
    fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    xmssPk: msg.getXmssPk_asB64()
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
 * @return {!proto.qrl.LatticePublicKeyTxnReq}
 */
proto.qrl.LatticePublicKeyTxnReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.LatticePublicKeyTxnReq;
  return proto.qrl.LatticePublicKeyTxnReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.LatticePublicKeyTxnReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.LatticePublicKeyTxnReq}
 */
proto.qrl.LatticePublicKeyTxnReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddressFrom(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKyberPk(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDilithiumPk(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setXmssPk(value);
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
proto.qrl.LatticePublicKeyTxnReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.LatticePublicKeyTxnReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.LatticePublicKeyTxnReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.LatticePublicKeyTxnReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressFrom_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKyberPk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDilithiumPk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getXmssPk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes address_from = 1;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getAddressFrom = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address_from = 1;
 * This is a type-conversion wrapper around `getAddressFrom()`
 * @return {string}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getAddressFrom_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddressFrom()));
};


/**
 * optional bytes address_from = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddressFrom()`
 * @return {!Uint8Array}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getAddressFrom_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddressFrom()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.LatticePublicKeyTxnReq.prototype.setAddressFrom = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes kyber_pk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getKyberPk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes kyber_pk = 2;
 * This is a type-conversion wrapper around `getKyberPk()`
 * @return {string}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getKyberPk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKyberPk()));
};


/**
 * optional bytes kyber_pk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKyberPk()`
 * @return {!Uint8Array}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getKyberPk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKyberPk()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.LatticePublicKeyTxnReq.prototype.setKyberPk = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes dilithium_pk = 3;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getDilithiumPk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes dilithium_pk = 3;
 * This is a type-conversion wrapper around `getDilithiumPk()`
 * @return {string}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getDilithiumPk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDilithiumPk()));
};


/**
 * optional bytes dilithium_pk = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDilithiumPk()`
 * @return {!Uint8Array}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getDilithiumPk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDilithiumPk()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.LatticePublicKeyTxnReq.prototype.setDilithiumPk = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 fee = 4;
 * @return {number}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.qrl.LatticePublicKeyTxnReq.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes xmss_pk = 5;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getXmssPk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes xmss_pk = 5;
 * This is a type-conversion wrapper around `getXmssPk()`
 * @return {string}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getXmssPk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getXmssPk()));
};


/**
 * optional bytes xmss_pk = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getXmssPk()`
 * @return {!Uint8Array}
 */
proto.qrl.LatticePublicKeyTxnReq.prototype.getXmssPk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getXmssPk()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.LatticePublicKeyTxnReq.prototype.setXmssPk = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


