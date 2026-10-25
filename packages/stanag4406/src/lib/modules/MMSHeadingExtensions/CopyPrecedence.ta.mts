/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CopyPrecedence
 * @description
 * 
 * The same scale as `MMHSPrecedence`, for copy (information) recipients. The
 * heading extension itself is typed as `MMHSPrecedence`. It must be equal to or
 * lower than the primary precedence of that message, and it does not affect
 * MM-MTS handling. The originating domain includes the extension for every
 * information addressee.
 *
 * Edition 2 names only integers 0 to 5. This module also names 16, 17, and 18,
 * which Annex A1.8 does not assign. STANAG 4406 (Ed. 2), Annex A, A1.9 and
 * B.102.
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
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_deferred = 0 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_deferred
 * @description
 *
 * Lowest of the six NATO precedence levels (integer 0). Maps to MTS non-urgent,
 * priority-level qualifier low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const deferred = CopyPrecedence_deferred satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_routine = 1 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @description
 *
 * NATO precedence (integer 1). Maps to MTS non-urgent, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const routine = CopyPrecedence_routine satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_priority = 2 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @description
 *
 * NATO precedence (integer 2). The civil IPMS importance indication is a
 * separate element (B.35). Maps to MTS normal, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const priority = CopyPrecedence_priority satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_immediate = 3 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @description
 *
 * NATO precedence (integer 3). Maps to MTS normal, priority-level qualifier
 * high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const immediate = CopyPrecedence_immediate satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_flash = 4 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @description
 *
 * NATO precedence (integer 4). Maps to MTS urgent, priority-level qualifier
 * low. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const flash = CopyPrecedence_flash satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override = 5 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @description
 *
 * Highest of the six NATO precedence levels (integer 5). Maps to MTS urgent,
 * priority-level qualifier high. STANAG 4406 (Ed. 2), Annex A, B.101 and A1.8.
 * @constant
 * @type {number}
 */
export
const override = CopyPrecedence_override satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_ecp = 16 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @description
 *
 * Integer 16. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const ecp = CopyPrecedence_ecp satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_critic = 17 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @description
 *
 * Integer 17. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const critic = CopyPrecedence_critic satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override_2 = 18 satisfies CopyPrecedence; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @description
 *
 * Integer 18. Annex A1.8 reserves 16 to 31 for national use and does not assign
 * this name. STANAG 4406 (Ed. 2) does not define how a recipient treats it.
 * @constant
 * @type {number}
 */
export
const override_2 = CopyPrecedence_override_2 satisfies CopyPrecedence; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CopyPrecedence: $.ASN1Decoder<CopyPrecedence> = $._decodeInteger;
export const _encode_CopyPrecedence: $.ASN1Encoder<CopyPrecedence> = $._encodeInteger;


/* eslint-enable */
