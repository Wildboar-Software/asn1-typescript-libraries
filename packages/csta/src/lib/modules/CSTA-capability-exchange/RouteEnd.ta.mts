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
 * @summary RouteEnd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteEnd  ::=  BIT STRING
 * {     errorValue                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     supportsSending             ( 4),     -- misc characteristics
 *     supportsReceiving             ( 5) }
 * ```
 */
export
type RouteEnd = BIT_STRING;

/**
 * @summary RouteEnd_errorValue
 * @constant
 */
export
const RouteEnd_errorValue: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary errorValue
 * @constant
 */
export
const errorValue: number = RouteEnd_errorValue; /* SHORT_NAMED_BIT */

/**
 * @summary RouteEnd_correlatorData
 * @constant
 */
export
const RouteEnd_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = RouteEnd_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteEnd_privateData
 * @constant
 */
export
const RouteEnd_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteEnd_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteEnd_supportsSending
 * @constant
 */
export
const RouteEnd_supportsSending: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary supportsSending
 * @constant
 */
export
const supportsSending: number = RouteEnd_supportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary RouteEnd_supportsReceiving
 * @constant
 */
export
const RouteEnd_supportsReceiving: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary supportsReceiving
 * @constant
 */
export
const supportsReceiving: number = RouteEnd_supportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteEnd: $.ASN1Decoder<RouteEnd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteEnd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteEnd (el: _Element): RouteEnd {
    if (!_cached_decoder_for_RouteEnd) { _cached_decoder_for_RouteEnd = $._decodeBitString; }
    return _cached_decoder_for_RouteEnd(el);
}

let _cached_encoder_for_RouteEnd: $.ASN1Encoder<RouteEnd> | null = null;

/**
 * @summary Encodes a(n) RouteEnd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteEnd, encoded as an ASN.1 Element.
 */
export
function _encode_RouteEnd (value: RouteEnd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteEnd) { _cached_encoder_for_RouteEnd = $._encodeBitString; }
    return _cached_encoder_for_RouteEnd(value, elGetter);
}


/* eslint-enable */
