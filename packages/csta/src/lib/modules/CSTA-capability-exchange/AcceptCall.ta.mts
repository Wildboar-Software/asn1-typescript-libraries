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
 * @summary AcceptCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcceptCall  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     deviceIDOnly                 ( 4),     -- misc characteristics
 *     ackModelMultiStep             ( 5) }
 * ```
 */
export
type AcceptCall = BIT_STRING;

/**
 * @summary AcceptCall_correlatorData
 * @constant
 */
export
const AcceptCall_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = AcceptCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_userData
 * @constant
 */
export
const AcceptCall_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = AcceptCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_privateData
 * @constant
 */
export
const AcceptCall_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AcceptCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_privateDataInAck
 * @constant
 */
export
const AcceptCall_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = AcceptCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_deviceIDOnly
 * @constant
 */
export
const AcceptCall_deviceIDOnly: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = AcceptCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_ackModelMultiStep
 * @constant
 */
export
const AcceptCall_ackModelMultiStep: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = AcceptCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AcceptCall: $.ASN1Decoder<AcceptCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcceptCall (el: _Element): AcceptCall {
    if (!_cached_decoder_for_AcceptCall) { _cached_decoder_for_AcceptCall = $._decodeBitString; }
    return _cached_decoder_for_AcceptCall(el);
}

let _cached_encoder_for_AcceptCall: $.ASN1Encoder<AcceptCall> | null = null;

/**
 * @summary Encodes a(n) AcceptCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptCall, encoded as an ASN.1 Element.
 */
export
function _encode_AcceptCall (value: AcceptCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcceptCall) { _cached_encoder_for_AcceptCall = $._encodeBitString; }
    return _cached_encoder_for_AcceptCall(value, elGetter);
}


/* eslint-enable */
