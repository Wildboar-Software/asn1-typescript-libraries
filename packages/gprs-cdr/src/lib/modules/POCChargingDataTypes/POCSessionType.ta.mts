/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCSessionType
 * @description
 *
 * Type of the PoC session. Charging distinguishes the four
 * values below. TS 32.272 points at appendix C.5.1 of
 * OMA-CP-POC for the formal type and defines the four session
 * kinds in clauses 3.1 and 5.1.1.
 *
 * For a 1-1 or ad-hoc session, the inviting user's PoC Server
 * performs the controlling function. For a chat or pre-arranged
 * group, the server that hosts the group identity does.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 4.1.1.2, 5.1.1, and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionType  ::=  ENUMERATED {
 *    one-to-one-session            ( 0 ),
 *    chat-group-session            ( 1 ),
 *    pre-arranged-group-session    ( 2 ),
 *    ad-hoc-group-session          ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_POCSessionType {
    one_to_one_session = 0,
    chat_group_session = 1,
    pre_arranged_group_session = 2,
    ad_hoc_group_session = 3,
}

/**
 * @summary POCSessionType
 * @description
 *
 * Type of the PoC session. Charging distinguishes the four
 * values below. TS 32.272 points at appendix C.5.1 of
 * OMA-CP-POC for the formal type and defines the four session
 * kinds in clauses 3.1 and 5.1.1.
 *
 * For a 1-1 or ad-hoc session, the inviting user's PoC Server
 * performs the controlling function. For a chat or pre-arranged
 * group, the server that hosts the group identity does.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 4.1.1.2, 5.1.1, and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionType  ::=  ENUMERATED {
 *    one-to-one-session            ( 0 ),
 *    chat-group-session            ( 1 ),
 *    pre-arranged-group-session    ( 2 ),
 *    ad-hoc-group-session          ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type POCSessionType = _enum_for_POCSessionType;

/**
 * @summary POCSessionType
 * @description
 *
 * Type of the PoC session. Charging distinguishes the four
 * values below. TS 32.272 points at appendix C.5.1 of
 * OMA-CP-POC for the formal type and defines the four session
 * kinds in clauses 3.1 and 5.1.1.
 *
 * For a 1-1 or ad-hoc session, the inviting user's PoC Server
 * performs the controlling function. For a chat or pre-arranged
 * group, the server that hosts the group identity does.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 4.1.1.2, 5.1.1, and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionType  ::=  ENUMERATED {
 *    one-to-one-session            ( 0 ),
 *    chat-group-session            ( 1 ),
 *    pre-arranged-group-session    ( 2 ),
 *    ad-hoc-group-session          ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const POCSessionType: typeof _enum_for_POCSessionType = _enum_for_POCSessionType;

/**
 * @summary POCSessionType_one_to_one_session
 * @description
 *
 * A PoC session between two PoC users. The inviting user's PoC
 * Server performs the controlling function.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 4.1.1.2.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionType_one_to_one_session: _enum_for_POCSessionType.one_to_one_session = POCSessionType.one_to_one_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary one_to_one_session
 * @constant
 * @type {number}
 */
export
const one_to_one_session: _enum_for_POCSessionType.one_to_one_session = POCSessionType.one_to_one_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_chat_group_session
 * @description
 *
 * Session to a chat PoC group. The group is persistent and each
 * member joins individually; opening the session does not invite
 * the other members. Members may join and leave. If the group is
 * restricted, only members may join. The PoC Server that hosts
 * the group identity performs the controlling function.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 4.1.1.2.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionType_chat_group_session: _enum_for_POCSessionType.chat_group_session = POCSessionType.chat_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chat_group_session
 * @constant
 * @type {number}
 */
export
const chat_group_session: _enum_for_POCSessionType.chat_group_session = POCSessionType.chat_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_pre_arranged_group_session
 * @description
 *
 * Persistent session identity with a set of members. Opening the
 * session invites every member. The session owner does not have
 * to take part. The PoC Server that hosts the group identity
 * performs the controlling function, and the CDR's group name is
 * included for this session type.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 4.1.1.2, 5.1.1, and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionType_pre_arranged_group_session: _enum_for_POCSessionType.pre_arranged_group_session = POCSessionType.pre_arranged_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_arranged_group_session
 * @constant
 * @type {number}
 */
export
const pre_arranged_group_session: _enum_for_POCSessionType.pre_arranged_group_session = POCSessionType.pre_arranged_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_ad_hoc_group_session
 * @description
 *
 * Session with several PoC users that does not use a
 * pre-arranged or chat group, and does not require the group to
 * exist beforehand. The inviting user's PoC Server performs the
 * controlling function. The initial online quota uses the number
 * of parties invited at the start.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 4.1.1.2, and 5.3.2.5.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionType_ad_hoc_group_session: _enum_for_POCSessionType.ad_hoc_group_session = POCSessionType.ad_hoc_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ad_hoc_group_session
 * @constant
 * @type {number}
 */
export
const ad_hoc_group_session: _enum_for_POCSessionType.ad_hoc_group_session = POCSessionType.ad_hoc_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_POCSessionType: $.ASN1Decoder<POCSessionType> = $._decodeEnumerated;

export
const _encode_POCSessionType: $.ASN1Encoder<POCSessionType> = $._encodeEnumerated;

/* eslint-enable */
