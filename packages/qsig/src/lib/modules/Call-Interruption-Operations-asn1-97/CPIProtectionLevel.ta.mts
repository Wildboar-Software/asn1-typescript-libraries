/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CPIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIProtectionLevel  ::=  ENUMERATED {
 *     noProtection(0),
 *     lowProtection(1),
 *     mediumProtection(2),
 *     totalProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CPIProtectionLevel {
    noProtection = 0,
    lowProtection = 1,
    mediumProtection = 2,
    totalProtection = 3,
}

/**
 * @summary CPIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIProtectionLevel  ::=  ENUMERATED {
 *     noProtection(0),
 *     lowProtection(1),
 *     mediumProtection(2),
 *     totalProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CPIProtectionLevel = _enum_for_CPIProtectionLevel;

/**
 * @summary CPIProtectionLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIProtectionLevel  ::=  ENUMERATED {
 *     noProtection(0),
 *     lowProtection(1),
 *     mediumProtection(2),
 *     totalProtection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CPIProtectionLevel = _enum_for_CPIProtectionLevel;

/**
 * @summary CPIProtectionLevel_noProtection
 * @constant
 * @type {number}
 */
export
const CPIProtectionLevel_noProtection: CPIProtectionLevel = CPIProtectionLevel.noProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noProtection
 * @constant
 * @type {number}
 */
export
const noProtection: CPIProtectionLevel = CPIProtectionLevel.noProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_lowProtection
 * @constant
 * @type {number}
 */
export
const CPIProtectionLevel_lowProtection: CPIProtectionLevel = CPIProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @constant
 * @type {number}
 */
export
const lowProtection: CPIProtectionLevel = CPIProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_mediumProtection
 * @constant
 * @type {number}
 */
export
const CPIProtectionLevel_mediumProtection: CPIProtectionLevel = CPIProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @constant
 * @type {number}
 */
export
const mediumProtection: CPIProtectionLevel = CPIProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_totalProtection
 * @constant
 * @type {number}
 */
export
const CPIProtectionLevel_totalProtection: CPIProtectionLevel = CPIProtectionLevel.totalProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary totalProtection
 * @constant
 * @type {number}
 */
export
const totalProtection: CPIProtectionLevel = CPIProtectionLevel.totalProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CPIProtectionLevel: $.ASN1Decoder<CPIProtectionLevel> = $._decodeEnumerated;

export
const _encode_CPIProtectionLevel: $.ASN1Encoder<CPIProtectionLevel> = $._encodeEnumerated;

/* eslint-enable */
