/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DNDProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDProtectionLevel  ::=  ENUMERATED {
 *     lowProtection(0),
 *     mediumProtection(1),
 *     highProtection(2),
 *     fullProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DNDProtectionLevel {
    lowProtection = 0,
    mediumProtection = 1,
    highProtection = 2,
    fullProtection = 3,
}

/**
 * @summary DNDProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDProtectionLevel  ::=  ENUMERATED {
 *     lowProtection(0),
 *     mediumProtection(1),
 *     highProtection(2),
 *     fullProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DNDProtectionLevel = _enum_for_DNDProtectionLevel;

/**
 * @summary DNDProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDProtectionLevel  ::=  ENUMERATED {
 *     lowProtection(0),
 *     mediumProtection(1),
 *     highProtection(2),
 *     fullProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DNDProtectionLevel = _enum_for_DNDProtectionLevel;

/**
 * @summary DNDProtectionLevel_lowProtection
 * @constant
 * @type {number}
 */
export
const DNDProtectionLevel_lowProtection: DNDProtectionLevel = DNDProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @constant
 * @type {number}
 */
export
const lowProtection: DNDProtectionLevel = DNDProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_mediumProtection
 * @constant
 * @type {number}
 */
export
const DNDProtectionLevel_mediumProtection: DNDProtectionLevel = DNDProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @constant
 * @type {number}
 */
export
const mediumProtection: DNDProtectionLevel = DNDProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_highProtection
 * @constant
 * @type {number}
 */
export
const DNDProtectionLevel_highProtection: DNDProtectionLevel = DNDProtectionLevel.highProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highProtection
 * @constant
 * @type {number}
 */
export
const highProtection: DNDProtectionLevel = DNDProtectionLevel.highProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_fullProtection
 * @constant
 * @type {number}
 */
export
const DNDProtectionLevel_fullProtection: DNDProtectionLevel = DNDProtectionLevel.fullProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullProtection
 * @constant
 * @type {number}
 */
export
const fullProtection: DNDProtectionLevel = DNDProtectionLevel.fullProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNDProtectionLevel: $.ASN1Decoder<DNDProtectionLevel> = $._decodeEnumerated;

export
const _encode_DNDProtectionLevel: $.ASN1Encoder<DNDProtectionLevel> = $._encodeEnumerated;

/* eslint-enable */
