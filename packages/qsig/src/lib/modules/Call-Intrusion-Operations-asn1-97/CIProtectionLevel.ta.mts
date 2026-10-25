/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CIProtectionLevel
 * @description
 *
 * Call Intrusion Protection Level (ECMA-203 §6.3.1; ECMA-202
 * §6.2.1). Intrusion is accepted only when the calling user's CICL
 * is higher than the CIPL of both the called user and the unwanted
 * user (ECMA-203 §6.6.2.1.1; ECMA-202 §6.1.1). Values 0 and 3 are
 * required; 1 and 2 are optional (ECMA-202 §6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
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
 * Call Intrusion Protection Level (ECMA-203 §6.3.1; ECMA-202
 * §6.2.1). Intrusion is accepted only when the calling user's CICL
 * is higher than the CIPL of both the called user and the unwanted
 * user (ECMA-203 §6.6.2.1.1; ECMA-202 §6.1.1). Values 0 and 3 are
 * required; 1 and 2 are optional (ECMA-202 §6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
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
 * Call Intrusion Protection Level (ECMA-203 §6.3.1; ECMA-202
 * §6.2.1). Intrusion is accepted only when the calling user's CICL
 * is higher than the CIPL of both the called user and the unwanted
 * user (ECMA-203 §6.6.2.1.1; ECMA-202 §6.1.1). Values 0 and 3 are
 * required; 1 and 2 are optional (ECMA-202 §6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
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
const CIProtectionLevel: typeof _enum_for_CIProtectionLevel = _enum_for_CIProtectionLevel;

/**
 * @summary CIProtectionLevel_lowProtection
 * @description
 *
 * No protection. CIPL 0 (ECMA-202 §6.2.1; ECMA-203 §6.3.1). This is
 * the numerically lowest value. §6.6.2.1.2 says to assume the lowest
 * CIPL value if `callIntrusionGetCIPL` is rejected as unrecognized;
 * it does not name this enumeration.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_lowProtection: _enum_for_CIProtectionLevel.lowProtection = CIProtectionLevel.lowProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowProtection
 * @description Alias of {@link CIProtectionLevel_lowProtection}.
 * @constant
 * @type {number}
 */
export
const lowProtection: _enum_for_CIProtectionLevel.lowProtection = CIProtectionLevel.lowProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_mediumProtection
 * @description
 *
 * CIPL 1 (ECMA-203 §6.3.1). ECMA-202 §6.2.1 allows this value as an
 * implementation option and gives it no further meaning.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_mediumProtection: _enum_for_CIProtectionLevel.mediumProtection = CIProtectionLevel.mediumProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumProtection
 * @description Alias of {@link CIProtectionLevel_mediumProtection}.
 * @constant
 * @type {number}
 */
export
const mediumProtection: _enum_for_CIProtectionLevel.mediumProtection = CIProtectionLevel.mediumProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_highProtection
 * @description
 *
 * CIPL 2 (ECMA-203 §6.3.1). ECMA-202 §6.2.1 allows this value as an
 * implementation option and gives it no further meaning.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_highProtection: _enum_for_CIProtectionLevel.highProtection = CIProtectionLevel.highProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highProtection
 * @description Alias of {@link CIProtectionLevel_highProtection}.
 * @constant
 * @type {number}
 */
export
const highProtection: _enum_for_CIProtectionLevel.highProtection = CIProtectionLevel.highProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIProtectionLevel_fullProtection
 * @description
 *
 * Total protection. CIPL 3 (ECMA-202 §6.2.1; ECMA-203 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-202/
 * @constant
 * @type {number}
 */
export
const CIProtectionLevel_fullProtection: _enum_for_CIProtectionLevel.fullProtection = CIProtectionLevel.fullProtection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullProtection
 * @description Alias of {@link CIProtectionLevel_fullProtection}.
 * @constant
 * @type {number}
 */
export
const fullProtection: _enum_for_CIProtectionLevel.fullProtection = CIProtectionLevel.fullProtection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CIProtectionLevel: $.ASN1Decoder<CIProtectionLevel> = $._decodeEnumerated;

export
const _encode_CIProtectionLevel: $.ASN1Encoder<CIProtectionLevel> = $._encodeEnumerated;

/* eslint-enable */
