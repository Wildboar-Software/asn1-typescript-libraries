/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrimaryPrecedence
 * @description
 * 
 * The same six NATO precedence levels as `MMHSPrecedence`, for the primary
 * (action) recipients. The heading extension itself is typed as
 * `MMHSPrecedence`. The originating domain always includes that extension for
 * action addressees.
 *
 * Override maps to MTS urgent with qualifier high. Flash maps to urgent with
 * qualifier low. Immediate maps to normal with qualifier high. Priority maps to
 * normal with qualifier low. Routine maps to non-urgent with qualifier high.
 * Deferred maps to non-urgent with qualifier low. Without the qualifier,
 * deferred and routine are non-urgent, priority and immediate are normal, and
 * flash and override are urgent. The qualifier is not conveyed between nations
 * or into civilian domains. Integers 0 to 15 are reserved for NATO; 16 to 31
 * are reserved for national use. Handling of an unknown precedence is local
 * policy.
 *
 * Edition 2 names only integers 0 to 5. This module also names 16, 17, and 18,
 * which Annex A1.8 does not assign. STANAG 4406 (Ed. 2), Annex A, A1.8 and
 * B.101.
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
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_deferred = 0 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_deferred
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const deferred = PrimaryPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_routine = 1 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const routine = PrimaryPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_priority = 2 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const priority = PrimaryPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_immediate = 3 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const immediate = PrimaryPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_flash = 4 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const flash = PrimaryPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override = 5 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const override = PrimaryPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_ecp = 16 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const ecp = PrimaryPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_critic = 17 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const critic = PrimaryPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override_2 = 18 satisfies PrimaryPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const override_2 = PrimaryPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PrimaryPrecedence: $.ASN1Decoder<PrimaryPrecedence> = $._decodeInteger;
export const _encode_PrimaryPrecedence: $.ASN1Encoder<PrimaryPrecedence> = $._encodeInteger;


/* eslint-enable */
