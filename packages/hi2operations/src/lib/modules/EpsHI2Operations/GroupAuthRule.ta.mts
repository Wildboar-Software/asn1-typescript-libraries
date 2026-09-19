/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_GroupAuthRule {
    allow_Initiating_PtcSession = 0,
    block_Initiating_PtcSession = 1,
    allow_Joining_PtcSession = 2,
    block_Joining_PtcSession = 3,
    allow_Add_Participants = 4,
    block_Add_Participants = 5,
    allow_Subscription_PtcSession_State = 6,
    block_Subscription_PtcSession_State = 7,
    allow_Anonymity = 8,
    forbid_Anonymity = 9,
}

/**
 * @summary GroupAuthRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupAuthRule  ::=  ENUMERATED
 * {
 *  allow-Initiating-PtcSession (0),
 *  block-Initiating-PtcSession (1),
 *  allow-Joining-PtcSession (2),
 *  block-Joining-PtcSession (3),
 *  allow-Add-Participants (4),
 *  block-Add-Participants (5),
 *  allow-Subscription-PtcSession-State (6),
 *  block-Subscription-PtcSession-State (7),
 *  allow-Anonymity (8),
 *  forbid-Anonymity (9),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GroupAuthRule = _enum_for_GroupAuthRule | ENUMERATED;

/**
 * @summary GroupAuthRule_allow_Initiating_PtcSession
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Initiating_PtcSession: GroupAuthRule = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Initiating_PtcSession
 * @constant
 * @type {number}
 */
export
const allow_Initiating_PtcSession: GroupAuthRule = GroupAuthRule_allow_Initiating_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Initiating_PtcSession
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Initiating_PtcSession: GroupAuthRule = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Initiating_PtcSession
 * @constant
 * @type {number}
 */
export
const block_Initiating_PtcSession: GroupAuthRule = GroupAuthRule_block_Initiating_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Joining_PtcSession
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Joining_PtcSession: GroupAuthRule = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Joining_PtcSession
 * @constant
 * @type {number}
 */
export
const allow_Joining_PtcSession: GroupAuthRule = GroupAuthRule_allow_Joining_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Joining_PtcSession
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Joining_PtcSession: GroupAuthRule = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Joining_PtcSession
 * @constant
 * @type {number}
 */
export
const block_Joining_PtcSession: GroupAuthRule = GroupAuthRule_block_Joining_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Add_Participants
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Add_Participants: GroupAuthRule = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Add_Participants
 * @constant
 * @type {number}
 */
export
const allow_Add_Participants: GroupAuthRule = GroupAuthRule_allow_Add_Participants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Add_Participants
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Add_Participants: GroupAuthRule = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Add_Participants
 * @constant
 * @type {number}
 */
export
const block_Add_Participants: GroupAuthRule = GroupAuthRule_block_Add_Participants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Subscription_PtcSession_State
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Subscription_PtcSession_State: GroupAuthRule = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Subscription_PtcSession_State
 * @constant
 * @type {number}
 */
export
const allow_Subscription_PtcSession_State: GroupAuthRule = GroupAuthRule_allow_Subscription_PtcSession_State; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Subscription_PtcSession_State
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Subscription_PtcSession_State: GroupAuthRule = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Subscription_PtcSession_State
 * @constant
 * @type {number}
 */
export
const block_Subscription_PtcSession_State: GroupAuthRule = GroupAuthRule_block_Subscription_PtcSession_State; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Anonymity
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Anonymity: GroupAuthRule = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Anonymity
 * @constant
 * @type {number}
 */
export
const allow_Anonymity: GroupAuthRule = GroupAuthRule_allow_Anonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_forbid_Anonymity
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_forbid_Anonymity: GroupAuthRule = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbid_Anonymity
 * @constant
 * @type {number}
 */
export
const forbid_Anonymity: GroupAuthRule = GroupAuthRule_forbid_Anonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GroupAuthRule: $.ASN1Decoder<GroupAuthRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupAuthRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupAuthRule (el: _Element): GroupAuthRule {
    if (!_cached_decoder_for_GroupAuthRule) { _cached_decoder_for_GroupAuthRule = $._decodeEnumerated; }
    return _cached_decoder_for_GroupAuthRule(el);
}

let _cached_encoder_for_GroupAuthRule: $.ASN1Encoder<GroupAuthRule> | null = null;

/**
 * @summary Encodes a(n) GroupAuthRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupAuthRule, encoded as an ASN.1 Element.
 */
export
function _encode_GroupAuthRule (value: GroupAuthRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupAuthRule) { _cached_encoder_for_GroupAuthRule = $._encodeEnumerated; }
    return _cached_encoder_for_GroupAuthRule(value, elGetter);
}


/* eslint-enable */
