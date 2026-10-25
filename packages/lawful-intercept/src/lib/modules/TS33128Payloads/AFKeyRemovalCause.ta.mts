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
const AFKeyRemovalCause_unknown = AFKeyRemovalCause.unknown satisfies AFKeyRemovalCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = AFKeyRemovalCause.unknown satisfies AFKeyRemovalCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_keyExpiry
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_keyExpiry = AFKeyRemovalCause.keyExpiry satisfies AFKeyRemovalCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyExpiry
 * @constant
 * @type {number}
 */
export
const keyExpiry = AFKeyRemovalCause.keyExpiry satisfies AFKeyRemovalCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_applicationSpecific
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_applicationSpecific = AFKeyRemovalCause.applicationSpecific satisfies AFKeyRemovalCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationSpecific
 * @constant
 * @type {number}
 */
export
const applicationSpecific = AFKeyRemovalCause.applicationSpecific satisfies AFKeyRemovalCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AFKeyRemovalCause: $.ASN1Decoder<AFKeyRemovalCause> = $._decodeEnumerated;
export const _encode_AFKeyRemovalCause: $.ASN1Encoder<AFKeyRemovalCause> = $._encodeEnumerated;


/* eslint-enable */
