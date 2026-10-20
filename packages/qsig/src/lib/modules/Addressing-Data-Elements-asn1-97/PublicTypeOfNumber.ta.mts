/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicTypeOfNumber
 * @description
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
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_unknown: PublicTypeOfNumber = PublicTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PublicTypeOfNumber = PublicTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_internationalNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_internationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.internationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internationalNumber
 * @constant
 * @type {number}
 */
export
const internationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.internationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_nationalNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_nationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.nationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nationalNumber
 * @constant
 * @type {number}
 */
export
const nationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.nationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_networkSpecificNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_networkSpecificNumber: PublicTypeOfNumber = PublicTypeOfNumber.networkSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecificNumber
 * @constant
 * @type {number}
 */
export
const networkSpecificNumber: PublicTypeOfNumber = PublicTypeOfNumber.networkSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_subscriberNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_subscriberNumber: PublicTypeOfNumber = PublicTypeOfNumber.subscriberNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNumber
 * @constant
 * @type {number}
 */
export
const subscriberNumber: PublicTypeOfNumber = PublicTypeOfNumber.subscriberNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_abbreviatedNumber: PublicTypeOfNumber = PublicTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber: PublicTypeOfNumber = PublicTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PublicTypeOfNumber: $.ASN1Decoder<PublicTypeOfNumber> = $._decodeEnumerated;

export
const _encode_PublicTypeOfNumber: $.ASN1Encoder<PublicTypeOfNumber> = $._encodeEnumerated;

/* eslint-enable */
