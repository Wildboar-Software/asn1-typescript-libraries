/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AFKeyRemovalCause {
    unknown = 1,
    keyExpiry = 2,
    applicationSpecific = 3,
}

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause_unknown
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_keyExpiry
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyExpiry
 * @constant
 * @type {number}
 */
export
const keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_applicationSpecific
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationSpecific
 * @constant
 * @type {number}
 */
export
const applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AFKeyRemovalCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AFKeyRemovalCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AFKeyRemovalCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFKeyRemovalCause, encoded as an ASN.1 Element.
 */
export const _encode_AFKeyRemovalCause = $._encodeEnumerated;


/* eslint-enable */
