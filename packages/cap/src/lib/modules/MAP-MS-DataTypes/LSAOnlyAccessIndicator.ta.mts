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
 * @summary LSAOnlyAccessIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LSAOnlyAccessIndicator {
    accessOutsideLSAsAllowed = 0,
    accessOutsideLSAsRestricted = 1,
}

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
type LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
const LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsAllowed
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsAllowed
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsRestricted
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsRestricted
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LSAOnlyAccessIndicator: $.ASN1Decoder<LSAOnlyAccessIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAOnlyAccessIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAOnlyAccessIndicator (el: _Element): LSAOnlyAccessIndicator {
    if (!_cached_decoder_for_LSAOnlyAccessIndicator) { _cached_decoder_for_LSAOnlyAccessIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_LSAOnlyAccessIndicator(el);
}

let _cached_encoder_for_LSAOnlyAccessIndicator: $.ASN1Encoder<LSAOnlyAccessIndicator> | null = null;

/**
 * @summary Encodes a(n) LSAOnlyAccessIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAOnlyAccessIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_LSAOnlyAccessIndicator (value: LSAOnlyAccessIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAOnlyAccessIndicator) { _cached_encoder_for_LSAOnlyAccessIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_LSAOnlyAccessIndicator(value, elGetter);
}


/* eslint-enable */
