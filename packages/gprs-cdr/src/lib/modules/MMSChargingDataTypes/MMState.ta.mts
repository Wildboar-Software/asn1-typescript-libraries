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
const MMState = _enum_for_MMState;

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
const MMState_draft = MMState.draft satisfies MMState; /* LONG_NAMED_ENUMERATED_VALUE */

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
const draft = MMState.draft satisfies MMState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_sent
 * @constant
 * @type {number}
 */
export
const MMState_sent = MMState.sent satisfies MMState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent = MMState.sent satisfies MMState; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const MMState_new_ = MMState.new_ satisfies MMState; /* LONG_NAMED_ENUMERATED_VALUE */

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
const new_ = MMState.new_ satisfies MMState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_retrieved
 * @constant
 * @type {number}
 */
export
const MMState_retrieved = MMState.retrieved satisfies MMState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved = MMState.retrieved satisfies MMState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_forwarded
 * @constant
 * @type {number}
 */
export
const MMState_forwarded = MMState.forwarded satisfies MMState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded = MMState.forwarded satisfies MMState; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMState: $.ASN1Decoder<MMState> = $._decodeEnumerated;

export
const _encode_MMState: $.ASN1Encoder<MMState> = $._encodeEnumerated;

/* eslint-enable */
