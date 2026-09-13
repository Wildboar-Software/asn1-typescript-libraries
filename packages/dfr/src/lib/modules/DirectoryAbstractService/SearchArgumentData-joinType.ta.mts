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
 * @summary SearchArgumentData_joinType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SearchArgumentData_joinType {
    innerJoin = 0,
    leftOuterJoin = 1,
    fullOuterJoin = 2,
}

/**
 * @summary SearchArgumentData_joinType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType_innerJoin
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_joinType_innerJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.innerJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary innerJoin
 * @constant
 * @type {number}
 */
export
const innerJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.innerJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_leftOuterJoin
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_joinType_leftOuterJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.leftOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leftOuterJoin
 * @constant
 * @type {number}
 */
export
const leftOuterJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.leftOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_fullOuterJoin
 * @constant
 * @type {number}
 */
export
const SearchArgumentData_joinType_fullOuterJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.fullOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullOuterJoin
 * @constant
 * @type {number}
 */
export
const fullOuterJoin: SearchArgumentData_joinType = SearchArgumentData_joinType.fullOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SearchArgumentData_joinType: $.ASN1Decoder<SearchArgumentData_joinType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgumentData_joinType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgumentData_joinType (el: _Element): SearchArgumentData_joinType {
    if (!_cached_decoder_for_SearchArgumentData_joinType) { _cached_decoder_for_SearchArgumentData_joinType = $._decodeEnumerated; }
    return _cached_decoder_for_SearchArgumentData_joinType(el);
}

let _cached_encoder_for_SearchArgumentData_joinType: $.ASN1Encoder<SearchArgumentData_joinType> | null = null;

/**
 * @summary Encodes a(n) SearchArgumentData_joinType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgumentData_joinType, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgumentData_joinType (value: SearchArgumentData_joinType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgumentData_joinType) { _cached_encoder_for_SearchArgumentData_joinType = $._encodeEnumerated; }
    return _cached_encoder_for_SearchArgumentData_joinType(value, elGetter);
}


/* eslint-enable */
