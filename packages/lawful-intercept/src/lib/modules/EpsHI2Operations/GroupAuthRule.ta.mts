/* eslint-disable */
import {
    type ENUMERATED
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
 * The action the PTC target requested on the group authorization rules: allow
 * or block session initiation, joining, adding participants, subscription to
 * session state, or anonymity (table 17.2.18). Report it when the target
 * requests the action and when the target changes or queries the access-control
 * list. Also conditional on a group-advertisement record (clause 17.2.13). 3GPP
 * TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupAuthRule  ::=  ENUMERATED
 * {
 *     allow-Initiating-PtcSession            (0),
 *     block-Initiating-PtcSession            (1),
 *     allow-Joining-PtcSession                (2),
 *     block-Joining-PtcSession                (3),
 *     allow-Add-Participants                    (4),
 *     block-Add-Participants                    (5),
 *     allow-Subscription-PtcSession-State    (6),
 *     block-Subscription-PtcSession-State    (7),
 *     allow-Anonymity                            (8),
 *     forbid-Anonymity                        (9),
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
 * @description
 * 
 * Allow initiating a PTC session (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Initiating_PtcSession = _enum_for_GroupAuthRule.allow_Initiating_PtcSession satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Initiating_PtcSession
 * @description
 * 
 * Allow initiating a PTC session.
 * 
 * @constant
 * @type {number}
 */
export
const allow_Initiating_PtcSession = GroupAuthRule_allow_Initiating_PtcSession satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Initiating_PtcSession
 * @description
 * 
 * Block initiating a PTC session (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Initiating_PtcSession = _enum_for_GroupAuthRule.block_Initiating_PtcSession satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Initiating_PtcSession
 * @description
 * 
 * Block initiating a PTC session.
 * 
 * @constant
 * @type {number}
 */
export
const block_Initiating_PtcSession = GroupAuthRule_block_Initiating_PtcSession satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Joining_PtcSession
 * @description
 * 
 * Allow joining a PTC session (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Joining_PtcSession = _enum_for_GroupAuthRule.allow_Joining_PtcSession satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Joining_PtcSession
 * @description
 * 
 * Allow joining a PTC session.
 * 
 * @constant
 * @type {number}
 */
export
const allow_Joining_PtcSession = GroupAuthRule_allow_Joining_PtcSession satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Joining_PtcSession
 * @description
 * 
 * Block joining a PTC session (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Joining_PtcSession = _enum_for_GroupAuthRule.block_Joining_PtcSession satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Joining_PtcSession
 * @description
 * 
 * Block joining a PTC session.
 * 
 * @constant
 * @type {number}
 */
export
const block_Joining_PtcSession = GroupAuthRule_block_Joining_PtcSession satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Add_Participants
 * @description
 * 
 * Allow adding participants (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Add_Participants = _enum_for_GroupAuthRule.allow_Add_Participants satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Add_Participants
 * @description
 * 
 * Allow adding participants.
 * 
 * @constant
 * @type {number}
 */
export
const allow_Add_Participants = GroupAuthRule_allow_Add_Participants satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Add_Participants
 * @description
 * 
 * Block adding participants (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Add_Participants = _enum_for_GroupAuthRule.block_Add_Participants satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Add_Participants
 * @description
 * 
 * Block adding participants.
 * 
 * @constant
 * @type {number}
 */
export
const block_Add_Participants = GroupAuthRule_block_Add_Participants satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Subscription_PtcSession_State
 * @description
 * 
 * Allow subscription to PTC session state (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Subscription_PtcSession_State = _enum_for_GroupAuthRule.allow_Subscription_PtcSession_State satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Subscription_PtcSession_State
 * @description
 * 
 * Allow subscription to PTC session state.
 * 
 * @constant
 * @type {number}
 */
export
const allow_Subscription_PtcSession_State = GroupAuthRule_allow_Subscription_PtcSession_State satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Subscription_PtcSession_State
 * @description
 * 
 * Block subscription to PTC session state (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Subscription_PtcSession_State = _enum_for_GroupAuthRule.block_Subscription_PtcSession_State satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Subscription_PtcSession_State
 * @description
 * 
 * Block subscription to PTC session state.
 * 
 * @constant
 * @type {number}
 */
export
const block_Subscription_PtcSession_State = GroupAuthRule_block_Subscription_PtcSession_State satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Anonymity
 * @description
 * 
 * Allow anonymity (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Anonymity = _enum_for_GroupAuthRule.allow_Anonymity satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Anonymity
 * @description
 * 
 * Allow anonymity.
 * 
 * @constant
 * @type {number}
 */
export
const allow_Anonymity = GroupAuthRule_allow_Anonymity satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_forbid_Anonymity
 * @description
 * 
 * Forbid anonymity (table 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_forbid_Anonymity = _enum_for_GroupAuthRule.forbid_Anonymity satisfies GroupAuthRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbid_Anonymity
 * @description
 * 
 * Forbid anonymity.
 * 
 * @constant
 * @type {number}
 */
export
const forbid_Anonymity = GroupAuthRule_forbid_Anonymity satisfies GroupAuthRule; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GroupAuthRule: $.ASN1Decoder<GroupAuthRule> = $._decodeEnumerated;
export const _encode_GroupAuthRule: $.ASN1Encoder<GroupAuthRule> = $._encodeEnumerated;


/* eslint-enable */
