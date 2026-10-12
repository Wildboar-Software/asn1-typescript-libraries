/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const UDMDefinedCause = _enum_for_UDMDefinedCause;

/**
 * @summary UDMDefinedCause_userNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_userNotFound: UDMDefinedCause = UDMDefinedCause.userNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userNotFound
 * @constant
 * @type {number}
 */
export
const userNotFound: UDMDefinedCause = UDMDefinedCause.userNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_dataNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_dataNotFound: UDMDefinedCause = UDMDefinedCause.dataNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataNotFound
 * @constant
 * @type {number}
 */
export
const dataNotFound: UDMDefinedCause = UDMDefinedCause.dataNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_contextNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_contextNotFound: UDMDefinedCause = UDMDefinedCause.contextNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contextNotFound
 * @constant
 * @type {number}
 */
export
const contextNotFound: UDMDefinedCause = UDMDefinedCause.contextNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_subscriptionNotFound: UDMDefinedCause = UDMDefinedCause.subscriptionNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const subscriptionNotFound: UDMDefinedCause = UDMDefinedCause.subscriptionNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_other
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_other: UDMDefinedCause = UDMDefinedCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: UDMDefinedCause = UDMDefinedCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMDefinedCause: $.ASN1Decoder<UDMDefinedCause> = $._decodeEnumerated;
export const _encode_UDMDefinedCause: $.ASN1Encoder<UDMDefinedCause> = $._encodeEnumerated;


/* eslint-enable */
