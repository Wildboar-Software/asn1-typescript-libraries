/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CintCause
 * @description
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
 * @constant
 * @type {number}
 */
export
const CintCause_unknown: CintCause = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_unknown
 * @constant
 * @type {number}
 */
export
const unknown: CintCause = CintCause_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBnan
 * @constant
 * @type {number}
 */
export
const CintCause_cintBnan: CintCause = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBnan
 * @constant
 * @type {number}
 */
export
const cintBnan: CintCause = CintCause_cintBnan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBus
 * @constant
 * @type {number}
 */
export
const CintCause_cintBus: CintCause = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintBus
 * @constant
 * @type {number}
 */
export
const cintBus: CintCause = CintCause_cintBus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintCug
 * @constant
 * @type {number}
 */
export
const CintCause_cintCug: CintCause = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintCug
 * @constant
 * @type {number}
 */
export
const cintCug: CintCause = CintCause_cintCug; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintDnd
 * @constant
 * @type {number}
 */
export
const CintCause_cintDnd: CintCause = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintDnd
 * @constant
 * @type {number}
 */
export
const cintDnd: CintCause = CintCause_cintDnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintIbd
 * @constant
 * @type {number}
 */
export
const CintCause_cintIbd: CintCause = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintIbd
 * @constant
 * @type {number}
 */
export
const cintIbd: CintCause = CintCause_cintIbd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInn
 * @constant
 * @type {number}
 */
export
const CintCause_cintInn: CintCause = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInn
 * @constant
 * @type {number}
 */
export
const cintInn: CintCause = CintCause_cintInn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob1
 * @constant
 * @type {number}
 */
export
const CintCause_cintMob1: CintCause = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob1
 * @constant
 * @type {number}
 */
export
const cintMob1: CintCause = CintCause_cintMob1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob2
 * @constant
 * @type {number}
 */
export
const CintCause_cintMob2: CintCause = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob2
 * @constant
 * @type {number}
 */
export
const cintMob2: CintCause = CintCause_cintMob2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob3
 * @constant
 * @type {number}
 */
export
const CintCause_cintMob3: CintCause = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintMob3
 * @constant
 * @type {number}
 */
export
const cintMob3: CintCause = CintCause_cintMob3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcmp
 * @constant
 * @type {number}
 */
export
const CintCause_cintNcmp: CintCause = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcmp
 * @constant
 * @type {number}
 */
export
const cintNcmp: CintCause = CintCause_cintNcmp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcong
 * @constant
 * @type {number}
 */
export
const CintCause_cintNcong: CintCause = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNcong
 * @constant
 * @type {number}
 */
export
const cintNcong: CintCause = CintCause_cintNcong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNre
 * @constant
 * @type {number}
 */
export
const CintCause_cintNre: CintCause = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintNre
 * @constant
 * @type {number}
 */
export
const cintNre: CintCause = CintCause_cintNre; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintOos
 * @constant
 * @type {number}
 */
export
const CintCause_cintOos: CintCause = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintOos
 * @constant
 * @type {number}
 */
export
const cintOos: CintCause = CintCause_cintOos; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintRrs
 * @constant
 * @type {number}
 */
export
const CintCause_cintRrs: CintCause = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintRrs
 * @constant
 * @type {number}
 */
export
const cintRrs: CintCause = CintCause_cintRrs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTbnan
 * @constant
 * @type {number}
 */
export
const CintCause_cintTbnan: CintCause = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTbnan
 * @constant
 * @type {number}
 */
export
const cintTbnan: CintCause = CintCause_cintTbnan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTnre
 * @constant
 * @type {number}
 */
export
const CintCause_cintTnre: CintCause = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTnre
 * @constant
 * @type {number}
 */
export
const cintTnre: CintCause = CintCause_cintTnre; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTrans
 * @constant
 * @type {number}
 */
export
const CintCause_cintTrans: CintCause = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintTrans
 * @constant
 * @type {number}
 */
export
const cintTrans: CintCause = CintCause_cintTrans; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintUpl
 * @constant
 * @type {number}
 */
export
const CintCause_cintUpl: CintCause = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintUpl
 * @constant
 * @type {number}
 */
export
const cintUpl: CintCause = CintCause_cintUpl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInvDiv
 * @constant
 * @type {number}
 */
export
const CintCause_cintInvDiv: CintCause = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintInvDiv
 * @constant
 * @type {number}
 */
export
const cintInvDiv: CintCause = CintCause_cintInvDiv; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintHold
 * @constant
 * @type {number}
 */
export
const CintCause_cintHold: CintCause = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CintCause_cintHold
 * @constant
 * @type {number}
 */
export
const cintHold: CintCause = CintCause_cintHold; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CintCause: $.ASN1Decoder<CintCause> = $._decodeInteger;

export
const _encode_CintCause: $.ASN1Encoder<CintCause> = $._encodeInteger;

/* eslint-enable */
