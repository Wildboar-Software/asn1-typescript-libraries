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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Priority {
    low = 0,
    medium = 1,
    high = 2,
}

/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority = _enum_for_Priority;

/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Priority = _enum_for_Priority;

/**
 * @summary Priority_low
 * @constant
 * @type {number}
 */
export
const Priority_low: Priority = Priority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: Priority = Priority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_medium
 * @constant
 * @type {number}
 */
export
const Priority_medium: Priority = Priority.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: Priority = Priority.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_high
 * @constant
 * @type {number}
 */
export
const Priority_high: Priority = Priority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: Priority = Priority.high; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Priority: $.ASN1Decoder<Priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Priority (el: _Element): Priority {
    if (!_cached_decoder_for_Priority) { _cached_decoder_for_Priority = $._decodeEnumerated; }
    return _cached_decoder_for_Priority(el);
}

let _cached_encoder_for_Priority: $.ASN1Encoder<Priority> | null = null;

/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export
function _encode_Priority (value: Priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Priority) { _cached_encoder_for_Priority = $._encodeEnumerated; }
    return _cached_encoder_for_Priority(value, elGetter);
}


/* eslint-enable */
