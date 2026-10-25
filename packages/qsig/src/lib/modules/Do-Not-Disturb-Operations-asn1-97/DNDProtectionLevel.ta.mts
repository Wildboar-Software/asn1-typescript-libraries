/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DNDProtectionLevel
 * @description
 *
 * Served user's DND protection level (DNDPL). SS-DNDO is allowed
 * only when the calling user's DNDOCL is strictly greater than this
 * value (ECMA-193 §6.3.15; ECMA-194 §6.6.1.1). 0 means no protection
 * against DNDO and 3 means total protection. Values 0 and 3 shall
 * be offered; 1 and 2 are an implementation option (ECMA-193 §6.2.1;
 * ECMA-194 §6.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
 * Served user's DND protection level (DNDPL). SS-DNDO is allowed
 * only when the calling user's DNDOCL is strictly greater than this
 * value (ECMA-193 §6.3.15; ECMA-194 §6.6.1.1). 0 means no protection
 * against DNDO and 3 means total protection. Values 0 and 3 shall
 * be offered; 1 and 2 are an implementation option (ECMA-193 §6.2.1;
 * ECMA-194 §6.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
 * Served user's DND protection level (DNDPL). SS-DNDO is allowed
 * only when the calling user's DNDOCL is strictly greater than this
 * value (ECMA-193 §6.3.15; ECMA-194 §6.6.1.1). 0 means no protection
 * against DNDO and 3 means total protection. Values 0 and 3 shall
 * be offered; 1 and 2 are an implementation option (ECMA-193 §6.2.1;
 * ECMA-194 §6.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
const DNDProtectionLevel: typeof _enum_for_DNDProtectionLevel = _enum_for_DNDProtectionLevel;

/**
 * @summary DNDProtectionLevel_lowProtection
 * @description
 *
 * DNDPL 0: no protection against SS-DNDO. Any DNDOCL (1..3) is
 * strictly greater, so override is allowed (ECMA-193 §6.2.1,
 * §6.3.15).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDProtectionLevel_lowProtection: _enum_for_DNDProtectionLevel.lowProtection = DNDProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @description Alias of {@link DNDProtectionLevel_lowProtection}.
 * @constant
 * @type {number}
 */
export
const lowProtection: _enum_for_DNDProtectionLevel.lowProtection = DNDProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_mediumProtection
 * @description
 *
 * DNDPL 1. Offered only as an implementation option. ECMA-193 §6.2.1
 * gives no meaning beyond the numeric order used in §6.3.15:
 * override requires DNDOCL > 1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDProtectionLevel_mediumProtection: _enum_for_DNDProtectionLevel.mediumProtection = DNDProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @description Alias of {@link DNDProtectionLevel_mediumProtection}.
 * @constant
 * @type {number}
 */
export
const mediumProtection: _enum_for_DNDProtectionLevel.mediumProtection = DNDProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_highProtection
 * @description
 *
 * DNDPL 2. Offered only as an implementation option. ECMA-193 §6.2.1
 * gives no meaning beyond the numeric order used in §6.3.15:
 * override requires DNDOCL > 2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDProtectionLevel_highProtection: _enum_for_DNDProtectionLevel.highProtection = DNDProtectionLevel.highProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highProtection
 * @description Alias of {@link DNDProtectionLevel_highProtection}.
 * @constant
 * @type {number}
 */
export
const highProtection: _enum_for_DNDProtectionLevel.highProtection = DNDProtectionLevel.highProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNDProtectionLevel_fullProtection
 * @description
 *
 * DNDPL 3: total protection against SS-DNDO. No DNDOCL in 1..3 is
 * strictly greater, so override does not succeed (ECMA-193 §6.2.1,
 * §6.3.15).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export
const DNDProtectionLevel_fullProtection: _enum_for_DNDProtectionLevel.fullProtection = DNDProtectionLevel.fullProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullProtection
 * @description Alias of {@link DNDProtectionLevel_fullProtection}.
 * @constant
 * @type {number}
 */
export
const fullProtection: _enum_for_DNDProtectionLevel.fullProtection = DNDProtectionLevel.fullProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNDProtectionLevel: $.ASN1Decoder<DNDProtectionLevel> = $._decodeEnumerated;

export
const _encode_DNDProtectionLevel: $.ASN1Encoder<DNDProtectionLevel> = $._encodeEnumerated;

/* eslint-enable */
