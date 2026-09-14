/* eslint-disable */
import {
    INTEGER,
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
 * @summary EE_State
 * @description
 *
 * Combined Event Enrollment state from Event Condition
 * `&ecState` and enrollment `&ackState`. Used in
 * ReportEventEnrollmentStatus, AlterEventEnrollment, and
 * alarm enrollment summaries. Mapping is ISO 9506-1:2003
 * §21.5.1.2.5. Disabled conditions do not notify.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5] [ISO 9506-2:2003 §21.7.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EE-State  ::=  INTEGER {
 *    disabled         (0),
 *    idle             (1),
 *    active           (2),
 *    activeNoAckA     (3),
 *    idleNoAckI       (4),
 *    idleNoAckA       (5),
 *    idleAcked        (6),
 *    activeAcked      (7),
 *    undefined        (8)
 *    }
 * ```
 */
export
type EE_State = INTEGER;

/**
 * @summary EE_State_disabled
 * @description
 *
 * Event Condition `&ecState` is `disabled`. Notifications
 * are not issued while disabled.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_disabled: EE_State = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_disabled
 * @description
 *
 * Short name of {@link EE_State_disabled}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const disabled: EE_State = EE_State_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idle
 * @description
 *
 * Condition is `idle` and `&aaRule` is `none` or `simple`
 * (ack not required for idle).
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_idle: EE_State = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idle
 * @description
 *
 * Short name of {@link EE_State_idle}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const idle: EE_State = EE_State_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_active
 * @description
 *
 * Condition is `active` and `&aaRule` is `none`.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_active: EE_State = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_active
 * @description
 *
 * Short name of {@link EE_State_active}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const active: EE_State = EE_State_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeNoAckA
 * @description
 *
 * Condition is `active` and `&ackState` is `noAckA`
 * (outstanding ack for the active transition). Used when
 * `&aaRule` is not `none`.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_activeNoAckA: EE_State = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeNoAckA
 * @description
 *
 * Short name of {@link EE_State_activeNoAckA}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const activeNoAckA: EE_State = EE_State_activeNoAckA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckI
 * @description
 *
 * Condition is `idle`, `&aaRule` is `ack-all`, and
 * `&ackState` is `noAckI` (outstanding ack for idle).
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_idleNoAckI: EE_State = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckI
 * @description
 *
 * Short name of {@link EE_State_idleNoAckI}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const idleNoAckI: EE_State = EE_State_idleNoAckI; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckA
 * @description
 *
 * Condition is `idle` and `&ackState` is `noAckA`. For
 * `&aaRule` `ack-active` or `ack-all`.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_idleNoAckA: EE_State = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckA
 * @description
 *
 * Short name of {@link EE_State_idleNoAckA}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const idleNoAckA: EE_State = EE_State_idleNoAckA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleAcked
 * @description
 *
 * Condition is `idle` and `&ackState` is `acked`. For
 * `&aaRule` `ack-active` or `ack-all`.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_idleAcked: EE_State = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleAcked
 * @description
 *
 * Short name of {@link EE_State_idleAcked}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const idleAcked: EE_State = EE_State_idleAcked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeAcked
 * @description
 *
 * Condition is `active` and `&ackState` is `acked`. Used
 * when `&aaRule` is not `none`.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_activeAcked: EE_State = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeAcked
 * @description
 *
 * Short name of {@link EE_State_activeAcked}.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const activeAcked: EE_State = EE_State_activeAcked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_undefined
 * @description
 *
 * Combined state cannot be determined (e.g. Event Condition
 * undefined after Domain deletion or AA loss, and
 * `&lastState` is used or unavailable). The short alias
 * `undefined` is omitted because it shadows the JavaScript
 * global.
 *
 * [ISO 9506-1:2003 §21.5.1.2.5]
 *
 * @constant
 * @type {number}
 */
export
const EE_State_undefined: EE_State = 8; /* LONG_NAMED_INTEGER_VALUE */
/* The compiler also emitted `export const undefined = EE_State_undefined`,
 * which shadows the JavaScript global and is omitted. Use EE_State_undefined. */
export const _decode_EE_State = $._decodeInteger;
export const _encode_EE_State = $._encodeInteger;


/* eslint-enable */
