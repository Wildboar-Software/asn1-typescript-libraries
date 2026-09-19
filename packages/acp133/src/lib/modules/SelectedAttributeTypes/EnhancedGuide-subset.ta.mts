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
 * @summary EnhancedGuide_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnhancedGuide-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnhancedGuide_subset = INTEGER;

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: EnhancedGuide_subset = EnhancedGuide_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: EnhancedGuide_subset = EnhancedGuide_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: EnhancedGuide_subset = EnhancedGuide_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EnhancedGuide_subset: $.ASN1Decoder<EnhancedGuide_subset> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedGuide_subset
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnhancedGuide_subset (el: _Element): EnhancedGuide_subset {
    if (!_cached_decoder_for_EnhancedGuide_subset) { _cached_decoder_for_EnhancedGuide_subset = $._decodeInteger; }
    return _cached_decoder_for_EnhancedGuide_subset(el);
}

let _cached_encoder_for_EnhancedGuide_subset: $.ASN1Encoder<EnhancedGuide_subset> | null = null;

/**
 * @summary Encodes a(n) EnhancedGuide_subset into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedGuide_subset, encoded as an ASN.1 Element.
 */
export
function _encode_EnhancedGuide_subset (value: EnhancedGuide_subset, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnhancedGuide_subset) { _cached_encoder_for_EnhancedGuide_subset = $._encodeInteger; }
    return _cached_encoder_for_EnhancedGuide_subset(value, elGetter);
}


/* eslint-enable */
