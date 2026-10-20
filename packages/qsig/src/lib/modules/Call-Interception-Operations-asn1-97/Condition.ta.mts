/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Condition
 * @description
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
 * @constant
 * @type {number}
 */
export
const Condition_unknown: Condition = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_unknown
 * @constant
 * @type {number}
 */
export
const unknown: Condition = Condition_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintBus
 * @constant
 * @type {number}
 */
export
const Condition_cintBus: Condition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintBus
 * @constant
 * @type {number}
 */
export
const cintBus: Condition = Condition_cintBus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintCug
 * @constant
 * @type {number}
 */
export
const Condition_cintCug: Condition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintCug
 * @constant
 * @type {number}
 */
export
const cintCug: Condition = Condition_cintCug; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintDnd
 * @constant
 * @type {number}
 */
export
const Condition_cintDnd: Condition = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintDnd
 * @constant
 * @type {number}
 */
export
const cintDnd: Condition = Condition_cintDnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintIbd
 * @constant
 * @type {number}
 */
export
const Condition_cintIbd: Condition = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintIbd
 * @constant
 * @type {number}
 */
export
const cintIbd: Condition = Condition_cintIbd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInn
 * @constant
 * @type {number}
 */
export
const Condition_cintInn: Condition = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInn
 * @constant
 * @type {number}
 */
export
const cintInn: Condition = Condition_cintInn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob1
 * @constant
 * @type {number}
 */
export
const Condition_cintMob1: Condition = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob1
 * @constant
 * @type {number}
 */
export
const cintMob1: Condition = Condition_cintMob1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob2
 * @constant
 * @type {number}
 */
export
const Condition_cintMob2: Condition = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob2
 * @constant
 * @type {number}
 */
export
const cintMob2: Condition = Condition_cintMob2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob3
 * @constant
 * @type {number}
 */
export
const Condition_cintMob3: Condition = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintMob3
 * @constant
 * @type {number}
 */
export
const cintMob3: Condition = Condition_cintMob3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcmp
 * @constant
 * @type {number}
 */
export
const Condition_cintNcmp: Condition = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcmp
 * @constant
 * @type {number}
 */
export
const cintNcmp: Condition = Condition_cintNcmp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcong
 * @constant
 * @type {number}
 */
export
const Condition_cintNcong: Condition = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintNcong
 * @constant
 * @type {number}
 */
export
const cintNcong: Condition = Condition_cintNcong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintOos
 * @constant
 * @type {number}
 */
export
const Condition_cintOos: Condition = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintOos
 * @constant
 * @type {number}
 */
export
const cintOos: Condition = Condition_cintOos; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintRrs
 * @constant
 * @type {number}
 */
export
const Condition_cintRrs: Condition = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintRrs
 * @constant
 * @type {number}
 */
export
const cintRrs: Condition = Condition_cintRrs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintTrans
 * @constant
 * @type {number}
 */
export
const Condition_cintTrans: Condition = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintTrans
 * @constant
 * @type {number}
 */
export
const cintTrans: Condition = Condition_cintTrans; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintUpl
 * @constant
 * @type {number}
 */
export
const Condition_cintUpl: Condition = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintUpl
 * @constant
 * @type {number}
 */
export
const cintUpl: Condition = Condition_cintUpl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInvDiv
 * @constant
 * @type {number}
 */
export
const Condition_cintInvDiv: Condition = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Condition_cintInvDiv
 * @constant
 * @type {number}
 */
export
const cintInvDiv: Condition = Condition_cintInvDiv; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Condition: $.ASN1Decoder<Condition> = $._decodeInteger;

export
const _encode_Condition: $.ASN1Encoder<Condition> = $._encodeInteger;

/* eslint-enable */
