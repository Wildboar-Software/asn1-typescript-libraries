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
 * @summary HoldCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCall  ::=  BIT STRING
 * {     connectionReservation             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     deviceIDOnly                 ( 3),     -- misc characteristics
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type HoldCall = BIT_STRING;

/**
 * @summary HoldCall_connectionReservation
 * @constant
 */
export
const HoldCall_connectionReservation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 */
export
const connectionReservation: number = HoldCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_privateData
 * @constant
 */
export
const HoldCall_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = HoldCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_privateDataInAck
 * @constant
 */
export
const HoldCall_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = HoldCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_deviceIDOnly
 * @constant
 */
export
const HoldCall_deviceIDOnly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = HoldCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_ackModelMultiStep
 * @constant
 */
export
const HoldCall_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = HoldCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_HoldCall: $.ASN1Decoder<HoldCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCall (el: _Element): HoldCall {
    if (!_cached_decoder_for_HoldCall) { _cached_decoder_for_HoldCall = $._decodeBitString; }
    return _cached_decoder_for_HoldCall(el);
}

let _cached_encoder_for_HoldCall: $.ASN1Encoder<HoldCall> | null = null;

/**
 * @summary Encodes a(n) HoldCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCall, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCall (value: HoldCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCall) { _cached_encoder_for_HoldCall = $._encodeBitString; }
    return _cached_encoder_for_HoldCall(value, elGetter);
}


/* eslint-enable */
