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
 * @summary DfrObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DfrObjectClass {
    dfr_document = 0,
    dfr_root_group = 1,
    dfr_proper_group = 2,
    dfr_reference = 3,
    dfr_search_result_list = 4,
}

/**
 * @summary DfrObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DfrObjectClass = _enum_for_DfrObjectClass;

/**
 * @summary DfrObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DfrObjectClass = _enum_for_DfrObjectClass;

/**
 * @summary DfrObjectClass_dfr_document
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_document: DfrObjectClass = DfrObjectClass.dfr_document; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_document
 * @constant
 * @type {number}
 */
export
const dfr_document: DfrObjectClass = DfrObjectClass.dfr_document; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_root_group
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_root_group: DfrObjectClass = DfrObjectClass.dfr_root_group; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_root_group
 * @constant
 * @type {number}
 */
export
const dfr_root_group: DfrObjectClass = DfrObjectClass.dfr_root_group; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_proper_group
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_proper_group: DfrObjectClass = DfrObjectClass.dfr_proper_group; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_proper_group
 * @constant
 * @type {number}
 */
export
const dfr_proper_group: DfrObjectClass = DfrObjectClass.dfr_proper_group; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_reference
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_reference: DfrObjectClass = DfrObjectClass.dfr_reference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_reference
 * @constant
 * @type {number}
 */
export
const dfr_reference: DfrObjectClass = DfrObjectClass.dfr_reference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_search_result_list
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_search_result_list: DfrObjectClass = DfrObjectClass.dfr_search_result_list; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_search_result_list
 * @constant
 * @type {number}
 */
export
const dfr_search_result_list: DfrObjectClass = DfrObjectClass.dfr_search_result_list; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DfrObjectClass: $.ASN1Decoder<DfrObjectClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrObjectClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrObjectClass (el: _Element): DfrObjectClass {
    if (!_cached_decoder_for_DfrObjectClass) { _cached_decoder_for_DfrObjectClass = $._decodeEnumerated; }
    return _cached_decoder_for_DfrObjectClass(el);
}

let _cached_encoder_for_DfrObjectClass: $.ASN1Encoder<DfrObjectClass> | null = null;

/**
 * @summary Encodes a(n) DfrObjectClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrObjectClass, encoded as an ASN.1 Element.
 */
export
function _encode_DfrObjectClass (value: DfrObjectClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrObjectClass) { _cached_encoder_for_DfrObjectClass = $._encodeEnumerated; }
    return _cached_encoder_for_DfrObjectClass(value, elGetter);
}


/* eslint-enable */
