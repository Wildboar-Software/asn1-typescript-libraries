/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMState
 * @description
 * 
 * Identifies the value of the MM State associated with a MM to be stored or
 * stored MM. Include for the MMS View Confirm. Include for the MMS View Request
 * if provided by the target. As defined in OMA-TS-MMS_ENC [39] clause 7.3.33.
 * Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMState {
    draft = 1,
    sent = 2,
    new_ = 3,
    retrieved = 4,
    forwarded = 5,
}

/**
 * @summary MMState
 * @description
 * 
 * Identifies the value of the MM State associated with a MM to be stored or
 * stored MM. Include for the MMS View Confirm. Include for the MMS View Request
 * if provided by the target. As defined in OMA-TS-MMS_ENC [39] clause 7.3.33.
 * Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
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
 * Identifies the value of the MM State associated with a MM to be stored or
 * stored MM. Include for the MMS View Confirm. Include for the MMS View Request
 * if provided by the target. As defined in OMA-TS-MMS_ENC [39] clause 7.3.33.
 * Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.20.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMState: typeof _enum_for_MMState = _enum_for_MMState;

/**
 * @summary MMState_draft
 * @constant
 * @type {number}
 */
export
const MMState_draft: _enum_for_MMState.draft = MMState.draft; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
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
 * @constant
 * @type {number}
 */
export
const MMState_new_: _enum_for_MMState.new_ = MMState.new_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
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
export const _decode_MMState: $.ASN1Decoder<MMState> = $._decodeEnumerated;
export const _encode_MMState: $.ASN1Encoder<MMState> = $._encodeEnumerated;


/* eslint-enable */
