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
 * @summary EntryInformationSelection_read_selector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection-read-selector ::= ENUMERATED {
 *         attributes-only                 (0),
 *         attributes-and-content          (1),
 *         content-only                    (2),
 *         dor-to-attr-only                (3),
 *         attr-and-dor-to-content         (4),
 *         dor-to-content-only             (5),
 *         dor-to-entire-object            (6),
 *         attr-and-dor-to-entire-object   (7)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EntryInformationSelection_read_selector {
    attributes_only = 0,
    attributes_and_content = 1,
    content_only = 2,
    dor_to_attr_only = 3,
    attr_and_dor_to_content = 4,
    dor_to_content_only = 5,
    dor_to_entire_object = 6,
    attr_and_dor_to_entire_object = 7,
}

/**
 * @summary EntryInformationSelection_read_selector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection-read-selector ::= ENUMERATED {
 *         attributes-only                 (0),
 *         attributes-and-content          (1),
 *         content-only                    (2),
 *         dor-to-attr-only                (3),
 *         attr-and-dor-to-content         (4),
 *         dor-to-content-only             (5),
 *         dor-to-entire-object            (6),
 *         attr-and-dor-to-entire-object   (7)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type EntryInformationSelection_read_selector = _enum_for_EntryInformationSelection_read_selector;

/**
 * @summary EntryInformationSelection_read_selector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection-read-selector ::= ENUMERATED {
 *         attributes-only                 (0),
 *         attributes-and-content          (1),
 *         content-only                    (2),
 *         dor-to-attr-only                (3),
 *         attr-and-dor-to-content         (4),
 *         dor-to-content-only             (5),
 *         dor-to-entire-object            (6),
 *         attr-and-dor-to-entire-object   (7)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const EntryInformationSelection_read_selector = _enum_for_EntryInformationSelection_read_selector;

/**
 * @summary EntryInformationSelection_read_selector_attributes_only
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_attributes_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attributes_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attributes_only
 * @constant
 * @type {number}
 */
export
const attributes_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attributes_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_attributes_and_content
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_attributes_and_content: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attributes_and_content; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attributes_and_content
 * @constant
 * @type {number}
 */
export
const attributes_and_content: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attributes_and_content; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_content_only
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_content_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.content_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_only
 * @constant
 * @type {number}
 */
export
const content_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.content_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_dor_to_attr_only
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_dor_to_attr_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_attr_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dor_to_attr_only
 * @constant
 * @type {number}
 */
export
const dor_to_attr_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_attr_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_attr_and_dor_to_content
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_attr_and_dor_to_content: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attr_and_dor_to_content; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attr_and_dor_to_content
 * @constant
 * @type {number}
 */
export
const attr_and_dor_to_content: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attr_and_dor_to_content; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_dor_to_content_only
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_dor_to_content_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_content_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dor_to_content_only
 * @constant
 * @type {number}
 */
export
const dor_to_content_only: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_content_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_dor_to_entire_object
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_dor_to_entire_object: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_entire_object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dor_to_entire_object
 * @constant
 * @type {number}
 */
export
const dor_to_entire_object: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.dor_to_entire_object; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntryInformationSelection_read_selector_attr_and_dor_to_entire_object
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_read_selector_attr_and_dor_to_entire_object: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attr_and_dor_to_entire_object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attr_and_dor_to_entire_object
 * @constant
 * @type {number}
 */
export
const attr_and_dor_to_entire_object: EntryInformationSelection_read_selector = EntryInformationSelection_read_selector.attr_and_dor_to_entire_object; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EntryInformationSelection_read_selector = $._decodeEnumerated;
export const _encode_EntryInformationSelection_read_selector = $._encodeEnumerated;


/* eslint-enable */
