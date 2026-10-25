/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMState
 * @description
 *
 * MM State; This field contains the state of the MM.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
 *
 * State of an MM in the MMBox. On a Bx1S-CDR, if the state is absent and
 * the message reference came from a notification, it defaults to new. No
 * default is assumed when the reference is to an MM that is already
 * stored. On a Bx1U-CDR an absent state defaults to draft. A Bx1V-CDR may
 * select stored MMs by state; the examples given are new and draft.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.4.1, 6.1.4.2, and 6.1.4.3.
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
 * MM State; This field contains the state of the MM.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
 *
 * State of an MM in the MMBox. On a Bx1S-CDR, if the state is absent and
 * the message reference came from a notification, it defaults to new. No
 * default is assumed when the reference is to an MM that is already
 * stored. On a Bx1U-CDR an absent state defaults to draft. A Bx1V-CDR may
 * select stored MMs by state; the examples given are new and draft.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.4.1, 6.1.4.2, and 6.1.4.3.
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
 * MM State; This field contains the state of the MM.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
 *
 * State of an MM in the MMBox. On a Bx1S-CDR, if the state is absent and
 * the message reference came from a notification, it defaults to new. No
 * default is assumed when the reference is to an MM that is already
 * stored. On a Bx1U-CDR an absent state defaults to draft. A Bx1V-CDR may
 * select stored MMs by state; the examples given are new and draft.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.4.1, 6.1.4.2, and 6.1.4.3.
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
const MMState: typeof _enum_for_MMState = _enum_for_MMState;

/**
 * @summary MMState_draft
 * @description
 *
 * Default state on a Bx1U-CDR when MM state is absent.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.3.
 *
 * @constant
 * @type {number}
 */
export
const MMState_draft: _enum_for_MMState.draft = MMState.draft; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @description
 *
 * Default state on a Bx1U-CDR when MM state is absent.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.3.
 *
 * @constant
 * @type {number}
 */
export
const draft: _enum_for_MMState.draft = MMState.draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_sent
 * @constant
 * @type {number}
 */
export
const MMState_sent: _enum_for_MMState.sent = MMState.sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: _enum_for_MMState.sent = MMState.sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_new_
 * @description
 *
 * Default state on a Bx1S-CDR when MM state is absent and the message
 * reference came from a notification. No default is assumed when the
 * reference is to an MM already stored.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
 *
 * @constant
 * @type {number}
 */
export
const MMState_new_: _enum_for_MMState.new_ = MMState.new_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @description
 *
 * Default state on a Bx1S-CDR when MM state is absent and the message
 * reference came from a notification. No default is assumed when the
 * reference is to an MM already stored.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
 *
 * @constant
 * @type {number}
 */
export
const new_: _enum_for_MMState.new_ = MMState.new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_retrieved
 * @constant
 * @type {number}
 */
export
const MMState_retrieved: _enum_for_MMState.retrieved = MMState.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: _enum_for_MMState.retrieved = MMState.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_forwarded
 * @constant
 * @type {number}
 */
export
const MMState_forwarded: _enum_for_MMState.forwarded = MMState.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: _enum_for_MMState.forwarded = MMState.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMState: $.ASN1Decoder<MMState> = $._decodeEnumerated;

export
const _encode_MMState: $.ASN1Encoder<MMState> = $._encodeEnumerated;

/* eslint-enable */
