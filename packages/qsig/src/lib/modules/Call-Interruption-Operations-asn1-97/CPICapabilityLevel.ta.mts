/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CPICapabilityLevel
 * @description
 *
 * Calling user's Call Priority Interruption Capability Level (CPICL),
 * ECMA-264 §4.5 and §6.3.1. A call with a CPICL greater than 0 is a priority
 * call (§6.8). Interruption of an established call requires this value to be
 * strictly greater than that call's CPIPL (§6.8.3.1). Calls with CPIPL 3
 * (total protection) are excepted (§6.8). ECMA-264 does not define meanings
 * for the three names beyond that numeric order. There is no zero value: a
 * non-priority call is one to which no CPICL is assigned (§4.14).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
 * Calling user's Call Priority Interruption Capability Level (CPICL),
 * ECMA-264 §4.5 and §6.3.1. A call with a CPICL greater than 0 is a priority
 * call (§6.8). Interruption of an established call requires this value to be
 * strictly greater than that call's CPIPL (§6.8.3.1). Calls with CPIPL 3
 * (total protection) are excepted (§6.8). ECMA-264 does not define meanings
 * for the three names beyond that numeric order. There is no zero value: a
 * non-priority call is one to which no CPICL is assigned (§4.14).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
 * Calling user's Call Priority Interruption Capability Level (CPICL),
 * ECMA-264 §4.5 and §6.3.1. A call with a CPICL greater than 0 is a priority
 * call (§6.8). Interruption of an established call requires this value to be
 * strictly greater than that call's CPIPL (§6.8.3.1). Calls with CPIPL 3
 * (total protection) are excepted (§6.8). ECMA-264 does not define meanings
 * for the three names beyond that numeric order. There is no zero value: a
 * non-priority call is one to which no CPICL is assigned (§4.14).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
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
const CPICapabilityLevel: typeof _enum_for_CPICapabilityLevel = _enum_for_CPICapabilityLevel;

/**
 * @summary CPICapabilityLevel_interruptionLowPriority
 * @description
 *
 * CPICL 1. Under ECMA-264 §6.8.3.1 this interrupts only CPIPL 0. ECMA-264
 * gives no further meaning to the name.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPICapabilityLevel_interruptionLowPriority: _enum_for_CPICapabilityLevel.interruptionLowPriority = CPICapabilityLevel.interruptionLowPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionLowPriority
 * @description Alias of {@link CPICapabilityLevel_interruptionLowPriority}.
 * @constant
 * @type {number}
 */
export
const interruptionLowPriority: _enum_for_CPICapabilityLevel.interruptionLowPriority = CPICapabilityLevel.interruptionLowPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPICapabilityLevel_interruptionMediumPriority
 * @description
 *
 * CPICL 2. Under ECMA-264 §6.8.3.1 this interrupts CPIPL 0 and 1, and not
 * CPIPL 2 or 3. ECMA-264 gives no further meaning to the name.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPICapabilityLevel_interruptionMediumPriority: _enum_for_CPICapabilityLevel.interruptionMediumPriority = CPICapabilityLevel.interruptionMediumPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionMediumPriority
 * @description Alias of {@link CPICapabilityLevel_interruptionMediumPriority}.
 * @constant
 * @type {number}
 */
export
const interruptionMediumPriority: _enum_for_CPICapabilityLevel.interruptionMediumPriority = CPICapabilityLevel.interruptionMediumPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CPICapabilityLevel_interruptionHighPriority
 * @description
 *
 * CPICL 3, the highest capability in this enumeration. It interrupts CPIPL
 * 0, 1, and 2. It does not interrupt total protection (CPIPL 3), because the
 * capability is not strictly greater (ECMA-264 §6.8, §6.8.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export
const CPICapabilityLevel_interruptionHighPriority: _enum_for_CPICapabilityLevel.interruptionHighPriority = CPICapabilityLevel.interruptionHighPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptionHighPriority
 * @description Alias of {@link CPICapabilityLevel_interruptionHighPriority}.
 * @constant
 * @type {number}
 */
export
const interruptionHighPriority: _enum_for_CPICapabilityLevel.interruptionHighPriority = CPICapabilityLevel.interruptionHighPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CPICapabilityLevel: $.ASN1Decoder<CPICapabilityLevel> = $._decodeEnumerated;

export
const _encode_CPICapabilityLevel: $.ASN1Encoder<CPICapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
