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
 * @summary SearchArgumentData_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgumentData-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SearchArgumentData_subset = INTEGER;

/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_subset_baseObject: SearchArgumentData_subset = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: SearchArgumentData_subset = SearchArgumentData_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_subset_oneLevel: SearchArgumentData_subset = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: SearchArgumentData_subset = SearchArgumentData_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_subset_wholeSubtree: SearchArgumentData_subset = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: SearchArgumentData_subset = SearchArgumentData_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SearchArgumentData_subset: $.ASN1Decoder<SearchArgumentData_subset> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgumentData_subset
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgumentData_subset (el: _Element): SearchArgumentData_subset {
    if (!_cached_decoder_for_SearchArgumentData_subset) { _cached_decoder_for_SearchArgumentData_subset = $._decodeInteger; }
    return _cached_decoder_for_SearchArgumentData_subset(el);
}

let _cached_encoder_for_SearchArgumentData_subset: $.ASN1Encoder<SearchArgumentData_subset> | null = null;

/**
 * @summary Encodes a(n) SearchArgumentData_subset into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgumentData_subset, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgumentData_subset (value: SearchArgumentData_subset, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgumentData_subset) { _cached_encoder_for_SearchArgumentData_subset = $._encodeInteger; }
    return _cached_encoder_for_SearchArgumentData_subset(value, elGetter);
}


/* eslint-enable */
