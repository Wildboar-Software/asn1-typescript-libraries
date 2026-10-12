/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary flowControl_ArgumentType_controlReceiver
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
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
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
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
 * flowControl-ArgumentType-controlReceiver ::= ENUMERATED {
 *   receiverNotReady(0),
 *   receiverReady(1)
 * }
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
export const _decode_flowControl_ArgumentType_controlReceiver: $.ASN1Decoder<flowControl_ArgumentType_controlReceiver> = $._decodeEnumerated;
export const _encode_flowControl_ArgumentType_controlReceiver: $.ASN1Encoder<flowControl_ArgumentType_controlReceiver> = $._encodeEnumerated;


/* eslint-enable */
