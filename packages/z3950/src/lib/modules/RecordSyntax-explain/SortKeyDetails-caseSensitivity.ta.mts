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
 * @summary SortKeyDetails_caseSensitivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeyDetails-caseSensitivity ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortKeyDetails_caseSensitivity = INTEGER;

/**
 * @summary SortKeyDetails_caseSensitivity_always
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_always: SortKeyDetails_caseSensitivity = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_always
 * @constant
 * @type {number}
 */
export
const always: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_always; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_never
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_never: SortKeyDetails_caseSensitivity = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_never
 * @constant
 * @type {number}
 */
export
const never: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_never; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_yes
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_default_yes: SortKeyDetails_caseSensitivity = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_yes
 * @constant
 * @type {number}
 */
export
const default_yes: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_default_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_no
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_default_no: SortKeyDetails_caseSensitivity = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_no
 * @constant
 * @type {number}
 */
export
const default_no: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_default_no; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SortKeyDetails_caseSensitivity: $.ASN1Decoder<SortKeyDetails_caseSensitivity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeyDetails_caseSensitivity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeyDetails_caseSensitivity (el: _Element): SortKeyDetails_caseSensitivity {
    if (!_cached_decoder_for_SortKeyDetails_caseSensitivity) { _cached_decoder_for_SortKeyDetails_caseSensitivity = $._decodeInteger; }
    return _cached_decoder_for_SortKeyDetails_caseSensitivity(el);
}

let _cached_encoder_for_SortKeyDetails_caseSensitivity: $.ASN1Encoder<SortKeyDetails_caseSensitivity> | null = null;

/**
 * @summary Encodes a(n) SortKeyDetails_caseSensitivity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeyDetails_caseSensitivity, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeyDetails_caseSensitivity (value: SortKeyDetails_caseSensitivity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeyDetails_caseSensitivity) { _cached_encoder_for_SortKeyDetails_caseSensitivity = $._encodeInteger; }
    return _cached_encoder_for_SortKeyDetails_caseSensitivity(value, elGetter);
}


/* eslint-enable */
