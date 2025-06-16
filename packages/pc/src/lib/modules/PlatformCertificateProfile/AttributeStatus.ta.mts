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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary AttributeStatus
 * @description
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
 * @constant
 * @type {number}
 */
export
const AttributeStatus_added: AttributeStatus = AttributeStatus.added; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary added
 * @constant
 * @type {number}
 */
export
const added: AttributeStatus = AttributeStatus.added; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_modified
 * @constant
 * @type {number}
 */
export
const AttributeStatus_modified: AttributeStatus = AttributeStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @constant
 * @type {number}
 */
export
const modified: AttributeStatus = AttributeStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_removed
 * @constant
 * @type {number}
 */
export
const AttributeStatus_removed: AttributeStatus = AttributeStatus.removed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removed
 * @constant
 * @type {number}
 */
export
const removed: AttributeStatus = AttributeStatus.removed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AttributeStatus = $._decodeEnumerated;


export const _encode_AttributeStatus = $._encodeEnumerated;


/* eslint-enable */
