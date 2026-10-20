/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCSessionType
 * @description
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
const POCSessionType = _enum_for_POCSessionType;

/**
 * @summary POCSessionType_one_to_one_session
 * @constant
 * @type {number}
 */
export
const POCSessionType_one_to_one_session: POCSessionType = POCSessionType.one_to_one_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary one_to_one_session
 * @constant
 * @type {number}
 */
export
const one_to_one_session: POCSessionType = POCSessionType.one_to_one_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_chat_group_session
 * @constant
 * @type {number}
 */
export
const POCSessionType_chat_group_session: POCSessionType = POCSessionType.chat_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chat_group_session
 * @constant
 * @type {number}
 */
export
const chat_group_session: POCSessionType = POCSessionType.chat_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_pre_arranged_group_session
 * @constant
 * @type {number}
 */
export
const POCSessionType_pre_arranged_group_session: POCSessionType = POCSessionType.pre_arranged_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_arranged_group_session
 * @constant
 * @type {number}
 */
export
const pre_arranged_group_session: POCSessionType = POCSessionType.pre_arranged_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionType_ad_hoc_group_session
 * @constant
 * @type {number}
 */
export
const POCSessionType_ad_hoc_group_session: POCSessionType = POCSessionType.ad_hoc_group_session; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ad_hoc_group_session
 * @constant
 * @type {number}
 */
export
const ad_hoc_group_session: POCSessionType = POCSessionType.ad_hoc_group_session; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_POCSessionType: $.ASN1Decoder<POCSessionType> = $._decodeEnumerated;

export
const _encode_POCSessionType: $.ASN1Encoder<POCSessionType> = $._encodeEnumerated;

/* eslint-enable */
