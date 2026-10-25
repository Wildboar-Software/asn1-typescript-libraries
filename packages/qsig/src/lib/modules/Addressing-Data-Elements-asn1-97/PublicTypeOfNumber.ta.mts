/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PublicTypeOfNumber
 * @description
 *
 * Type of number for a public party number in the ITU-T E.163 and E.164 plan
 * (ECMA-165 Annex B Table B.1). ECMA-155 §7.2.1 Table 1 is the numbering-plan
 * alignment cited by §4.30.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     -- if used number digits carry prefix indicating type
 *     -- of number according to national recommendations.
 *     internationalNumber(1),
 *     nationalNumber(2),
 *     networkSpecificNumber(3),
 *     -- not used, value reserved
 *     subscriberNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PublicTypeOfNumber {
    unknown = 0,
    internationalNumber = 1,
    nationalNumber = 2,
    networkSpecificNumber = 3,
    subscriberNumber = 4,
    abbreviatedNumber = 6,
}

/**
 * @summary PublicTypeOfNumber
 * @description
 *
 * Type of number for a public party number in the ITU-T E.163 and E.164 plan
 * (ECMA-165 Annex B Table B.1). ECMA-155 §7.2.1 Table 1 is the numbering-plan
 * alignment cited by §4.30.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     -- if used number digits carry prefix indicating type
 *     -- of number according to national recommendations.
 *     internationalNumber(1),
 *     nationalNumber(2),
 *     networkSpecificNumber(3),
 *     -- not used, value reserved
 *     subscriberNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PublicTypeOfNumber = _enum_for_PublicTypeOfNumber;

/**
 * @summary PublicTypeOfNumber
 * @description
 *
 * Type of number for a public party number in the ITU-T E.163 and E.164 plan
 * (ECMA-165 Annex B Table B.1). ECMA-155 §7.2.1 Table 1 is the numbering-plan
 * alignment cited by §4.30.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *     unknown(0),
 *     -- if used number digits carry prefix indicating type
 *     -- of number according to national recommendations.
 *     internationalNumber(1),
 *     nationalNumber(2),
 *     networkSpecificNumber(3),
 *     -- not used, value reserved
 *     subscriberNumber(4),
 *     abbreviatedNumber(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PublicTypeOfNumber = _enum_for_PublicTypeOfNumber;

/**
 * @summary PublicTypeOfNumber_unknown
 * @description
 *
 * If used, the digits carry a prefix that indicates the type of number
 * according to national recommendations. ECMA-165 Annex B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_unknown = PublicTypeOfNumber.unknown satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link PublicTypeOfNumber_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown = PublicTypeOfNumber.unknown satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_internationalNumber
 * @description
 *
 * International number in the ITU-T E.164 plan. Table B.1 states that a public
 * party number uses E.163 and E.164, and does not add a further comment on this
 * value. ECMA-155 §7.2.1 Table 1 lists it under numbering-plan indicator E.164.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_internationalNumber = PublicTypeOfNumber.internationalNumber satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internationalNumber
 * @description Alias of {@link PublicTypeOfNumber_internationalNumber}.
 * @constant
 * @type {number}
 */
export
const internationalNumber = PublicTypeOfNumber.internationalNumber satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_nationalNumber
 * @description
 *
 * Table B.1 assigns `nationalNumber` and does not comment on it. ECMA-155
 * §7.2.1 Table 1 maps it to the E.164 national number.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_nationalNumber = PublicTypeOfNumber.nationalNumber satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nationalNumber
 * @description Alias of {@link PublicTypeOfNumber_nationalNumber}.
 * @constant
 * @type {number}
 */
export
const nationalNumber = PublicTypeOfNumber.nationalNumber satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_networkSpecificNumber
 * @description
 *
 * Not used; the value is reserved. ECMA-165 Annex B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_networkSpecificNumber = PublicTypeOfNumber.networkSpecificNumber satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecificNumber
 * @description Alias of {@link PublicTypeOfNumber_networkSpecificNumber}.
 * @constant
 * @type {number}
 */
export
const networkSpecificNumber = PublicTypeOfNumber.networkSpecificNumber satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_subscriberNumber
 * @description
 *
 * Table B.1 assigns `subscriberNumber` and does not comment on it. ECMA-155
 * §7.2.1 Table 1 maps it to the E.164 subscriber number.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_subscriberNumber = PublicTypeOfNumber.subscriberNumber satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNumber
 * @description Alias of {@link PublicTypeOfNumber_subscriberNumber}.
 * @constant
 * @type {number}
 */
export
const subscriberNumber = PublicTypeOfNumber.subscriberNumber satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_abbreviatedNumber
 * @description
 *
 * Valid only for a called-party number at the outgoing access. The network
 * substitutes the appropriate number. ECMA-165 Annex B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const PublicTypeOfNumber_abbreviatedNumber = PublicTypeOfNumber.abbreviatedNumber satisfies PublicTypeOfNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @description Alias of {@link PublicTypeOfNumber_abbreviatedNumber}.
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber = PublicTypeOfNumber.abbreviatedNumber satisfies PublicTypeOfNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PublicTypeOfNumber: $.ASN1Decoder<PublicTypeOfNumber> = $._decodeEnumerated;

export
const _encode_PublicTypeOfNumber: $.ASN1Encoder<PublicTypeOfNumber> = $._encodeEnumerated;

/* eslint-enable */
