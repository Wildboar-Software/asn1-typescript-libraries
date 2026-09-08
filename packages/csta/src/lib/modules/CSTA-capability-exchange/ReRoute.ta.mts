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
 * @summary ReRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRoute  ::=  BIT STRING
 * {     replyTimeout                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type ReRoute = BIT_STRING;

/**
 * @summary ReRoute_replyTimeout
 * @constant
 */
export
const ReRoute_replyTimeout: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary replyTimeout
 * @constant
 */
export
const replyTimeout: number = ReRoute_replyTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_correlatorData
 * @constant
 */
export
const ReRoute_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ReRoute_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_privateData
 * @constant
 */
export
const ReRoute_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ReRoute_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ReRoute: $.ASN1Decoder<ReRoute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReRoute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReRoute (el: _Element): ReRoute {
    if (!_cached_decoder_for_ReRoute) { _cached_decoder_for_ReRoute = $._decodeBitString; }
    return _cached_decoder_for_ReRoute(el);
}

let _cached_encoder_for_ReRoute: $.ASN1Encoder<ReRoute> | null = null;

/**
 * @summary Encodes a(n) ReRoute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReRoute, encoded as an ASN.1 Element.
 */
export
function _encode_ReRoute (value: ReRoute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReRoute) { _cached_encoder_for_ReRoute = $._encodeBitString; }
    return _cached_encoder_for_ReRoute(value, elGetter);
}


/* eslint-enable */
