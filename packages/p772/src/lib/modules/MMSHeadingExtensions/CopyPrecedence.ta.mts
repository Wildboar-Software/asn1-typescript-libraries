/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CopyPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CopyPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type CopyPrecedence = INTEGER;

/**
 * @summary CopyPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_deferred: CopyPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: CopyPrecedence = CopyPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_routine: CopyPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: CopyPrecedence = CopyPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_priority: CopyPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: CopyPrecedence = CopyPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_immediate: CopyPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: CopyPrecedence = CopyPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_flash: CopyPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: CopyPrecedence = CopyPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override: CopyPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: CopyPrecedence = CopyPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_ecp: CopyPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: CopyPrecedence = CopyPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_critic: CopyPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: CopyPrecedence = CopyPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override_2: CopyPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: CopyPrecedence = CopyPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CopyPrecedence = $._decodeInteger;
export const _encode_CopyPrecedence = $._encodeInteger;

/* eslint-enable */
