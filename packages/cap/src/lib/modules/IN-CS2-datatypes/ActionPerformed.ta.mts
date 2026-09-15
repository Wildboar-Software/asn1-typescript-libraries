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
const ActionPerformed_activated: ActionPerformed = ActionPerformed.activated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activated
 * @constant
 * @type {number}
 */
export
const activated: ActionPerformed = ActionPerformed.activated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_deactivated
 * @constant
 * @type {number}
 */
export
const ActionPerformed_deactivated: ActionPerformed = ActionPerformed.deactivated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivated
 * @constant
 * @type {number}
 */
export
const deactivated: ActionPerformed = ActionPerformed.deactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyActive: ActionPerformed = ActionPerformed.alreadyActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyActive
 * @constant
 * @type {number}
 */
export
const alreadyActive: ActionPerformed = ActionPerformed.alreadyActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyInactive: ActionPerformed = ActionPerformed.alreadyInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyInactive
 * @constant
 * @type {number}
 */
export
const alreadyInactive: ActionPerformed = ActionPerformed.alreadyInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isActive: ActionPerformed = ActionPerformed.isActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isActive
 * @constant
 * @type {number}
 */
export
const isActive: ActionPerformed = ActionPerformed.isActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isInactive: ActionPerformed = ActionPerformed.isInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isInactive
 * @constant
 * @type {number}
 */
export
const isInactive: ActionPerformed = ActionPerformed.isInactive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActionPerformed = $._decodeEnumerated;
export const _encode_ActionPerformed = $._encodeEnumerated;


/* eslint-enable */
