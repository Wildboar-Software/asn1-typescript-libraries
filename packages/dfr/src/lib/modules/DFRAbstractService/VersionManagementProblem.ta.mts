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
 * @summary VersionManagementProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionManagementProblem  ::=  ENUMERATED {
 *       inappropriate-object-class                (1), -- not a DFR-Document
 *       belongs-to-another-conceptual-document    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VersionManagementProblem {
    inappropriate_object_class = 1,
    belongs_to_another_conceptual_document = 2,
}

/**
 * @summary VersionManagementProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionManagementProblem  ::=  ENUMERATED {
 *       inappropriate-object-class                (1), -- not a DFR-Document
 *       belongs-to-another-conceptual-document    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VersionManagementProblem = _enum_for_VersionManagementProblem;

/**
 * @summary VersionManagementProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionManagementProblem  ::=  ENUMERATED {
 *       inappropriate-object-class                (1), -- not a DFR-Document
 *       belongs-to-another-conceptual-document    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VersionManagementProblem = _enum_for_VersionManagementProblem;

/**
 * @summary VersionManagementProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const VersionManagementProblem_inappropriate_object_class: VersionManagementProblem = VersionManagementProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: VersionManagementProblem = VersionManagementProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VersionManagementProblem_belongs_to_another_conceptual_document
 * @constant
 * @type {number}
 */
export
const VersionManagementProblem_belongs_to_another_conceptual_document: VersionManagementProblem = VersionManagementProblem.belongs_to_another_conceptual_document; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary belongs_to_another_conceptual_document
 * @constant
 * @type {number}
 */
export
const belongs_to_another_conceptual_document: VersionManagementProblem = VersionManagementProblem.belongs_to_another_conceptual_document; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VersionManagementProblem: $.ASN1Decoder<VersionManagementProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VersionManagementProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VersionManagementProblem (el: _Element): VersionManagementProblem {
    if (!_cached_decoder_for_VersionManagementProblem) { _cached_decoder_for_VersionManagementProblem = $._decodeEnumerated; }
    return _cached_decoder_for_VersionManagementProblem(el);
}

let _cached_encoder_for_VersionManagementProblem: $.ASN1Encoder<VersionManagementProblem> | null = null;

/**
 * @summary Encodes a(n) VersionManagementProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionManagementProblem, encoded as an ASN.1 Element.
 */
export
function _encode_VersionManagementProblem (value: VersionManagementProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VersionManagementProblem) { _cached_encoder_for_VersionManagementProblem = $._encodeEnumerated; }
    return _cached_encoder_for_VersionManagementProblem(value, elGetter);
}


/* eslint-enable */
