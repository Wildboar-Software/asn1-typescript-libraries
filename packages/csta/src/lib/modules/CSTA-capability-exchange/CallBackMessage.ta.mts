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
 * @summary CallBackMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessage  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     null                     ( 1),     -- initial states
 *     failed                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     privateData                 ( 4),     -- optional parameters
 *     targetDeviceInAck             ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     moreCallBacksNegAck             ( 8),     -- misc characteristics
 *     ackModelMultiStep             ( 9) }
 * ```
 */
export
type CallBackMessage = BIT_STRING;

/**
 * @summary CallBackMessage_alerting
 * @constant
 */
export
const CallBackMessage_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = CallBackMessage_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_null_
 * @constant
 */
export
const CallBackMessage_null_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 */
export
const null_: number = CallBackMessage_null_; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_failed
 * @constant
 */
export
const CallBackMessage_failed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = CallBackMessage_failed; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_queued
 * @constant
 */
export
const CallBackMessage_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = CallBackMessage_queued; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_privateData
 * @constant
 */
export
const CallBackMessage_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallBackMessage_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_targetDeviceInAck
 * @constant
 */
export
const CallBackMessage_targetDeviceInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary targetDeviceInAck
 * @constant
 */
export
const targetDeviceInAck: number = CallBackMessage_targetDeviceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_privateDataInAck
 * @constant
 */
export
const CallBackMessage_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CallBackMessage_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_deviceIDOnly
 * @constant
 */
export
const CallBackMessage_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = CallBackMessage_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_moreCallBacksNegAck
 * @constant
 */
export
const CallBackMessage_moreCallBacksNegAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary moreCallBacksNegAck
 * @constant
 */
export
const moreCallBacksNegAck: number = CallBackMessage_moreCallBacksNegAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_ackModelMultiStep
 * @constant
 */
export
const CallBackMessage_ackModelMultiStep: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CallBackMessage_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackMessage: $.ASN1Decoder<CallBackMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessage (el: _Element): CallBackMessage {
    if (!_cached_decoder_for_CallBackMessage) { _cached_decoder_for_CallBackMessage = $._decodeBitString; }
    return _cached_decoder_for_CallBackMessage(el);
}

let _cached_encoder_for_CallBackMessage: $.ASN1Encoder<CallBackMessage> | null = null;

/**
 * @summary Encodes a(n) CallBackMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessage, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessage (value: CallBackMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessage) { _cached_encoder_for_CallBackMessage = $._encodeBitString; }
    return _cached_encoder_for_CallBackMessage(value, elGetter);
}


/* eslint-enable */
