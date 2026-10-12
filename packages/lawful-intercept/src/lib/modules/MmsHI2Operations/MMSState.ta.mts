/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @constant
 * @type {number}
 */
export
const MMSState_draft: MMSState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @constant
 * @type {number}
 */
export
const draft: MMSState = MMSState_draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_sent
 * @constant
 * @type {number}
 */
export
const MMSState_sent: MMSState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: MMSState = MMSState_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_new_
 * @constant
 * @type {number}
 */
export
const MMSState_new_: MMSState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @constant
 * @type {number}
 */
export
const new_: MMSState = MMSState_new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_retreived
 * @constant
 * @type {number}
 */
export
const MMSState_retreived: MMSState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retreived
 * @constant
 * @type {number}
 */
export
const retreived: MMSState = MMSState_retreived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_forwarded
 * @constant
 * @type {number}
 */
export
const MMSState_forwarded: MMSState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMSState = MMSState_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSState: $.ASN1Decoder<MMSState> = $._decodeEnumerated;
export const _encode_MMSState: $.ASN1Encoder<MMSState> = $._encodeEnumerated;


/* eslint-enable */
