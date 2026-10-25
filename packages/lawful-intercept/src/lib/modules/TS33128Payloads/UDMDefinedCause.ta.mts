/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMDefinedCause {
    userNotFound = 1,
    dataNotFound = 2,
    contextNotFound = 3,
    subscriptionNotFound = 4,
    other = 5,
}

/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMDefinedCause = _enum_for_UDMDefinedCause;

/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMDefinedCause: typeof _enum_for_UDMDefinedCause = _enum_for_UDMDefinedCause;

/**
 * @summary UDMDefinedCause_userNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_userNotFound: _enum_for_UDMDefinedCause.userNotFound = UDMDefinedCause.userNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userNotFound
 * @constant
 * @type {number}
 */
export
const userNotFound: _enum_for_UDMDefinedCause.userNotFound = UDMDefinedCause.userNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_dataNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_dataNotFound: _enum_for_UDMDefinedCause.dataNotFound = UDMDefinedCause.dataNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataNotFound
 * @constant
 * @type {number}
 */
export
const dataNotFound: _enum_for_UDMDefinedCause.dataNotFound = UDMDefinedCause.dataNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_contextNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_contextNotFound: _enum_for_UDMDefinedCause.contextNotFound = UDMDefinedCause.contextNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contextNotFound
 * @constant
 * @type {number}
 */
export
const contextNotFound: _enum_for_UDMDefinedCause.contextNotFound = UDMDefinedCause.contextNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_subscriptionNotFound: _enum_for_UDMDefinedCause.subscriptionNotFound = UDMDefinedCause.subscriptionNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const subscriptionNotFound: _enum_for_UDMDefinedCause.subscriptionNotFound = UDMDefinedCause.subscriptionNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_other
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_other: _enum_for_UDMDefinedCause.other = UDMDefinedCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_UDMDefinedCause.other = UDMDefinedCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMDefinedCause: $.ASN1Decoder<UDMDefinedCause> = $._decodeEnumerated;
export const _encode_UDMDefinedCause: $.ASN1Encoder<UDMDefinedCause> = $._encodeEnumerated;


/* eslint-enable */
