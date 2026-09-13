/* eslint-disable */
import {
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
export const _decode_VersionManagementProblem = $._decodeEnumerated;
export const _encode_VersionManagementProblem = $._encodeEnumerated;


/* eslint-enable */
