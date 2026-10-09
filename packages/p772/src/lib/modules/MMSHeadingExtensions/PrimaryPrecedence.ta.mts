/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrimaryPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type PrimaryPrecedence = INTEGER;

/**
 * @summary PrimaryPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_deferred: PrimaryPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: PrimaryPrecedence = PrimaryPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_routine: PrimaryPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: PrimaryPrecedence = PrimaryPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_priority: PrimaryPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: PrimaryPrecedence = PrimaryPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_immediate: PrimaryPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: PrimaryPrecedence = PrimaryPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_flash: PrimaryPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: PrimaryPrecedence = PrimaryPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override: PrimaryPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: PrimaryPrecedence = PrimaryPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_ecp: PrimaryPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: PrimaryPrecedence = PrimaryPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_critic: PrimaryPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: PrimaryPrecedence = PrimaryPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override_2: PrimaryPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: PrimaryPrecedence = PrimaryPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PrimaryPrecedence = $._decodeInteger;
export const _encode_PrimaryPrecedence = $._encodeInteger;

/* eslint-enable */
