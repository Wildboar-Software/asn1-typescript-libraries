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
 * @summary HierarchySelections
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HierarchySelections  ::=  BIT STRING {
 *   self                  (0),
 *   children              (1),
 *   parent                (2),
 *   hierarchy             (3),
 *   top                   (4),
 *   subtree               (5),
 *   siblings              (6),
 *   siblingChildren       (7),
 *   siblingSubtree        (8),
 *   all                   (9) }
 * ```
 */
export
type HierarchySelections = BIT_STRING;

/**
 * @summary HierarchySelections_self
 * @constant
 */
export
const HierarchySelections_self: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary self
 * @constant
 */
export
const self: number = HierarchySelections_self; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_children
 * @constant
 */
export
const HierarchySelections_children: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary children
 * @constant
 */
export
const children: number = HierarchySelections_children; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_parent
 * @constant
 */
export
const HierarchySelections_parent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary parent
 * @constant
 */
export
const parent: number = HierarchySelections_parent; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_hierarchy
 * @constant
 */
export
const HierarchySelections_hierarchy: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hierarchy
 * @constant
 */
export
const hierarchy: number = HierarchySelections_hierarchy; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_top
 * @constant
 */
export
const HierarchySelections_top: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary top
 * @constant
 */
export
const top: number = HierarchySelections_top; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_subtree
 * @constant
 */
export
const HierarchySelections_subtree: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subtree
 * @constant
 */
export
const subtree: number = HierarchySelections_subtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblings
 * @constant
 */
export
const HierarchySelections_siblings: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary siblings
 * @constant
 */
export
const siblings: number = HierarchySelections_siblings; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingChildren
 * @constant
 */
export
const HierarchySelections_siblingChildren: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary siblingChildren
 * @constant
 */
export
const siblingChildren: number = HierarchySelections_siblingChildren; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingSubtree
 * @constant
 */
export
const HierarchySelections_siblingSubtree: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary siblingSubtree
 * @constant
 */
export
const siblingSubtree: number = HierarchySelections_siblingSubtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_all
 * @constant
 */
export
const HierarchySelections_all: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary all
 * @constant
 */
export
const all: number = HierarchySelections_all; /* SHORT_NAMED_BIT */

let _cached_decoder_for_HierarchySelections: $.ASN1Decoder<HierarchySelections> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HierarchySelections
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HierarchySelections (el: _Element): HierarchySelections {
    if (!_cached_decoder_for_HierarchySelections) { _cached_decoder_for_HierarchySelections = $._decodeBitString; }
    return _cached_decoder_for_HierarchySelections(el);
}

let _cached_encoder_for_HierarchySelections: $.ASN1Encoder<HierarchySelections> | null = null;

/**
 * @summary Encodes a(n) HierarchySelections into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchySelections, encoded as an ASN.1 Element.
 */
export
function _encode_HierarchySelections (value: HierarchySelections, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HierarchySelections) { _cached_encoder_for_HierarchySelections = $._encodeBitString; }
    return _cached_encoder_for_HierarchySelections(value, elGetter);
}


/* eslint-enable */
