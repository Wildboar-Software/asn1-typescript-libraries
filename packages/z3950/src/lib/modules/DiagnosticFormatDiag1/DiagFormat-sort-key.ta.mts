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
 * @summary DiagFormat_sort_key
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-key ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_sort_key = INTEGER;

/**
 * @summary DiagFormat_sort_key_tooMany
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_tooMany: DiagFormat_sort_key = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_tooMany
 * @constant
 * @type {number}
 */
export
const tooMany: DiagFormat_sort_key = DiagFormat_sort_key_tooMany; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_duplicate: DiagFormat_sort_key = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @constant
 * @type {number}
 */
export
const duplicate: DiagFormat_sort_key = DiagFormat_sort_key_duplicate; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_sort_key: $.ASN1Decoder<DiagFormat_sort_key> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_sort_key
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_sort_key (el: _Element): DiagFormat_sort_key {
    if (!_cached_decoder_for_DiagFormat_sort_key) { _cached_decoder_for_DiagFormat_sort_key = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_sort_key(el);
}

let _cached_encoder_for_DiagFormat_sort_key: $.ASN1Encoder<DiagFormat_sort_key> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_sort_key into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_sort_key, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_sort_key (value: DiagFormat_sort_key, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_sort_key) { _cached_encoder_for_DiagFormat_sort_key = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_sort_key(value, elGetter);
}


/* eslint-enable */
