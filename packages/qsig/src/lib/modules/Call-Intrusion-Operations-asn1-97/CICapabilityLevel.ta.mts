/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CICapabilityLevel
 * @description
 *
 * Call Intrusion Capability Level of the calling user (ECMA-203
 * §6.3.1; ECMA-202 §6.2.1). Values run from 1 (lowest) to 3
 * (highest). Sent in `callIntrusionRequest` (ECMA-203 §6.6.1.1).
 * Intrusion proceeds only when this value is higher than the CIPL
 * of both the called user and the unwanted user (§6.6.2.1.1;
 * ECMA-202 §6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CICapabilityLevel  ::=  ENUMERATED {
 *     intrusionLowProt(1),
 *     intrusionMediumProt(2),
 *     intrusionHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CICapabilityLevel {
    intrusionLowProt = 1,
    intrusionMediumProt = 2,
    intrusionHighProt = 3,
}

/**
 * @summary CICapabilityLevel
 * @description
 *
 * Call Intrusion Capability Level of the calling user (ECMA-203
 * §6.3.1; ECMA-202 §6.2.1). Values run from 1 (lowest) to 3
 * (highest). Sent in `callIntrusionRequest` (ECMA-203 §6.6.1.1).
 * Intrusion proceeds only when this value is higher than the CIPL
 * of both the called user and the unwanted user (§6.6.2.1.1;
 * ECMA-202 §6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CICapabilityLevel  ::=  ENUMERATED {
 *     intrusionLowProt(1),
 *     intrusionMediumProt(2),
 *     intrusionHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CICapabilityLevel = _enum_for_CICapabilityLevel;

/**
 * @summary CICapabilityLevel
 * @description
 *
 * Call Intrusion Capability Level of the calling user (ECMA-203
 * §6.3.1; ECMA-202 §6.2.1). Values run from 1 (lowest) to 3
 * (highest). Sent in `callIntrusionRequest` (ECMA-203 §6.6.1.1).
 * Intrusion proceeds only when this value is higher than the CIPL
 * of both the called user and the unwanted user (§6.6.2.1.1;
 * ECMA-202 §6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CICapabilityLevel  ::=  ENUMERATED {
 *     intrusionLowProt(1),
 *     intrusionMediumProt(2),
 *     intrusionHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CICapabilityLevel = _enum_for_CICapabilityLevel;

/**
 * @summary CICapabilityLevel_intrusionLowProt
 * @description
 *
 * Lowest CICL, value 1 (ECMA-202 §6.2.1; ECMA-203 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionLowProt = CICapabilityLevel.intrusionLowProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionLowProt
 * @description Alias of {@link CICapabilityLevel_intrusionLowProt}.
 * @constant
 * @type {number}
 */
export
const intrusionLowProt = CICapabilityLevel.intrusionLowProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CICapabilityLevel_intrusionMediumProt
 * @description
 *
 * CICL value 2 (ECMA-202 §6.2.1; ECMA-203 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionMediumProt = CICapabilityLevel.intrusionMediumProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionMediumProt
 * @description Alias of {@link CICapabilityLevel_intrusionMediumProt}.
 * @constant
 * @type {number}
 */
export
const intrusionMediumProt = CICapabilityLevel.intrusionMediumProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CICapabilityLevel_intrusionHighProt
 * @description
 *
 * Highest CICL, value 3 (ECMA-202 §6.2.1; ECMA-203 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionHighProt = CICapabilityLevel.intrusionHighProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionHighProt
 * @description Alias of {@link CICapabilityLevel_intrusionHighProt}.
 * @constant
 * @type {number}
 */
export
const intrusionHighProt = CICapabilityLevel.intrusionHighProt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CICapabilityLevel: $.ASN1Decoder<CICapabilityLevel> = $._decodeEnumerated;

export
const _encode_CICapabilityLevel: $.ASN1Encoder<CICapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
