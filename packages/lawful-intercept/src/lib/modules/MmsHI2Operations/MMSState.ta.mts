/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMSState {
    draft = 0,
    sent = 1,
    new_ = 2,
    retreived = 3,
    forwarded = 4,
}

/**
 * @summary MMSState
 * @description
 * 
 * State of an MM that is stored or is to be stored (table 15.3.6.1.2). Annex
 * B.15 names the states. Clause 15.3 does not further define each state. The
 * retrieved state is spelled retreived in annex B.15.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSState ::=  ENUMERATED
 * {
 *     draft         (0),
 *     sent        (1),
 *     new            (2),
 *     retreived    (3),
 *     forwarded    (4),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSState = _enum_for_MMSState | ENUMERATED;

/**
 * @summary MMSState_draft
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSState_draft: MMSState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const draft: MMSState = MMSState_draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_sent
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSState_sent: MMSState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const sent: MMSState = MMSState_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_new_
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSState_new_: MMSState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const new_: MMSState = MMSState_new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_retreived
 * @description
 * 
 * Annex B.15 names this state, spelled retreived. Clause 15.3 does not further
 * define it.
 * @constant
 * @type {number}
 */
export
const MMSState_retreived: MMSState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retreived
 * @description
 * 
 * Retrieved state, spelled retreived in annex B.15. Clause 15.3 does not
 * further define it.
 * @constant
 * @type {number}
 */
export
const retreived: MMSState = MMSState_retreived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_forwarded
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSState_forwarded: MMSState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const forwarded: MMSState = MMSState_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSState: $.ASN1Decoder<MMSState> = $._decodeEnumerated;
export const _encode_MMSState: $.ASN1Encoder<MMSState> = $._encodeEnumerated;


/* eslint-enable */
