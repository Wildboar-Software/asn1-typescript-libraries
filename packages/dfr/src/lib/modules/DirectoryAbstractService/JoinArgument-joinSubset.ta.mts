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



export
enum _enum_for_JoinArgument_joinSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary JoinArgument_joinSubset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JoinArgument-joinSubset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type JoinArgument_joinSubset = _enum_for_JoinArgument_joinSubset | ENUMERATED;

/**
 * @summary JoinArgument_joinSubset_baseObject
 * @constant
 * @type {number}
 */
export
const JoinArgument_joinSubset_baseObject: JoinArgument_joinSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: JoinArgument_joinSubset = JoinArgument_joinSubset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JoinArgument_joinSubset_oneLevel
 * @constant
 * @type {number}
 */
export
const JoinArgument_joinSubset_oneLevel: JoinArgument_joinSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: JoinArgument_joinSubset = JoinArgument_joinSubset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JoinArgument_joinSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const JoinArgument_joinSubset_wholeSubtree: JoinArgument_joinSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: JoinArgument_joinSubset = JoinArgument_joinSubset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_JoinArgument_joinSubset: $.ASN1Decoder<JoinArgument_joinSubset> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinArgument_joinSubset
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JoinArgument_joinSubset (el: _Element): JoinArgument_joinSubset {
    if (!_cached_decoder_for_JoinArgument_joinSubset) { _cached_decoder_for_JoinArgument_joinSubset = $._decodeEnumerated; }
    return _cached_decoder_for_JoinArgument_joinSubset(el);
}

let _cached_encoder_for_JoinArgument_joinSubset: $.ASN1Encoder<JoinArgument_joinSubset> | null = null;

/**
 * @summary Encodes a(n) JoinArgument_joinSubset into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinArgument_joinSubset, encoded as an ASN.1 Element.
 */
export
function _encode_JoinArgument_joinSubset (value: JoinArgument_joinSubset, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JoinArgument_joinSubset) { _cached_encoder_for_JoinArgument_joinSubset = $._encodeEnumerated; }
    return _cached_encoder_for_JoinArgument_joinSubset(value, elGetter);
}


/* eslint-enable */
