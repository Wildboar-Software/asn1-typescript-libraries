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

/**
 * @summary Decodes an ASN.1 element into a(n) UDMDefinedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UDMDefinedCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UDMDefinedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMDefinedCause, encoded as an ASN.1 Element.
 */
export const _encode_UDMDefinedCause = $._encodeEnumerated;


/* eslint-enable */
