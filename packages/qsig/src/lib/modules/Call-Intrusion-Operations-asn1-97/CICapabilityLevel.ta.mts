/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CICapabilityLevel
 * @description
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
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionLowProt: CICapabilityLevel = CICapabilityLevel.intrusionLowProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionLowProt
 * @constant
 * @type {number}
 */
export
const intrusionLowProt: CICapabilityLevel = CICapabilityLevel.intrusionLowProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CICapabilityLevel_intrusionMediumProt
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionMediumProt: CICapabilityLevel = CICapabilityLevel.intrusionMediumProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionMediumProt
 * @constant
 * @type {number}
 */
export
const intrusionMediumProt: CICapabilityLevel = CICapabilityLevel.intrusionMediumProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CICapabilityLevel_intrusionHighProt
 * @constant
 * @type {number}
 */
export
const CICapabilityLevel_intrusionHighProt: CICapabilityLevel = CICapabilityLevel.intrusionHighProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusionHighProt
 * @constant
 * @type {number}
 */
export
const intrusionHighProt: CICapabilityLevel = CICapabilityLevel.intrusionHighProt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CICapabilityLevel: $.ASN1Decoder<CICapabilityLevel> = $._decodeEnumerated;

export
const _encode_CICapabilityLevel: $.ASN1Encoder<CICapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
