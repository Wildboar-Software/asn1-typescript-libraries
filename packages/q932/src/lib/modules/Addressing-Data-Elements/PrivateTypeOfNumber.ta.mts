/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * Type of number for a private party number: unknown, level 2 regional, level 1
 * regional, PTN-specific, local, or abbreviated. Q.932 does not further define
 * the two regional levels.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
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
 * Type of number for a private party number: unknown, level 2 regional, level 1
 * regional, PTN-specific, local, or abbreviated. Q.932 does not further define
 * the two regional levels.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
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
 * Type of number for a private party number: unknown, level 2 regional, level 1
 * regional, PTN-specific, local, or abbreviated. Q.932 does not further define
 * the two regional levels.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
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
 * @description
 * 
 * Private number whose type is unknown. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_unknown = PrivateTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Private number whose type is unknown. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const unknown = PrivateTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level2RegionalNumber
 * @description
 * 
 * Level 2 regional private number. Q.932 does not further define this level.
 * ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level2RegionalNumber = PrivateTypeOfNumber.level2RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2RegionalNumber
 * @description
 * 
 * Level 2 regional private number. Q.932 does not further define this level.
 * ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const level2RegionalNumber = PrivateTypeOfNumber.level2RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level1RegionalNumber
 * @description
 * 
 * Level 1 regional private number. Q.932 does not further define this level.
 * ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level1RegionalNumber = PrivateTypeOfNumber.level1RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1RegionalNumber
 * @description
 * 
 * Level 1 regional private number. Q.932 does not further define this level.
 * ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const level1RegionalNumber = PrivateTypeOfNumber.level1RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_pTNSpecificNumber
 * @description
 * 
 * Private telecommunication network specific number. ITU-T Rec. Q.932 (05/1998)
 * Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_pTNSpecificNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTNSpecificNumber
 * @description
 * 
 * Private telecommunication network specific number. ITU-T Rec. Q.932 (05/1998)
 * Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const pTNSpecificNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_localNumber
 * @description
 * 
 * Local private number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_localNumber = PrivateTypeOfNumber.localNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localNumber
 * @description
 * 
 * Local private number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const localNumber = PrivateTypeOfNumber.localNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_abbreviatedNumber
 * @description
 * 
 * Abbreviated private number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_abbreviatedNumber = PrivateTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @description
 * 
 * Abbreviated private number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber = PrivateTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PrivateTypeOfNumber: $.ASN1Decoder<PrivateTypeOfNumber> = $._decodeEnumerated;
export const _encode_PrivateTypeOfNumber: $.ASN1Encoder<PrivateTypeOfNumber> = $._encodeEnumerated;


/* eslint-enable */
