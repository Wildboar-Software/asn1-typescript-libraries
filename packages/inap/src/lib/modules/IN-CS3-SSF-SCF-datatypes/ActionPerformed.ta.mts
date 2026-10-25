/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
 *   isActive(5), isInactive(6), tDPunknown(7)}
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
    tDPunknown = 7,
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
 *   isActive(5), isInactive(6), tDPunknown(7)}
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
 *   isActive(5), isInactive(6), tDPunknown(7)}
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

/**
 * @summary ActionPerformed_tDPunknown
 * @constant
 * @type {number}
 */
export
const ActionPerformed_tDPunknown = ActionPerformed.tDPunknown satisfies ActionPerformed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDPunknown
 * @constant
 * @type {number}
 */
export
const tDPunknown = ActionPerformed.tDPunknown satisfies ActionPerformed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ActionPerformed(el: _Element): ActionPerformed {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ActionPerformed.activated: return ActionPerformed.activated;
        case ActionPerformed.deactivated: return ActionPerformed.deactivated;
        case ActionPerformed.alreadyActive: return ActionPerformed.alreadyActive;
        case ActionPerformed.alreadyInactive: return ActionPerformed.alreadyInactive;
        case ActionPerformed.isActive: return ActionPerformed.isActive;
        case ActionPerformed.isInactive: return ActionPerformed.isInactive;
        case ActionPerformed.tDPunknown: return ActionPerformed.tDPunknown;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ActionPerformed.",
                el,
            );
    }
}

export
const _encode_ActionPerformed: $.ASN1Encoder<ActionPerformed> = $._encodeEnumerated as $.ASN1Encoder<ActionPerformed>;

/* eslint-enable */
