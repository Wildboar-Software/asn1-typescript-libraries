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
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NameProblem {
    invalid_upi = 1,
    invalid_path_name = 2,
    ambiguous_path_name = 3,
    inappropriate_object_class = 4,
}

/**
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NameProblem = _enum_for_NameProblem;

/**
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NameProblem = _enum_for_NameProblem;

/**
 * @summary NameProblem_invalid_upi
 * @constant
 * @type {number}
 */
export
const NameProblem_invalid_upi: NameProblem = NameProblem.invalid_upi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_upi
 * @constant
 * @type {number}
 */
export
const invalid_upi: NameProblem = NameProblem.invalid_upi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_invalid_path_name
 * @constant
 * @type {number}
 */
export
const NameProblem_invalid_path_name: NameProblem = NameProblem.invalid_path_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_path_name
 * @constant
 * @type {number}
 */
export
const invalid_path_name: NameProblem = NameProblem.invalid_path_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_ambiguous_path_name
 * @constant
 * @type {number}
 */
export
const NameProblem_ambiguous_path_name: NameProblem = NameProblem.ambiguous_path_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ambiguous_path_name
 * @constant
 * @type {number}
 */
export
const ambiguous_path_name: NameProblem = NameProblem.ambiguous_path_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const NameProblem_inappropriate_object_class: NameProblem = NameProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: NameProblem = NameProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NameProblem: $.ASN1Decoder<NameProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameProblem (el: _Element): NameProblem {
    if (!_cached_decoder_for_NameProblem) { _cached_decoder_for_NameProblem = $._decodeEnumerated; }
    return _cached_decoder_for_NameProblem(el);
}

let _cached_encoder_for_NameProblem: $.ASN1Encoder<NameProblem> | null = null;

/**
 * @summary Encodes a(n) NameProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameProblem, encoded as an ASN.1 Element.
 */
export
function _encode_NameProblem (value: NameProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameProblem) { _cached_encoder_for_NameProblem = $._encodeEnumerated; }
    return _cached_encoder_for_NameProblem(value, elGetter);
}


/* eslint-enable */
