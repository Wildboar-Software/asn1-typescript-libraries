/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChargedItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedItem  ::=  ENUMERATED {
 *     basicCommunication(0),
 *     callAttempt(1),
 *     callSetup(2),
 *     userToUserInfo(3),
 *     operationOfSupplementaryServ(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargedItem {
    basicCommunication = 0,
    callAttempt = 1,
    callSetup = 2,
    userToUserInfo = 3,
    operationOfSupplementaryServ = 4,
}

/**
 * @summary ChargedItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedItem  ::=  ENUMERATED {
 *     basicCommunication(0),
 *     callAttempt(1),
 *     callSetup(2),
 *     userToUserInfo(3),
 *     operationOfSupplementaryServ(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ChargedItem = _enum_for_ChargedItem;

/**
 * @summary ChargedItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargedItem  ::=  ENUMERATED {
 *     basicCommunication(0),
 *     callAttempt(1),
 *     callSetup(2),
 *     userToUserInfo(3),
 *     operationOfSupplementaryServ(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ChargedItem = _enum_for_ChargedItem;

/**
 * @summary ChargedItem_basicCommunication
 * @constant
 * @type {number}
 */
export
const ChargedItem_basicCommunication: ChargedItem = ChargedItem.basicCommunication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCommunication
 * @constant
 * @type {number}
 */
export
const basicCommunication: ChargedItem = ChargedItem.basicCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_callAttempt
 * @constant
 * @type {number}
 */
export
const ChargedItem_callAttempt: ChargedItem = ChargedItem.callAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAttempt
 * @constant
 * @type {number}
 */
export
const callAttempt: ChargedItem = ChargedItem.callAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_callSetup
 * @constant
 * @type {number}
 */
export
const ChargedItem_callSetup: ChargedItem = ChargedItem.callSetup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetup
 * @constant
 * @type {number}
 */
export
const callSetup: ChargedItem = ChargedItem.callSetup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_userToUserInfo
 * @constant
 * @type {number}
 */
export
const ChargedItem_userToUserInfo: ChargedItem = ChargedItem.userToUserInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userToUserInfo
 * @constant
 * @type {number}
 */
export
const userToUserInfo: ChargedItem = ChargedItem.userToUserInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_operationOfSupplementaryServ
 * @constant
 * @type {number}
 */
export
const ChargedItem_operationOfSupplementaryServ: ChargedItem = ChargedItem.operationOfSupplementaryServ; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationOfSupplementaryServ
 * @constant
 * @type {number}
 */
export
const operationOfSupplementaryServ: ChargedItem = ChargedItem.operationOfSupplementaryServ; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargedItem: $.ASN1Decoder<ChargedItem> = $._decodeEnumerated;

export
const _encode_ChargedItem: $.ASN1Encoder<ChargedItem> = $._encodeEnumerated;

/* eslint-enable */
