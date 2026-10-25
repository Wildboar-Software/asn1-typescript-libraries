/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActionPerformed {
    activated = 1,
    deactivated = 2,
    alreadyActive = 3,
    alreadyInactive = 4,
    isActive = 5,
    isInactive = 6,
}

/**
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
type ActionPerformed = _enum_for_ActionPerformed;

/**
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
const ActionPerformed = _enum_for_ActionPerformed;

/**
 * @summary ActionPerformed_activated
 * @constant
 * @type {number}
 */
export
const ActionPerformed_activated = ActionPerformed.activated satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activated
 * @constant
 * @type {number}
 */
export
const activated = ActionPerformed.activated satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_deactivated
 * @constant
 * @type {number}
 */
export
const ActionPerformed_deactivated = ActionPerformed.deactivated satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivated
 * @constant
 * @type {number}
 */
export
const deactivated = ActionPerformed.deactivated satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyActive = ActionPerformed.alreadyActive satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyActive
 * @constant
 * @type {number}
 */
export
const alreadyActive = ActionPerformed.alreadyActive satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyInactive = ActionPerformed.alreadyInactive satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyInactive
 * @constant
 * @type {number}
 */
export
const alreadyInactive = ActionPerformed.alreadyInactive satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isActive = ActionPerformed.isActive satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isActive
 * @constant
 * @type {number}
 */
export
const isActive = ActionPerformed.isActive satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isInactive = ActionPerformed.isInactive satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isInactive
 * @constant
 * @type {number}
 */
export
const isInactive = ActionPerformed.isInactive satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActionPerformed = $._decodeEnumerated;
export const _encode_ActionPerformed = $._encodeEnumerated;


/* eslint-enable */
