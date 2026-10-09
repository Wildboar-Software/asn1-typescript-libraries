/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMHSPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMHSPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type MMHSPrecedence = INTEGER;

/**
 * @summary MMHSPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_deferred: MMHSPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: MMHSPrecedence = MMHSPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_routine: MMHSPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: MMHSPrecedence = MMHSPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_priority: MMHSPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: MMHSPrecedence = MMHSPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_immediate: MMHSPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: MMHSPrecedence = MMHSPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_flash: MMHSPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: MMHSPrecedence = MMHSPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override: MMHSPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: MMHSPrecedence = MMHSPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_ecp: MMHSPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: MMHSPrecedence = MMHSPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_critic: MMHSPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: MMHSPrecedence = MMHSPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override_2: MMHSPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: MMHSPrecedence = MMHSPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MMHSPrecedence = $._decodeInteger;
export const _encode_MMHSPrecedence = $._encodeInteger;


/* eslint-enable */
