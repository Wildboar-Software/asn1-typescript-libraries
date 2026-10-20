/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState     ::=  ENUMERATED {
 *    draft        ( 0 ),
 *    sent         ( 1 ),
 *    new          ( 2 ),
 *    retrieved    ( 3 ),
 *    forwarded    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMState {
    draft = 0,
    sent = 1,
    new_ = 2,
    retrieved = 3,
    forwarded = 4,
}

/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState     ::=  ENUMERATED {
 *    draft        ( 0 ),
 *    sent         ( 1 ),
 *    new          ( 2 ),
 *    retrieved    ( 3 ),
 *    forwarded    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MMState = _enum_for_MMState;

/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState     ::=  ENUMERATED {
 *    draft        ( 0 ),
 *    sent         ( 1 ),
 *    new          ( 2 ),
 *    retrieved    ( 3 ),
 *    forwarded    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MMState = _enum_for_MMState;

/**
 * @summary MMState_draft
 * @constant
 * @type {number}
 */
export
const MMState_draft: MMState = MMState.draft; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @constant
 * @type {number}
 */
export
const draft: MMState = MMState.draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_sent
 * @constant
 * @type {number}
 */
export
const MMState_sent: MMState = MMState.sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: MMState = MMState.sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_new_
 * @constant
 * @type {number}
 */
export
const MMState_new_: MMState = MMState.new_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @constant
 * @type {number}
 */
export
const new_: MMState = MMState.new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_retrieved
 * @constant
 * @type {number}
 */
export
const MMState_retrieved: MMState = MMState.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: MMState = MMState.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_forwarded
 * @constant
 * @type {number}
 */
export
const MMState_forwarded: MMState = MMState.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMState = MMState.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMState: $.ASN1Decoder<MMState> = $._decodeEnumerated;

export
const _encode_MMState: $.ASN1Encoder<MMState> = $._encodeEnumerated;

/* eslint-enable */
