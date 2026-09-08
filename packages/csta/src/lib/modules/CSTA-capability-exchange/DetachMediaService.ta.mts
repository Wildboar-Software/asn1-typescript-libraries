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
 * @summary DetachMediaService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachMediaService  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     fail                     ( 2),     -- initial states
 *     hold                     ( 3),     -- initial states
 *     queued                     ( 4),     -- initial states
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     ackModelMultiStep             ( 8) }
 * ```
 */
export
type DetachMediaService = BIT_STRING;

/**
 * @summary DetachMediaService_alerting
 * @constant
 */
export
const DetachMediaService_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = DetachMediaService_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_connected
 * @constant
 */
export
const DetachMediaService_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = DetachMediaService_connected; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_fail
 * @constant
 */
export
const DetachMediaService_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 */
export
const fail: number = DetachMediaService_fail; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_hold
 * @constant
 */
export
const DetachMediaService_hold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = DetachMediaService_hold; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_queued
 * @constant
 */
export
const DetachMediaService_queued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = DetachMediaService_queued; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_privateData
 * @constant
 */
export
const DetachMediaService_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DetachMediaService_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_privateDataInAck
 * @constant
 */
export
const DetachMediaService_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DetachMediaService_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_deviceIDOnly
 * @constant
 */
export
const DetachMediaService_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = DetachMediaService_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_ackModelMultiStep
 * @constant
 */
export
const DetachMediaService_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = DetachMediaService_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DetachMediaService: $.ASN1Decoder<DetachMediaService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachMediaService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachMediaService (el: _Element): DetachMediaService {
    if (!_cached_decoder_for_DetachMediaService) { _cached_decoder_for_DetachMediaService = $._decodeBitString; }
    return _cached_decoder_for_DetachMediaService(el);
}

let _cached_encoder_for_DetachMediaService: $.ASN1Encoder<DetachMediaService> | null = null;

/**
 * @summary Encodes a(n) DetachMediaService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachMediaService, encoded as an ASN.1 Element.
 */
export
function _encode_DetachMediaService (value: DetachMediaService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachMediaService) { _cached_encoder_for_DetachMediaService = $._encodeBitString; }
    return _cached_encoder_for_DetachMediaService(value, elGetter);
}


/* eslint-enable */
