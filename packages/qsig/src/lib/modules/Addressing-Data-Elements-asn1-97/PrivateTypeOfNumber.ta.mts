/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivateTypeOfNumber
 * @description
 *
 * Type of number for a private numbering plan (ECMA-165 Annex B Table B.1). The
 * regional levels are those of ECMA-155 §7.4.1. Table B.1 itself comments on
 * none of these values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     level2RegionalNumber(1),
 *     level1RegionalNumber(2),
 *     pISNSpecificNumber(3),
 *     localNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrivateTypeOfNumber {
    unknown = 0,
    level2RegionalNumber = 1,
    level1RegionalNumber = 2,
    pISNSpecificNumber = 3,
    localNumber = 4,
    abbreviatedNumber = 6,
}

/**
 * @summary PrivateTypeOfNumber
 * @description
 *
 * Type of number for a private numbering plan (ECMA-165 Annex B Table B.1). The
 * regional levels are those of ECMA-155 §7.4.1. Table B.1 itself comments on
 * none of these values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     level2RegionalNumber(1),
 *     level1RegionalNumber(2),
 *     pISNSpecificNumber(3),
 *     localNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PrivateTypeOfNumber = _enum_for_PrivateTypeOfNumber;

/**
 * @summary PrivateTypeOfNumber
 * @description
 *
 * Type of number for a private numbering plan (ECMA-165 Annex B Table B.1). The
 * regional levels are those of ECMA-155 §7.4.1. Table B.1 itself comments on
 * none of these values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     level2RegionalNumber(1),
 *     level1RegionalNumber(2),
 *     pISNSpecificNumber(3),
 *     localNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PrivateTypeOfNumber: typeof _enum_for_PrivateTypeOfNumber = _enum_for_PrivateTypeOfNumber;

/**
 * @summary PrivateTypeOfNumber_unknown
 * @description
 *
 * Table B.1 assigns `unknown` and does not comment on it. For a private
 * numbering plan, ECMA-155 §7.4.1 says the regional level is then taken from
 * the digits, for example from a prefix.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_unknown: _enum_for_PrivateTypeOfNumber.unknown = PrivateTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link PrivateTypeOfNumber_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_PrivateTypeOfNumber.unknown = PrivateTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level2RegionalNumber
 * @description
 *
 * Level 2 regional number of a private numbering plan. ECMA-155 §7.4.1: the
 * highest level covers the whole plan, and only a complete number is
 * significant throughout that plan. Table B.1 names the value; ECMA-165 §4.30
 * points at ECMA-155 for a PISN number.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_level2RegionalNumber: _enum_for_PrivateTypeOfNumber.level2RegionalNumber = PrivateTypeOfNumber.level2RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2RegionalNumber
 * @description Alias of {@link PrivateTypeOfNumber_level2RegionalNumber}.
 * @constant
 * @type {number}
 */
export
const level2RegionalNumber: _enum_for_PrivateTypeOfNumber.level2RegionalNumber = PrivateTypeOfNumber.level2RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level1RegionalNumber
 * @description
 *
 * Level 1 regional number. Significant only inside its level 1 region; outside
 * that region a higher-level form is used (ECMA-155 §7.4.1). Table B.1 assigns
 * the value and does not comment on it.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_level1RegionalNumber: _enum_for_PrivateTypeOfNumber.level1RegionalNumber = PrivateTypeOfNumber.level1RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1RegionalNumber
 * @description Alias of {@link PrivateTypeOfNumber_level1RegionalNumber}.
 * @constant
 * @type {number}
 */
export
const level1RegionalNumber: _enum_for_PrivateTypeOfNumber.level1RegionalNumber = PrivateTypeOfNumber.level1RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_pISNSpecificNumber
 * @description
 *
 * Table B.1 assigns `pISNSpecificNumber` and does not define it. ECMA-143 Table
 * 26, which ECMA-165 uses for basic call, also names "PISN specific number" and
 * does not define it. ECMA-155 §7.2.1 Table 1 marks the corresponding public
 * network-specific codepoint reserved for the private numbering plan.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_pISNSpecificNumber: _enum_for_PrivateTypeOfNumber.pISNSpecificNumber = PrivateTypeOfNumber.pISNSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pISNSpecificNumber
 * @description Alias of {@link PrivateTypeOfNumber_pISNSpecificNumber}.
 * @constant
 * @type {number}
 */
export
const pISNSpecificNumber: _enum_for_PrivateTypeOfNumber.pISNSpecificNumber = PrivateTypeOfNumber.pISNSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_localNumber
 * @description
 *
 * Level 0 regional number, called a local number (ECMA-155 §7.4.1). Table B.1
 * assigns `localNumber` and does not comment on it.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_localNumber: _enum_for_PrivateTypeOfNumber.localNumber = PrivateTypeOfNumber.localNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localNumber
 * @description Alias of {@link PrivateTypeOfNumber_localNumber}.
 * @constant
 * @type {number}
 */
export
const localNumber: _enum_for_PrivateTypeOfNumber.localNumber = PrivateTypeOfNumber.localNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_abbreviatedNumber
 * @description
 *
 * Table B.1 assigns `abbreviatedNumber` for a private number and does not
 * define it. ECMA-155 §7.2.1 Table 1 marks abbreviated number reserved for the
 * private numbering plan.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PrivateTypeOfNumber_abbreviatedNumber: _enum_for_PrivateTypeOfNumber.abbreviatedNumber = PrivateTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @description Alias of {@link PrivateTypeOfNumber_abbreviatedNumber}.
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber: _enum_for_PrivateTypeOfNumber.abbreviatedNumber = PrivateTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PrivateTypeOfNumber: $.ASN1Decoder<PrivateTypeOfNumber> = $._decodeEnumerated;

export
const _encode_PrivateTypeOfNumber: $.ASN1Encoder<PrivateTypeOfNumber> = $._encodeEnumerated;

/* eslint-enable */
