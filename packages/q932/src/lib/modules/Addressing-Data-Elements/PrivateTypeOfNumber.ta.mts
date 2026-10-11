/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrivateTypeOfNumber {
    unknown = 0,
    level2RegionalNumber = 1,
    level1RegionalNumber = 2,
    pTNSpecificNumber = 3,
    localNumber = 4,
    abbreviatedNumber = 6,
}

/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
const PrivateTypeOfNumber = _enum_for_PrivateTypeOfNumber;

/**
 * @summary PrivateTypeOfNumber_unknown
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_unknown: PrivateTypeOfNumber = PrivateTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PrivateTypeOfNumber = PrivateTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level2RegionalNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level2RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level2RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2RegionalNumber
 * @constant
 * @type {number}
 */
export
const level2RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level2RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level1RegionalNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level1RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level1RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1RegionalNumber
 * @constant
 * @type {number}
 */
export
const level1RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level1RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_pTNSpecificNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_pTNSpecificNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTNSpecificNumber
 * @constant
 * @type {number}
 */
export
const pTNSpecificNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_localNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_localNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.localNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localNumber
 * @constant
 * @type {number}
 */
export
const localNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.localNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_abbreviatedNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PrivateTypeOfNumber: $.ASN1Decoder<PrivateTypeOfNumber> = $._decodeEnumerated;
export const _encode_PrivateTypeOfNumber: $.ASN1Encoder<PrivateTypeOfNumber> = $._encodeEnumerated;

/* eslint-enable */
