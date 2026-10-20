/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIProtectionLevel  ::=  ENUMERATED {
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
enum _enum_for_CIProtectionLevel {
    lowProtection = 0,
    mediumProtection = 1,
    highProtection = 2,
    fullProtection = 3,
}

/**
 * @summary CIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIProtectionLevel  ::=  ENUMERATED {
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
type CIProtectionLevel = _enum_for_CIProtectionLevel;

/**
 * @summary CIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIProtectionLevel  ::=  ENUMERATED {
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
const CIProtectionLevel = _enum_for_CIProtectionLevel;

/**
 * @summary CIProtectionLevel_lowProtection
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_lowProtection: CIProtectionLevel = CIProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @constant
 * @type {number}
 */
export
const lowProtection: CIProtectionLevel = CIProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_mediumProtection
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_mediumProtection: CIProtectionLevel = CIProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @constant
 * @type {number}
 */
export
const mediumProtection: CIProtectionLevel = CIProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_highProtection
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_highProtection: CIProtectionLevel = CIProtectionLevel.highProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highProtection
 * @constant
 * @type {number}
 */
export
const highProtection: CIProtectionLevel = CIProtectionLevel.highProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_fullProtection
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_fullProtection: CIProtectionLevel = CIProtectionLevel.fullProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullProtection
 * @constant
 * @type {number}
 */
export
const fullProtection: CIProtectionLevel = CIProtectionLevel.fullProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CIProtectionLevel: $.ASN1Decoder<CIProtectionLevel> = $._decodeEnumerated;

export
const _encode_CIProtectionLevel: $.ASN1Encoder<CIProtectionLevel> = $._encodeEnumerated;

/* eslint-enable */
