/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CintCause
 * @description
 *
 * Why ANF-CINT was invoked (ECMA-221 §6.3.1). Sent to the Originating
 * PINX in `cintLegInformation1` and to the Intercepted-to PINX in
 * `cintLegInformation2`. The named values are the interception causes
 * listed in ECMA-220 §6.2.2.2. Value 0 (`unknown`) has no ASN.1
 * comment and no procedure text. The constraint is 0..127; ECMA-221
 * does not define integers other than the named values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintCause  ::=  INTEGER {
 *     unknown(0),
 *     cintBnan(1), -- timeout in waiting on busy condition
 *     cintBus(2), -- busy user
 *     cintCug(3), -- closed user group rejection
 *     cintDnd(4), -- do not disturb activated
 *     cintIbd(5), -- incoming barred destination
 *     cintInn(6), -- invalid number
 *     cintMob1(7), -- mobile user location not known
 *     cintMob2(8), -- mobile user no longer registered
 *     cintMob3(9), -- mobile terminal not responding
 *     cintNcmp(10), -- no compatible destination
 *     cintNcong(11), -- network congestion
 *     cintNre(12), -- no reply (i.e. timeout during alerting)
 *     cintOos(13), -- called user out of service
 *     cintRrs(14), -- route restriction (calling user not authorized for
 *     -- the route)
 *     cintTbnan(15), -- timeout in wait on busy condition after transfer
 *     cintTnre(16), -- no reply after transfer (i.e. timeout during alerting
 *     -- after transfer
 *     cintTrans(17), -- upper limit of transit counter reached
 *     cintUpl(18), -- upper limit of number of diversions reached
 *     cintInvDiv(19), -- invalid call diversion destination
 *     cintHold(20) -- timeout after call hold
 * } (0..127)
 * ```
 */
export
type CintCause = INTEGER;

/**
 * @summary CintCause_unknown
 * @description
 *
 * Value 0. ECMA-221 §6.3.1 names it and gives no meaning.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_unknown: 0 = 0 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link CintCause_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown: 0 = CintCause_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBnan
 * @description
 *
 * Timeout while waiting on a busy condition (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintBnan: 1 = 1 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintBnan
 * @description Alias of {@link CintCause_cintBnan}.
 * @constant
 * @type {number}
 */
export
const cintBnan: 1 = CintCause_cintBnan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBus
 * @description
 *
 * Busy user (ECMA-221 §6.3.1; ECMA-220 §4.2.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 */
export
const CintCause_cintBus: 2 = 2 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintBus
 * @description Alias of {@link CintCause_cintBus}.
 * @constant
 * @type {number}
 */
export
const cintBus: 2 = CintCause_cintBus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintCug
 * @description
 *
 * Closed user group rejection (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintCug: 3 = 3 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintCug
 * @description Alias of {@link CintCause_cintCug}.
 * @constant
 * @type {number}
 */
export
const cintCug: 3 = CintCause_cintCug; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintDnd
 * @description
 *
 * Do not disturb is activated (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintDnd: 4 = 4 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintDnd
 * @description Alias of {@link CintCause_cintDnd}.
 * @constant
 * @type {number}
 */
export
const cintDnd: 4 = CintCause_cintDnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintIbd
 * @description
 *
 * Incoming calls are barred at the destination (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintIbd: 5 = 5 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintIbd
 * @description Alias of {@link CintCause_cintIbd}.
 * @constant
 * @type {number}
 */
export
const cintIbd: 5 = CintCause_cintIbd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInn
 * @description
 *
 * Invalid number (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintInn: 6 = 6 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintInn
 * @description Alias of {@link CintCause_cintInn}.
 * @constant
 * @type {number}
 */
export
const cintInn: 6 = CintCause_cintInn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob1
 * @description
 *
 * Mobile user location is not known (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintMob1: 7 = 7 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob1
 * @description Alias of {@link CintCause_cintMob1}.
 * @constant
 * @type {number}
 */
export
const cintMob1: 7 = CintCause_cintMob1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob2
 * @description
 *
 * Mobile user is no longer registered (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintMob2: 8 = 8 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob2
 * @description Alias of {@link CintCause_cintMob2}.
 * @constant
 * @type {number}
 */
export
const cintMob2: 8 = CintCause_cintMob2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob3
 * @description
 *
 * Mobile terminal is not responding (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintMob3: 9 = 9 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob3
 * @description Alias of {@link CintCause_cintMob3}.
 * @constant
 * @type {number}
 */
export
const cintMob3: 9 = CintCause_cintMob3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcmp
 * @description
 *
 * No compatible destination (ECMA-221 §6.3.1). ECMA-220 §6.2.2.2 says "no
 * compatible user at destination".
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 */
export
const CintCause_cintNcmp: 10 = 10 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintNcmp
 * @description Alias of {@link CintCause_cintNcmp}.
 * @constant
 * @type {number}
 */
export
const cintNcmp: 10 = CintCause_cintNcmp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcong
 * @description
 *
 * Network congestion (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintNcong: 11 = 11 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintNcong
 * @description Alias of {@link CintCause_cintNcong}.
 * @constant
 * @type {number}
 */
export
const cintNcong: 11 = CintCause_cintNcong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNre
 * @description
 *
 * No reply: timeout during alerting (ECMA-221 §6.3.1). Interception delayed
 * (ECMA-220 §4.2.8).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 */
export
const CintCause_cintNre: 12 = 12 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintNre
 * @description Alias of {@link CintCause_cintNre}.
 * @constant
 * @type {number}
 */
export
const cintNre: 12 = CintCause_cintNre; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintOos
 * @description
 *
 * Called user out of service (ECMA-221 §6.3.1). ECMA-220 §6.2.2.2 says "called
 * user access out of service".
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 */
export
const CintCause_cintOos: 13 = 13 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintOos
 * @description Alias of {@link CintCause_cintOos}.
 * @constant
 * @type {number}
 */
export
const cintOos: 13 = CintCause_cintOos; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintRrs
 * @description
 *
 * Route restriction: the calling user is not authorized for the route (ECMA-221
 * §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintRrs: 14 = 14 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintRrs
 * @description Alias of {@link CintCause_cintRrs}.
 * @constant
 * @type {number}
 */
export
const cintRrs: 14 = CintCause_cintRrs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTbnan
 * @description
 *
 * Timeout while waiting on a busy condition after transfer (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintTbnan: 15 = 15 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintTbnan
 * @description Alias of {@link CintCause_cintTbnan}.
 * @constant
 * @type {number}
 */
export
const cintTbnan: 15 = CintCause_cintTbnan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTnre
 * @description
 *
 * No reply after transfer: timeout during alerting after transfer (ECMA-221
 * §6.3.1). The ASN.1 comment omits the closing parenthesis.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintTnre: 16 = 16 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintTnre
 * @description Alias of {@link CintCause_cintTnre}.
 * @constant
 * @type {number}
 */
export
const cintTnre: 16 = CintCause_cintTnre; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTrans
 * @description
 *
 * Upper limit of the transit counter was reached (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintTrans: 17 = 17 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintTrans
 * @description Alias of {@link CintCause_cintTrans}.
 * @constant
 * @type {number}
 */
export
const cintTrans: 17 = CintCause_cintTrans; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintUpl
 * @description
 *
 * Upper limit of the number of diversions was reached (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintUpl: 18 = 18 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintUpl
 * @description Alias of {@link CintCause_cintUpl}.
 * @constant
 * @type {number}
 */
export
const cintUpl: 18 = CintCause_cintUpl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInvDiv
 * @description
 *
 * Invalid call-diversion destination (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintInvDiv: 19 = 19 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintInvDiv
 * @description Alias of {@link CintCause_cintInvDiv}.
 * @constant
 * @type {number}
 */
export
const cintInvDiv: 19 = CintCause_cintInvDiv; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintHold
 * @description
 *
 * Timeout after call hold (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const CintCause_cintHold: 20 = 20 satisfies CintCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintHold
 * @description Alias of {@link CintCause_cintHold}.
 * @constant
 * @type {number}
 */
export
const cintHold: 20 = CintCause_cintHold; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CintCause = (el: _Element): CintCause => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 127n) : (value < 0 || value > 127))) {
        throw new ASN1OverflowError("CintCause violates INTEGER constraint");
    }
    return value;
};

export
const _encode_CintCause: $.ASN1Encoder<CintCause> = $._encodeInteger;

/* eslint-enable */
