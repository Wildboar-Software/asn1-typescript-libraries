/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CPICapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPICapabilityLevel  ::=  ENUMERATED {
 *     interruptionLowPriority(1),
 *     interruptionMediumPriority(2),
 *     interruptionHighPriority(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CPICapabilityLevel {
    interruptionLowPriority = 1,
    interruptionMediumPriority = 2,
    interruptionHighPriority = 3,
}

/**
 * @summary CPICapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPICapabilityLevel  ::=  ENUMERATED {
 *     interruptionLowPriority(1),
 *     interruptionMediumPriority(2),
 *     interruptionHighPriority(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CPICapabilityLevel = _enum_for_CPICapabilityLevel;

/**
 * @summary CPICapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPICapabilityLevel  ::=  ENUMERATED {
 *     interruptionLowPriority(1),
 *     interruptionMediumPriority(2),
 *     interruptionHighPriority(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CPICapabilityLevel = _enum_for_CPICapabilityLevel;

/**
 * @summary CPICapabilityLevel_interruptionLowPriority
 * @constant
 * @type {number}
 */
export
const CPICapabilityLevel_interruptionLowPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionLowPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionLowPriority
 * @constant
 * @type {number}
 */
export
const interruptionLowPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionLowPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPICapabilityLevel_interruptionMediumPriority
 * @constant
 * @type {number}
 */
export
const CPICapabilityLevel_interruptionMediumPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionMediumPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionMediumPriority
 * @constant
 * @type {number}
 */
export
const interruptionMediumPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionMediumPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPICapabilityLevel_interruptionHighPriority
 * @constant
 * @type {number}
 */
export
const CPICapabilityLevel_interruptionHighPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionHighPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionHighPriority
 * @constant
 * @type {number}
 */
export
const interruptionHighPriority: CPICapabilityLevel = CPICapabilityLevel.interruptionHighPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CPICapabilityLevel: $.ASN1Decoder<CPICapabilityLevel> = $._decodeEnumerated;

export
const _encode_CPICapabilityLevel: $.ASN1Encoder<CPICapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
