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
 * @summary AlertLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AlertLevel {
    warning = 1,
    fatal = 2,
}

/**
 * @summary AlertLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlertLevel = _enum_for_AlertLevel;

/**
 * @summary AlertLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AlertLevel = _enum_for_AlertLevel;

/**
 * @summary AlertLevel_warning
 * @constant
 * @type {number}
 */
export
const AlertLevel_warning: AlertLevel = AlertLevel.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @constant
 * @type {number}
 */
export
const warning: AlertLevel = AlertLevel.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertLevel_fatal
 * @constant
 * @type {number}
 */
export
const AlertLevel_fatal: AlertLevel = AlertLevel.fatal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fatal
 * @constant
 * @type {number}
 */
export
const fatal: AlertLevel = AlertLevel.fatal; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AlertLevel: $.ASN1Decoder<AlertLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlertLevel (el: _Element): AlertLevel {
    if (!_cached_decoder_for_AlertLevel) { _cached_decoder_for_AlertLevel = $._decodeEnumerated; }
    return _cached_decoder_for_AlertLevel(el);
}

let _cached_encoder_for_AlertLevel: $.ASN1Encoder<AlertLevel> | null = null;

/**
 * @summary Encodes a(n) AlertLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertLevel, encoded as an ASN.1 Element.
 */
export
function _encode_AlertLevel (value: AlertLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlertLevel) { _cached_encoder_for_AlertLevel = $._encodeEnumerated; }
    return _cached_encoder_for_AlertLevel(value, elGetter);
}


/* eslint-enable */
