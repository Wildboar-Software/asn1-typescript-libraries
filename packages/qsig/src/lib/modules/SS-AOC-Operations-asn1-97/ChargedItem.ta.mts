/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChargedItem
 * @description
 *
 * Which part of the call a rate describes. Include an item only when it
 * contains charging information for the call. PISNs differ in which items they
 * use. If an item is omitted, treat it as free of charge (ECMA-211 §A.1.2,
 * §A.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Which part of the call a rate describes. Include an item only when it
 * contains charging information for the call. PISNs differ in which items they
 * use. If an item is omitted, treat it as free of charge (ECMA-211 §A.1.2,
 * §A.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Which part of the call a rate describes. Include an item only when it
 * contains charging information for the call. PISNs differ in which items they
 * use. If an item is omitted, treat it as free of charge (ECMA-211 §A.1.2,
 * §A.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * @description
 *
 * Rate for the basic communication between the users. Repeat this item when
 * that rate changes. It may be a duration rate, flat rate, free of charge, free
 * from the beginning, a special code, or not available (ECMA-211 §A.1.2, §A.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargedItem_basicCommunication = ChargedItem.basicCommunication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCommunication
 * @description Alias of {@link ChargedItem_basicCommunication}.
 * @constant
 * @type {number}
 */
export
const basicCommunication = ChargedItem.basicCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_callAttempt
 * @description
 *
 * Cost of a successful attempt before the called user accepts. Only in the
 * initial charging information. Flat rate, free of charge, special code, or not
 * available (ECMA-211 §A.1.2, §A.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargedItem_callAttempt = ChargedItem.callAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAttempt
 * @description Alias of {@link ChargedItem_callAttempt}.
 * @constant
 * @type {number}
 */
export
const callAttempt = ChargedItem.callAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_callSetup
 * @description
 *
 * Cost when the connection is established, including charges from before a
 * transfer that are passed on. Only in the initial information. A flat rate
 * with a currency amount is used when a transferred user incurs charges from
 * before the transfer (ECMA-211 §A.1.2, §A.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargedItem_callSetup = ChargedItem.callSetup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetup
 * @description Alias of {@link ChargedItem_callSetup}.
 * @constant
 * @type {number}
 */
export
const callSetup = ChargedItem.callSetup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_userToUserInfo
 * @description
 *
 * Rate for user-to-user information. Repeat it when that rate changes. Include
 * it only if the served user requested user-to-user signalling. Volume rate,
 * flat rate, free of charge, special code, or not available (ECMA-211 §A.1.2,
 * §A.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargedItem_userToUserInfo = ChargedItem.userToUserInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userToUserInfo
 * @description Alias of {@link ChargedItem_userToUserInfo}.
 * @constant
 * @type {number}
 */
export
const userToUserInfo = ChargedItem.userToUserInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargedItem_operationOfSupplementaryServ
 * @description
 *
 * Cost of a requested supplementary service. Include it only when the served
 * user requested one. Duration rate, flat rate, free of charge, special code,
 * or not available (ECMA-211 §A.1.2, §A.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargedItem_operationOfSupplementaryServ = ChargedItem.operationOfSupplementaryServ; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationOfSupplementaryServ
 * @description Alias of {@link ChargedItem_operationOfSupplementaryServ}.
 * @constant
 * @type {number}
 */
export
const operationOfSupplementaryServ = ChargedItem.operationOfSupplementaryServ; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargedItem: $.ASN1Decoder<ChargedItem> = $._decodeEnumerated;

export
const _encode_ChargedItem: $.ASN1Encoder<ChargedItem> = $._encodeEnumerated;

/* eslint-enable */
