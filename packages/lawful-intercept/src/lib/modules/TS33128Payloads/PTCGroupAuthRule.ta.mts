/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCGroupAuthRule
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC Group
 * Authorization Rules: a) Allow Initiating PTC session b) Block Initiating PTC
 * session c) Allow Joining PTC session d) Block Joining PTC session e) Allow
 * Add Participants f) Block Add Participants g) Allow Subscription PTC session
 * state h) Block Subscription PTC session state i) Allow Anonymity j) Forbid
 * Anonymity - Report when action requested to the PTC group authorization rules
 * by the PTC target. - Report when the PTC target attempts a change or queries
 * the access control List(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCGroupAuthRule {
    allowInitiatingPTCSession = 1,
    blockInitiatingPTCSession = 2,
    allowJoiningPTCSession = 3,
    blockJoiningPTCSession = 4,
    allowAddParticipants = 5,
    blockAddParticipants = 6,
    allowSubscriptionPTCSessionState = 7,
    blockSubscriptionPTCSessionState = 8,
    allowAnonymity = 9,
    forbidAnonymity = 10,
}

/**
 * @summary PTCGroupAuthRule
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC Group
 * Authorization Rules: a) Allow Initiating PTC session b) Block Initiating PTC
 * session c) Allow Joining PTC session d) Block Joining PTC session e) Allow
 * Add Participants f) Block Add Participants g) Allow Subscription PTC session
 * state h) Block Subscription PTC session state i) Allow Anonymity j) Forbid
 * Anonymity - Report when action requested to the PTC group authorization rules
 * by the PTC target. - Report when the PTC target attempts a change or queries
 * the access control List(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCGroupAuthRule = _enum_for_PTCGroupAuthRule;

/**
 * @summary PTCGroupAuthRule
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC Group
 * Authorization Rules: a) Allow Initiating PTC session b) Block Initiating PTC
 * session c) Allow Joining PTC session d) Block Joining PTC session e) Allow
 * Add Participants f) Block Add Participants g) Allow Subscription PTC session
 * state h) Block Subscription PTC session state i) Allow Anonymity j) Forbid
 * Anonymity - Report when action requested to the PTC group authorization rules
 * by the PTC target. - Report when the PTC target attempts a change or queries
 * the access control List(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCGroupAuthRule = _enum_for_PTCGroupAuthRule;

/**
 * @summary PTCGroupAuthRule_allowInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowInitiatingPTCSession = PTCGroupAuthRule.allowInitiatingPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const allowInitiatingPTCSession = PTCGroupAuthRule.allowInitiatingPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockInitiatingPTCSession = PTCGroupAuthRule.blockInitiatingPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const blockInitiatingPTCSession = PTCGroupAuthRule.blockInitiatingPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowJoiningPTCSession = PTCGroupAuthRule.allowJoiningPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const allowJoiningPTCSession = PTCGroupAuthRule.allowJoiningPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockJoiningPTCSession = PTCGroupAuthRule.blockJoiningPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const blockJoiningPTCSession = PTCGroupAuthRule.blockJoiningPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowAddParticipants
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowAddParticipants = PTCGroupAuthRule.allowAddParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAddParticipants
 * @constant
 * @type {number}
 */
export
const allowAddParticipants = PTCGroupAuthRule.allowAddParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockAddParticipants
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockAddParticipants = PTCGroupAuthRule.blockAddParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockAddParticipants
 * @constant
 * @type {number}
 */
export
const blockAddParticipants = PTCGroupAuthRule.blockAddParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowSubscriptionPTCSessionState = PTCGroupAuthRule.allowSubscriptionPTCSessionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const allowSubscriptionPTCSessionState = PTCGroupAuthRule.allowSubscriptionPTCSessionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockSubscriptionPTCSessionState = PTCGroupAuthRule.blockSubscriptionPTCSessionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const blockSubscriptionPTCSessionState = PTCGroupAuthRule.blockSubscriptionPTCSessionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowAnonymity
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowAnonymity = PTCGroupAuthRule.allowAnonymity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAnonymity
 * @constant
 * @type {number}
 */
export
const allowAnonymity = PTCGroupAuthRule.allowAnonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_forbidAnonymity
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_forbidAnonymity = PTCGroupAuthRule.forbidAnonymity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidAnonymity
 * @constant
 * @type {number}
 */
export
const forbidAnonymity = PTCGroupAuthRule.forbidAnonymity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCGroupAuthRule: $.ASN1Decoder<PTCGroupAuthRule> = $._decodeEnumerated;
export const _encode_PTCGroupAuthRule: $.ASN1Encoder<PTCGroupAuthRule> = $._encodeEnumerated;


/* eslint-enable */
