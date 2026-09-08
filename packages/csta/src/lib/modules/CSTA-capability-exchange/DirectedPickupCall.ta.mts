/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary DirectedPickupCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectedPickupCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     hold                     ( 1),     -- initial states
 *     queued                     ( 2),     -- initial states
 *     connected                 ( 3),     -- initial states
 *     correlatorData                 ( 4),     -- optional parameters
 *     userData                 ( 5),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     pickedCallInAck             ( 7),     -- optional parameters
 *     pickedCallInfoInAck             ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     supportsOfferedModeOfAlerting         (11),     -- misc characteristics
 *     supportsPrompting             (12),     -- misc characteristics
 *     promptingMode                 (13),     -- misc characteristics
 *     ackModelMultiStep             (14) }
 * ```
 */
export
type DirectedPickupCall = BIT_STRING;

/**
 * @summary DirectedPickupCall_alerting
 * @constant
 */
export
const DirectedPickupCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = DirectedPickupCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_hold
 * @constant
 */
export
const DirectedPickupCall_hold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = DirectedPickupCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_queued
 * @constant
 */
export
const DirectedPickupCall_queued: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = DirectedPickupCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_connected
 * @constant
 */
export
const DirectedPickupCall_connected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = DirectedPickupCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_correlatorData
 * @constant
 */
export
const DirectedPickupCall_correlatorData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = DirectedPickupCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_userData
 * @constant
 */
export
const DirectedPickupCall_userData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = DirectedPickupCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_privateData
 * @constant
 */
export
const DirectedPickupCall_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DirectedPickupCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_pickedCallInAck
 * @constant
 */
export
const DirectedPickupCall_pickedCallInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInAck
 * @constant
 */
export
const pickedCallInAck: number = DirectedPickupCall_pickedCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_pickedCallInfoInAck
 * @constant
 */
export
const DirectedPickupCall_pickedCallInfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInfoInAck
 * @constant
 */
export
const pickedCallInfoInAck: number = DirectedPickupCall_pickedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_privateDataInAck
 * @constant
 */
export
const DirectedPickupCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DirectedPickupCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_deviceIDOnly
 * @constant
 */
export
const DirectedPickupCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = DirectedPickupCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_supportsOfferedModeOfAlerting
 * @constant
 */
export
const DirectedPickupCall_supportsOfferedModeOfAlerting: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 */
export
const supportsOfferedModeOfAlerting: number = DirectedPickupCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_supportsPrompting
 * @constant
 */
export
const DirectedPickupCall_supportsPrompting: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 */
export
const supportsPrompting: number = DirectedPickupCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_promptingMode
 * @constant
 */
export
const DirectedPickupCall_promptingMode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 */
export
const promptingMode: number = DirectedPickupCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_ackModelMultiStep
 * @constant
 */
export
const DirectedPickupCall_ackModelMultiStep: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = DirectedPickupCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DirectedPickupCall: $.ASN1Decoder<DirectedPickupCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectedPickupCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectedPickupCall (el: _Element): DirectedPickupCall {
    if (!_cached_decoder_for_DirectedPickupCall) { _cached_decoder_for_DirectedPickupCall = $._decodeBitString; }
    return _cached_decoder_for_DirectedPickupCall(el);
}

let _cached_encoder_for_DirectedPickupCall: $.ASN1Encoder<DirectedPickupCall> | null = null;

/**
 * @summary Encodes a(n) DirectedPickupCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectedPickupCall, encoded as an ASN.1 Element.
 */
export
function _encode_DirectedPickupCall (value: DirectedPickupCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectedPickupCall) { _cached_encoder_for_DirectedPickupCall = $._encodeBitString; }
    return _cached_encoder_for_DirectedPickupCall(value, elGetter);
}


/* eslint-enable */
