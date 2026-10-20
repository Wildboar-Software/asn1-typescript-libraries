/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNDOCapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDOCapabilityLevel  ::=  ENUMERATED {
 *     overrideLowProt(1),
 *     overrideMediumProt(2),
 *     overrideHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DNDOCapabilityLevel {
    overrideLowProt = 1,
    overrideMediumProt = 2,
    overrideHighProt = 3,
}

/**
 * @summary DNDOCapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDOCapabilityLevel  ::=  ENUMERATED {
 *     overrideLowProt(1),
 *     overrideMediumProt(2),
 *     overrideHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DNDOCapabilityLevel = _enum_for_DNDOCapabilityLevel;

/**
 * @summary DNDOCapabilityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDOCapabilityLevel  ::=  ENUMERATED {
 *     overrideLowProt(1),
 *     overrideMediumProt(2),
 *     overrideHighProt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DNDOCapabilityLevel = _enum_for_DNDOCapabilityLevel;

/**
 * @summary DNDOCapabilityLevel_overrideLowProt
 * @constant
 * @type {number}
 */
export
const DNDOCapabilityLevel_overrideLowProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideLowProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideLowProt
 * @constant
 * @type {number}
 */
export
const overrideLowProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideLowProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDOCapabilityLevel_overrideMediumProt
 * @constant
 * @type {number}
 */
export
const DNDOCapabilityLevel_overrideMediumProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideMediumProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideMediumProt
 * @constant
 * @type {number}
 */
export
const overrideMediumProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideMediumProt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDOCapabilityLevel_overrideHighProt
 * @constant
 * @type {number}
 */
export
const DNDOCapabilityLevel_overrideHighProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideHighProt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideHighProt
 * @constant
 * @type {number}
 */
export
const overrideHighProt: DNDOCapabilityLevel = DNDOCapabilityLevel.overrideHighProt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNDOCapabilityLevel: $.ASN1Decoder<DNDOCapabilityLevel> = $._decodeEnumerated;

export
const _encode_DNDOCapabilityLevel: $.ASN1Encoder<DNDOCapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
