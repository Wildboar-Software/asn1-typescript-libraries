/* eslint-disable */
import {
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
 * Action the PTC target requested on the group authorization rules, or a query
 * of those rules.
 * 
 * Reported when the target attempts the change or the query (table 17.2.18).
 * The values allow or block initiating a session, joining, adding participants,
 * and subscribing to session state, and they allow or forbid anonymity.
 * 
 * 3GPP TS 33.108, clause 17.2.18 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * The target asked to allow initiating a PTC session. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Initiating_PtcSession: GroupAuthRule = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Initiating_PtcSession
 * @description
 * 
 * The target asked to allow initiating a PTC session (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const allow_Initiating_PtcSession: GroupAuthRule = GroupAuthRule_allow_Initiating_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Initiating_PtcSession
 * @description
 * 
 * The target asked to block initiating a PTC session. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Initiating_PtcSession: GroupAuthRule = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Initiating_PtcSession
 * @description
 * 
 * The target asked to block initiating a PTC session (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const block_Initiating_PtcSession: GroupAuthRule = GroupAuthRule_block_Initiating_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Joining_PtcSession
 * @description
 * 
 * The target asked to allow joining a PTC session. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Joining_PtcSession: GroupAuthRule = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Joining_PtcSession
 * @description
 * 
 * The target asked to allow joining a PTC session (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const allow_Joining_PtcSession: GroupAuthRule = GroupAuthRule_allow_Joining_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Joining_PtcSession
 * @description
 * 
 * The target asked to block joining a PTC session. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Joining_PtcSession: GroupAuthRule = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Joining_PtcSession
 * @description
 * 
 * The target asked to block joining a PTC session (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const block_Joining_PtcSession: GroupAuthRule = GroupAuthRule_block_Joining_PtcSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Add_Participants
 * @description
 * 
 * The target asked to allow adding participants. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Add_Participants: GroupAuthRule = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Add_Participants
 * @description
 * 
 * The target asked to allow adding participants (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const allow_Add_Participants: GroupAuthRule = GroupAuthRule_allow_Add_Participants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Add_Participants
 * @description
 * 
 * The target asked to block adding participants. Reported when the target
 * attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Add_Participants: GroupAuthRule = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Add_Participants
 * @description
 * 
 * The target asked to block adding participants (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const block_Add_Participants: GroupAuthRule = GroupAuthRule_block_Add_Participants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Subscription_PtcSession_State
 * @description
 * 
 * The target asked to allow subscription to PTC session state. Reported when
 * the target attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Subscription_PtcSession_State: GroupAuthRule = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Subscription_PtcSession_State
 * @description
 * 
 * The target asked to allow subscription to PTC session state (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const allow_Subscription_PtcSession_State: GroupAuthRule = GroupAuthRule_allow_Subscription_PtcSession_State; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_block_Subscription_PtcSession_State
 * @description
 * 
 * The target asked to block subscription to PTC session state. Reported when
 * the target attempts the change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_block_Subscription_PtcSession_State: GroupAuthRule = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block_Subscription_PtcSession_State
 * @description
 * 
 * The target asked to block subscription to PTC session state (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const block_Subscription_PtcSession_State: GroupAuthRule = GroupAuthRule_block_Subscription_PtcSession_State; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_allow_Anonymity
 * @description
 * 
 * The target asked to allow anonymity. Reported when the target attempts the
 * change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_allow_Anonymity: GroupAuthRule = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_Anonymity
 * @description
 * 
 * The target asked to allow anonymity (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const allow_Anonymity: GroupAuthRule = GroupAuthRule_allow_Anonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GroupAuthRule_forbid_Anonymity
 * @description
 * 
 * The target asked to forbid anonymity. Reported when the target attempts the
 * change or queries the access-control list.
 * 
 * 3GPP TS 33.108, table 17.2.18.
 * @constant
 * @type {number}
 */
export
const GroupAuthRule_forbid_Anonymity: GroupAuthRule = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbid_Anonymity
 * @description
 * 
 * The target asked to forbid anonymity (table 17.2.18).
 * @constant
 * @type {number}
 */
export
const forbid_Anonymity: GroupAuthRule = GroupAuthRule_forbid_Anonymity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GroupAuthRule: $.ASN1Decoder<GroupAuthRule> = $._decodeEnumerated;
export const _encode_GroupAuthRule: $.ASN1Encoder<GroupAuthRule> = $._encodeEnumerated;


/* eslint-enable */
