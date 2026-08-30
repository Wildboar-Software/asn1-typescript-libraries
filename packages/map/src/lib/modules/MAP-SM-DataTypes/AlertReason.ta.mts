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
 * @summary AlertReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AlertReason {
    ms_Present = 0,
    memoryAvailable = 1,
}

/**
 * @summary AlertReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type AlertReason = _enum_for_AlertReason;

/**
 * @summary AlertReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const AlertReason = _enum_for_AlertReason;

/**
 * @summary AlertReason_ms_Present
 * @constant
 * @type {number}
 */
export
const AlertReason_ms_Present: AlertReason = AlertReason.ms_Present; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ms_Present
 * @constant
 * @type {number}
 */
export
const ms_Present: AlertReason = AlertReason.ms_Present; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertReason_memoryAvailable
 * @constant
 * @type {number}
 */
export
const AlertReason_memoryAvailable: AlertReason = AlertReason.memoryAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryAvailable
 * @constant
 * @type {number}
 */
export
const memoryAvailable: AlertReason = AlertReason.memoryAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AlertReason: $.ASN1Decoder<AlertReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlertReason (el: _Element): AlertReason {
    if (!_cached_decoder_for_AlertReason) { _cached_decoder_for_AlertReason = $._decodeEnumerated; }
    return _cached_decoder_for_AlertReason(el);
}

let _cached_encoder_for_AlertReason: $.ASN1Encoder<AlertReason> | null = null;

/**
 * @summary Encodes a(n) AlertReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertReason, encoded as an ASN.1 Element.
 */
export
function _encode_AlertReason (value: AlertReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlertReason) { _cached_encoder_for_AlertReason = $._encodeEnumerated; }
    return _cached_encoder_for_AlertReason(value, elGetter);
}


/* eslint-enable */
