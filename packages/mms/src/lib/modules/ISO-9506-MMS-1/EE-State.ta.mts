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
 * @constant
 * @type {number}
 */
export
const EE_State_disabled: EE_State = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_disabled
 * @constant
 * @type {number}
 */
export
const disabled: EE_State = EE_State_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idle
 * @constant
 * @type {number}
 */
export
const EE_State_idle: EE_State = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idle
 * @constant
 * @type {number}
 */
export
const idle: EE_State = EE_State_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_active
 * @constant
 * @type {number}
 */
export
const EE_State_active: EE_State = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_active
 * @constant
 * @type {number}
 */
export
const active: EE_State = EE_State_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeNoAckA
 * @constant
 * @type {number}
 */
export
const EE_State_activeNoAckA: EE_State = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeNoAckA
 * @constant
 * @type {number}
 */
export
const activeNoAckA: EE_State = EE_State_activeNoAckA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckI
 * @constant
 * @type {number}
 */
export
const EE_State_idleNoAckI: EE_State = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckI
 * @constant
 * @type {number}
 */
export
const idleNoAckI: EE_State = EE_State_idleNoAckI; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckA
 * @constant
 * @type {number}
 */
export
const EE_State_idleNoAckA: EE_State = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleNoAckA
 * @constant
 * @type {number}
 */
export
const idleNoAckA: EE_State = EE_State_idleNoAckA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleAcked
 * @constant
 * @type {number}
 */
export
const EE_State_idleAcked: EE_State = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_idleAcked
 * @constant
 * @type {number}
 */
export
const idleAcked: EE_State = EE_State_idleAcked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeAcked
 * @constant
 * @type {number}
 */
export
const EE_State_activeAcked: EE_State = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_activeAcked
 * @constant
 * @type {number}
 */
export
const activeAcked: EE_State = EE_State_activeAcked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_State_undefined
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
