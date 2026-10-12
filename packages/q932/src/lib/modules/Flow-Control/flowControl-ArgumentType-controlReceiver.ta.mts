/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_flowControl_ArgumentType_controlReceiver {
    receiverNotReady = 0,
    receiverReady = 1,
}

/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type flowControl_ArgumentType_controlReceiver = _enum_for_flowControl_ArgumentType_controlReceiver;

/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const flowControl_ArgumentType_controlReceiver = _enum_for_flowControl_ArgumentType_controlReceiver;

/**
 * @summary flowControl_ArgumentType_controlReceiver_receiverNotReady
 * @constant
 * @type {number}
 */
export
const flowControl_ArgumentType_controlReceiver_receiverNotReady: flowControl_ArgumentType_controlReceiver = flowControl_ArgumentType_controlReceiver.receiverNotReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverNotReady
 * @constant
 * @type {number}
 */
export
const receiverNotReady: flowControl_ArgumentType_controlReceiver = flowControl_ArgumentType_controlReceiver.receiverNotReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowControl_ArgumentType_controlReceiver_receiverReady
 * @constant
 * @type {number}
 */
export
const flowControl_ArgumentType_controlReceiver_receiverReady: flowControl_ArgumentType_controlReceiver = flowControl_ArgumentType_controlReceiver.receiverReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverReady
 * @constant
 * @type {number}
 */
export
const receiverReady: flowControl_ArgumentType_controlReceiver = flowControl_ArgumentType_controlReceiver.receiverReady; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_flowControl_ArgumentType_controlReceiver: $.ASN1Decoder<flowControl_ArgumentType_controlReceiver> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) flowControl_ArgumentType_controlReceiver
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_flowControl_ArgumentType_controlReceiver (el: _Element): flowControl_ArgumentType_controlReceiver {
    if (!_cached_decoder_for_flowControl_ArgumentType_controlReceiver) { _cached_decoder_for_flowControl_ArgumentType_controlReceiver = $._decodeEnumerated; }
    return _cached_decoder_for_flowControl_ArgumentType_controlReceiver(el);
}

let _cached_encoder_for_flowControl_ArgumentType_controlReceiver: $.ASN1Encoder<flowControl_ArgumentType_controlReceiver> | null = null;

/**
 * @summary Encodes a(n) flowControl_ArgumentType_controlReceiver into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The flowControl_ArgumentType_controlReceiver, encoded as an ASN.1 Element.
 */
export
function _encode_flowControl_ArgumentType_controlReceiver (value: flowControl_ArgumentType_controlReceiver, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_flowControl_ArgumentType_controlReceiver) { _cached_encoder_for_flowControl_ArgumentType_controlReceiver = $._encodeEnumerated; }
    return _cached_encoder_for_flowControl_ArgumentType_controlReceiver(value, elGetter);
}


/* eslint-enable */
