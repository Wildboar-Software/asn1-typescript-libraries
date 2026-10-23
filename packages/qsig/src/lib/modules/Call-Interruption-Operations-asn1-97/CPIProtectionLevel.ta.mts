/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CPIProtectionLevel
 * @description
 *
 * Call Priority Interruption Protection Level (CPIPL) of a call, ECMA-264
 * §4.6 and §6.3.1. A call is protected when this value is greater than 0
 * (§6.9). An established call is interruptible when a priority call's CPICL
 * is strictly greater (§6.8.3.1). If the Interrupting PINX does not know the
 * CPIPL, it treats the call as no protection (0). Value 3 is total
 * protection and is not interruptible (§6.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
 * Call Priority Interruption Protection Level (CPIPL) of a call, ECMA-264
 * §4.6 and §6.3.1. A call is protected when this value is greater than 0
 * (§6.9). An established call is interruptible when a priority call's CPICL
 * is strictly greater (§6.8.3.1). If the Interrupting PINX does not know the
 * CPIPL, it treats the call as no protection (0). Value 3 is total
 * protection and is not interruptible (§6.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
 * Call Priority Interruption Protection Level (CPIPL) of a call, ECMA-264
 * §4.6 and §6.3.1. A call is protected when this value is greater than 0
 * (§6.9). An established call is interruptible when a priority call's CPICL
 * is strictly greater (§6.8.3.1). If the Interrupting PINX does not know the
 * CPIPL, it treats the call as no protection (0). Value 3 is total
 * protection and is not interruptible (§6.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
 * @description
 *
 * CPIPL 0. The call is not a protected call (ECMA-264 §4.16, §6.9). An
 * unknown CPIPL is treated as this value (§6.8.3.1). Any CPICL (1..3) is
 * strictly greater, so the call is interruptible.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPIProtectionLevel_noProtection: CPIProtectionLevel = CPIProtectionLevel.noProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noProtection
 * @description Alias of {@link CPIProtectionLevel_noProtection}.
 * @constant
 * @type {number}
 */
export
const noProtection: CPIProtectionLevel = CPIProtectionLevel.noProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_lowProtection
 * @description
 *
 * CPIPL 1. Interruptible by CPICL 2 or 3 only (ECMA-264 §6.8.3.1). ECMA-264
 * gives no further meaning to the name.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPIProtectionLevel_lowProtection: CPIProtectionLevel = CPIProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @description Alias of {@link CPIProtectionLevel_lowProtection}.
 * @constant
 * @type {number}
 */
export
const lowProtection: CPIProtectionLevel = CPIProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_mediumProtection
 * @description
 *
 * CPIPL 2. Interruptible by CPICL 3 only (ECMA-264 §6.8.3.1). ECMA-264 gives
 * no further meaning to the name.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPIProtectionLevel_mediumProtection: CPIProtectionLevel = CPIProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @description Alias of {@link CPIProtectionLevel_mediumProtection}.
 * @constant
 * @type {number}
 */
export
const mediumProtection: CPIProtectionLevel = CPIProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPIProtectionLevel_totalProtection
 * @description
 *
 * CPIPL 3: total protection. No CPICL in this module is strictly greater, so
 * the call is not interruptible (ECMA-264 §6.8, §6.8.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPIProtectionLevel_totalProtection: CPIProtectionLevel = CPIProtectionLevel.totalProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary totalProtection
 * @description Alias of {@link CPIProtectionLevel_totalProtection}.
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
