/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DNDOCapabilityLevel
 * @description
 *
 * Calling user's DNDO capability level (DNDOCL), from 1 (lowest) to
 * 3 (highest). At least one value shall be offered (ECMA-193 §7.2.1;
 * ECMA-194 §6.2.1.2). SS-DNDO is allowed only when this value is
 * strictly greater than the called user's DNDPL (ECMA-193 §6.3.15;
 * ECMA-194 §6.6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
 * Calling user's DNDO capability level (DNDOCL), from 1 (lowest) to
 * 3 (highest). At least one value shall be offered (ECMA-193 §7.2.1;
 * ECMA-194 §6.2.1.2). SS-DNDO is allowed only when this value is
 * strictly greater than the called user's DNDPL (ECMA-193 §6.3.15;
 * ECMA-194 §6.6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
 * Calling user's DNDO capability level (DNDOCL), from 1 (lowest) to
 * 3 (highest). At least one value shall be offered (ECMA-193 §7.2.1;
 * ECMA-194 §6.2.1.2). SS-DNDO is allowed only when this value is
 * strictly greater than the called user's DNDPL (ECMA-193 §6.3.15;
 * ECMA-194 §6.6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
 * @description
 *
 * Lowest DNDOCL (1). Under ECMA-193 §6.3.15 this overrides only
 * DNDPL 0.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDOCapabilityLevel_overrideLowProt = DNDOCapabilityLevel.overrideLowProt satisfies DNDOCapabilityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideLowProt
 * @description Alias of {@link DNDOCapabilityLevel_overrideLowProt}.
 * @constant
 * @type {number}
 */
export
const overrideLowProt = DNDOCapabilityLevel.overrideLowProt satisfies DNDOCapabilityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDOCapabilityLevel_overrideMediumProt
 * @description
 *
 * DNDOCL 2. Under ECMA-193 §6.3.15 this overrides DNDPL 0 and 1,
 * and not DNDPL 2 or 3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDOCapabilityLevel_overrideMediumProt = DNDOCapabilityLevel.overrideMediumProt satisfies DNDOCapabilityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideMediumProt
 * @description Alias of {@link DNDOCapabilityLevel_overrideMediumProt}.
 * @constant
 * @type {number}
 */
export
const overrideMediumProt = DNDOCapabilityLevel.overrideMediumProt satisfies DNDOCapabilityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDOCapabilityLevel_overrideHighProt
 * @description
 *
 * Highest DNDOCL (3). Under ECMA-193 §6.3.15 this overrides DNDPL
 * 0, 1, and 2. It does not override full protection (DNDPL 3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDOCapabilityLevel_overrideHighProt = DNDOCapabilityLevel.overrideHighProt satisfies DNDOCapabilityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideHighProt
 * @description Alias of {@link DNDOCapabilityLevel_overrideHighProt}.
 * @constant
 * @type {number}
 */
export
const overrideHighProt = DNDOCapabilityLevel.overrideHighProt satisfies DNDOCapabilityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNDOCapabilityLevel: $.ASN1Decoder<DNDOCapabilityLevel> = $._decodeEnumerated;

export
const _encode_DNDOCapabilityLevel: $.ASN1Encoder<DNDOCapabilityLevel> = $._encodeEnumerated;

/* eslint-enable */
