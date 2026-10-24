/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Condition
 * @description
 *
 * Failure cause carried by `cintCondition` so a preceding PINX may
 * invoke interception immediate (ECMA-221 §6.3.1, §6.6.1). Subset of
 * `CintCause`: `cintBnan`, `cintNre`, `cintTbnan`, `cintTnre`, and
 * `cintHold` are not in this integer. ECMA-221 does not explain the
 * omission. Constrained to 0..127; unnamed values are not defined.
 * `unknown` (0) has no ASN.1 comment.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Condition  ::=  INTEGER {
 *     unknown(0),
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
 *     cintOos(13), -- called user out of service
 *     cintRrs(14), -- route restriction (calling user not authorized for
 *     -- the route
 *     cintTrans(17), -- upper limit of transit counter reached
 *     cintUpl(18), -- upper limit of number of diversions
 *     -- reached
 *     cintInvDiv(19) -- invalid call diversion destination
 * } (0..127)
 * ```
 */
export
type Condition = INTEGER;

/**
 * @summary Condition_unknown
 * @description
 *
 * Value 0. ECMA-221 §6.3.1 names it and gives no meaning.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_unknown: Condition = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link Condition_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown: Condition = Condition_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintBus
 * @description
 *
 * Busy user (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintBus: Condition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintBus
 * @description Alias of {@link Condition_cintBus}.
 * @constant
 * @type {number}
 */
export
const cintBus: Condition = Condition_cintBus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintCug
 * @description
 *
 * Closed user group rejection (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintCug: Condition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintCug
 * @description Alias of {@link Condition_cintCug}.
 * @constant
 * @type {number}
 */
export
const cintCug: Condition = Condition_cintCug; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintDnd
 * @description
 *
 * Do not disturb is activated (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintDnd: Condition = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintDnd
 * @description Alias of {@link Condition_cintDnd}.
 * @constant
 * @type {number}
 */
export
const cintDnd: Condition = Condition_cintDnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintIbd
 * @description
 *
 * Incoming calls are barred at the destination (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintIbd: Condition = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintIbd
 * @description Alias of {@link Condition_cintIbd}.
 * @constant
 * @type {number}
 */
export
const cintIbd: Condition = Condition_cintIbd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInn
 * @description
 *
 * Invalid number (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintInn: Condition = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintInn
 * @description Alias of {@link Condition_cintInn}.
 * @constant
 * @type {number}
 */
export
const cintInn: Condition = Condition_cintInn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob1
 * @description
 *
 * Mobile user location is not known (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintMob1: Condition = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob1
 * @description Alias of {@link Condition_cintMob1}.
 * @constant
 * @type {number}
 */
export
const cintMob1: Condition = Condition_cintMob1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob2
 * @description
 *
 * Mobile user is no longer registered (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintMob2: Condition = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob2
 * @description Alias of {@link Condition_cintMob2}.
 * @constant
 * @type {number}
 */
export
const cintMob2: Condition = Condition_cintMob2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob3
 * @description
 *
 * Mobile terminal is not responding (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintMob3: Condition = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintMob3
 * @description Alias of {@link Condition_cintMob3}.
 * @constant
 * @type {number}
 */
export
const cintMob3: Condition = Condition_cintMob3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcmp
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
const Condition_cintNcmp: Condition = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintNcmp
 * @description Alias of {@link Condition_cintNcmp}.
 * @constant
 * @type {number}
 */
export
const cintNcmp: Condition = Condition_cintNcmp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcong
 * @description
 *
 * Network congestion (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintNcong: Condition = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintNcong
 * @description Alias of {@link Condition_cintNcong}.
 * @constant
 * @type {number}
 */
export
const cintNcong: Condition = Condition_cintNcong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintOos
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
const Condition_cintOos: Condition = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintOos
 * @description Alias of {@link Condition_cintOos}.
 * @constant
 * @type {number}
 */
export
const cintOos: Condition = Condition_cintOos; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintRrs
 * @description
 *
 * Route restriction: the calling user is not authorized for the route (ECMA-221
 * §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintRrs: Condition = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintRrs
 * @description Alias of {@link Condition_cintRrs}.
 * @constant
 * @type {number}
 */
export
const cintRrs: Condition = Condition_cintRrs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintTrans
 * @description
 *
 * Upper limit of the transit counter was reached (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintTrans: Condition = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintTrans
 * @description Alias of {@link Condition_cintTrans}.
 * @constant
 * @type {number}
 */
export
const cintTrans: Condition = Condition_cintTrans; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintUpl
 * @description
 *
 * Upper limit of the number of diversions was reached (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintUpl: Condition = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintUpl
 * @description Alias of {@link Condition_cintUpl}.
 * @constant
 * @type {number}
 */
export
const cintUpl: Condition = Condition_cintUpl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInvDiv
 * @description
 *
 * Invalid call-diversion destination (ECMA-221 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 */
export
const Condition_cintInvDiv: Condition = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cintInvDiv
 * @description Alias of {@link Condition_cintInvDiv}.
 * @constant
 * @type {number}
 */
export
const cintInvDiv: Condition = Condition_cintInvDiv; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Condition = (el: _Element): Condition => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 127n) : (value < 0 || value > 127))) {
        throw new ASN1OverflowError("Condition violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Condition: $.ASN1Encoder<Condition> = $._encodeInteger;

/* eslint-enable */
