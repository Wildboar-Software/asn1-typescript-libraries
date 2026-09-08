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
 * @summary DialDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialDigits  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     deviceIDOnly                 ( 3),     -- misc characteristics
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type DialDigits = BIT_STRING;

/**
 * @summary DialDigits_correlatorData
 * @constant
 */
export
const DialDigits_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = DialDigits_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_privateData
 * @constant
 */
export
const DialDigits_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DialDigits_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_privateDataInAck
 * @constant
 */
export
const DialDigits_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DialDigits_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_deviceIDOnly
 * @constant
 */
export
const DialDigits_deviceIDOnly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = DialDigits_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DialDigits_ackModelMultiStep
 * @constant
 */
export
const DialDigits_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = DialDigits_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DialDigits: $.ASN1Decoder<DialDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialDigits (el: _Element): DialDigits {
    if (!_cached_decoder_for_DialDigits) { _cached_decoder_for_DialDigits = $._decodeBitString; }
    return _cached_decoder_for_DialDigits(el);
}

let _cached_encoder_for_DialDigits: $.ASN1Encoder<DialDigits> | null = null;

/**
 * @summary Encodes a(n) DialDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialDigits, encoded as an ASN.1 Element.
 */
export
function _encode_DialDigits (value: DialDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialDigits) { _cached_encoder_for_DialDigits = $._encodeBitString; }
    return _cached_encoder_for_DialDigits(value, elGetter);
}


/* eslint-enable */
