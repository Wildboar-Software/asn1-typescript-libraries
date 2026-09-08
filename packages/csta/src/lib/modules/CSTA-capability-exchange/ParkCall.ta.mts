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
 * @summary ParkCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParkCall  ::=  BIT STRING
 * {    hold                     ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     correlatorData                 ( 2),     -- optional parameters
 *     subjectOfCall                ( 8),     -- optional parameters
 *     languagePreferences            ( 9),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     parkedToInAck                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     deviceIDOnly                 ( 6),     -- misc characteristics
 *     ackModelMultiStep             ( 7) }
 * ```
 */
export
type ParkCall = BIT_STRING;

/**
 * @summary ParkCall_hold
 * @constant
 */
export
const ParkCall_hold: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = ParkCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_connected
 * @constant
 */
export
const ParkCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = ParkCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_correlatorData
 * @constant
 */
export
const ParkCall_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ParkCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_subjectOfCall
 * @constant
 */
export
const ParkCall_subjectOfCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = ParkCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_languagePreferences
 * @constant
 */
export
const ParkCall_languagePreferences: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = ParkCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_privateData
 * @constant
 */
export
const ParkCall_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ParkCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_parkedToInAck
 * @constant
 */
export
const ParkCall_parkedToInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary parkedToInAck
 * @constant
 */
export
const parkedToInAck: number = ParkCall_parkedToInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_privateDataInAck
 * @constant
 */
export
const ParkCall_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ParkCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_deviceIDOnly
 * @constant
 */
export
const ParkCall_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = ParkCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_ackModelMultiStep
 * @constant
 */
export
const ParkCall_ackModelMultiStep: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ParkCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParkCall: $.ASN1Decoder<ParkCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParkCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParkCall (el: _Element): ParkCall {
    if (!_cached_decoder_for_ParkCall) { _cached_decoder_for_ParkCall = $._decodeBitString; }
    return _cached_decoder_for_ParkCall(el);
}

let _cached_encoder_for_ParkCall: $.ASN1Encoder<ParkCall> | null = null;

/**
 * @summary Encodes a(n) ParkCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParkCall, encoded as an ASN.1 Element.
 */
export
function _encode_ParkCall (value: ParkCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParkCall) { _cached_encoder_for_ParkCall = $._encodeBitString; }
    return _cached_encoder_for_ParkCall(value, elGetter);
}


/* eslint-enable */
