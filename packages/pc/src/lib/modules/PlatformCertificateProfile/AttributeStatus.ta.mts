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
 * @summary AttributeStatus
 * @description
 *
 * How a `ComponentIdentifier` or `Properties` entry relates to the
 * base certificate. MUST be used only in Delta Platform
 * Certificates. TCG Platform Certificate Profile v1.1 r19 §3.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_AttributeStatus {
    added = 0,
    modified = 1,
    removed = 2,
}

/**
 * @summary AttributeStatus
 * @description
 *
 * How a `ComponentIdentifier` or `Properties` entry relates to the
 * base certificate. MUST be used only in Delta Platform
 * Certificates. TCG Platform Certificate Profile v1.1 r19 §3.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```
 *
 * @enum {number}
 */
export
type AttributeStatus = _enum_for_AttributeStatus;

/**
 * @summary AttributeStatus
 * @description
 *
 * How a `ComponentIdentifier` or `Properties` entry relates to the
 * base certificate. MUST be used only in Delta Platform
 * Certificates. TCG Platform Certificate Profile v1.1 r19 §3.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```
 *
 * @enum {number}
 */
export
const AttributeStatus = _enum_for_AttributeStatus;

/**
 * @summary AttributeStatus_added
 * @description
 *
 * Entry was added relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_added: AttributeStatus = AttributeStatus.added; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary added
 * @description
 *
 * Entry was added relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const added: AttributeStatus = AttributeStatus.added; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_modified
 * @description
 *
 * Entry was modified relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_modified: AttributeStatus = AttributeStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @description
 *
 * Entry was modified relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const modified: AttributeStatus = AttributeStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_removed
 * @description
 *
 * Entry was removed relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_removed: AttributeStatus = AttributeStatus.removed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removed
 * @description
 *
 * Entry was removed relative to the base certificate. Delta-only. §3.1.6.
 *
 * @constant
 * @type {number}
 */
export
const removed: AttributeStatus = AttributeStatus.removed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AttributeStatus = $._decodeEnumerated;


export const _encode_AttributeStatus = $._encodeEnumerated;


/* eslint-enable */
