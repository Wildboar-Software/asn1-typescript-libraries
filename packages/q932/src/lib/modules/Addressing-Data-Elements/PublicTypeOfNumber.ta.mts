/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicTypeOfNumber
 * @description
 * 
 * Type of number for an E.164 public party number.
 *
 * `unknown`: if used, the digits carry a prefix that indicates the type of
 * number according to national recommendations. `networkSpecificNumber` is
 * reserved and not used. `abbreviatedNumber` is valid only for a called party
 * number at the outgoing access; the network substitutes the appropriate
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
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
 * Type of number for an E.164 public party number.
 *
 * `unknown`: if used, the digits carry a prefix that indicates the type of
 * number according to national recommendations. `networkSpecificNumber` is
 * reserved and not used. `abbreviatedNumber` is valid only for a called party
 * number at the outgoing access; the network substitutes the appropriate
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
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
 * Type of number for an E.164 public party number.
 *
 * `unknown`: if used, the digits carry a prefix that indicates the type of
 * number according to national recommendations. `networkSpecificNumber` is
 * reserved and not used. `abbreviatedNumber` is valid only for a called party
 * number at the outgoing access; the network substitutes the appropriate
 * number.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
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
 * according to national recommendations. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_unknown = PublicTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * If used, the digits carry a prefix that indicates the type of number
 * according to national recommendations. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const unknown = PublicTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_internationalNumber
 * @description
 * 
 * International E.164 number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_internationalNumber = PublicTypeOfNumber.internationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internationalNumber
 * @description
 * 
 * International E.164 number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const internationalNumber = PublicTypeOfNumber.internationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_nationalNumber
 * @description
 * 
 * National E.164 number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_nationalNumber = PublicTypeOfNumber.nationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nationalNumber
 * @description
 * 
 * National E.164 number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const nationalNumber = PublicTypeOfNumber.nationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_networkSpecificNumber
 * @description
 * 
 * Reserved. Not used. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_networkSpecificNumber = PublicTypeOfNumber.networkSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecificNumber
 * @description
 * 
 * Reserved. Not used. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const networkSpecificNumber = PublicTypeOfNumber.networkSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_subscriberNumber
 * @description
 * 
 * Subscriber number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_subscriberNumber = PublicTypeOfNumber.subscriberNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNumber
 * @description
 * 
 * Subscriber number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const subscriberNumber = PublicTypeOfNumber.subscriberNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_abbreviatedNumber
 * @description
 * 
 * Valid only for a called party number at the outgoing access. The network
 * substitutes the appropriate number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_abbreviatedNumber = PublicTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @description
 * 
 * Valid only for a called party number at the outgoing access. The network
 * substitutes the appropriate number. ITU-T Rec. Q.932 (05/1998) Annex C.
 * 
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber = PublicTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PublicTypeOfNumber: $.ASN1Decoder<PublicTypeOfNumber> = $._decodeEnumerated;
export const _encode_PublicTypeOfNumber: $.ASN1Encoder<PublicTypeOfNumber> = $._encodeEnumerated;


/* eslint-enable */
