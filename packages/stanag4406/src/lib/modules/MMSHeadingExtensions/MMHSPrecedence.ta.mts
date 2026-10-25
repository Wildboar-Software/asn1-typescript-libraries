/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMHSPrecedence
 * @description
 * 
 * Military precedence of a message. Primary precedence is end-to-end
 * information and also selects the MTS grade of delivery. Copy precedence uses
 * the same scale but does not affect MM-MTS handling, and for each message must
 * be equal to or lower than the primary precedence. The civil importance
 * indication is a separate element (B.35).
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
 * which Annex A1.8 does not assign. STANAG 4406 (Ed. 2), Annex A, A1.8, A1.9,
 * B.35, B.101, and B.102.
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
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_deferred: 0 = 0 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_deferred
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const deferred: 0 = MMHSPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_routine: 1 = 1 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const routine: 1 = MMHSPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_priority: 2 = 2 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const priority: 2 = MMHSPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_immediate: 3 = 3 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const immediate: 3 = MMHSPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_flash: 4 = 4 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const flash: 4 = MMHSPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override: 5 = 5 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const override: 5 = MMHSPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_ecp: 16 = 16 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const ecp: 16 = MMHSPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_critic: 17 = 17 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const critic: 17 = MMHSPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override_2: 18 = 18 satisfies MMHSPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const override_2: 18 = MMHSPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MMHSPrecedence: $.ASN1Decoder<MMHSPrecedence> = $._decodeInteger;
export const _encode_MMHSPrecedence: $.ASN1Encoder<MMHSPrecedence> = $._encodeInteger;


/* eslint-enable */
