/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeQuotaType
 * @description
 *
 * Time Quota Type identifies the mechanism by which time based usage should
 * be reported - as defined in TS 32.299 [50].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeQuotaType  ::=  ENUMERATED {
 *    dISCRETETIMEPERIOD      ( 0 ),
 *    cONTINUOUSTIMEPERIOD    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TimeQuotaType {
    dISCRETETIMEPERIOD = 0,
    cONTINUOUSTIMEPERIOD = 1,
}

/**
 * @summary TimeQuotaType
 * @description
 *
 * Time Quota Type identifies the mechanism by which time based usage should
 * be reported - as defined in TS 32.299 [50].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeQuotaType  ::=  ENUMERATED {
 *    dISCRETETIMEPERIOD      ( 0 ),
 *    cONTINUOUSTIMEPERIOD    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TimeQuotaType = _enum_for_TimeQuotaType;

/**
 * @summary TimeQuotaType
 * @description
 *
 * Time Quota Type identifies the mechanism by which time based usage should
 * be reported - as defined in TS 32.299 [50].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeQuotaType  ::=  ENUMERATED {
 *    dISCRETETIMEPERIOD      ( 0 ),
 *    cONTINUOUSTIMEPERIOD    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TimeQuotaType = _enum_for_TimeQuotaType;

/**
 * @summary TimeQuotaType_dISCRETETIMEPERIOD
 * @constant
 * @type {number}
 */
export
const TimeQuotaType_dISCRETETIMEPERIOD = TimeQuotaType.dISCRETETIMEPERIOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISCRETETIMEPERIOD
 * @constant
 * @type {number}
 */
export
const dISCRETETIMEPERIOD = TimeQuotaType.dISCRETETIMEPERIOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeQuotaType_cONTINUOUSTIMEPERIOD
 * @constant
 * @type {number}
 */
export
const TimeQuotaType_cONTINUOUSTIMEPERIOD = TimeQuotaType.cONTINUOUSTIMEPERIOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONTINUOUSTIMEPERIOD
 * @constant
 * @type {number}
 */
export
const cONTINUOUSTIMEPERIOD = TimeQuotaType.cONTINUOUSTIMEPERIOD; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TimeQuotaType: $.ASN1Decoder<TimeQuotaType> = $._decodeEnumerated;

export
const _encode_TimeQuotaType: $.ASN1Encoder<TimeQuotaType> = $._encodeEnumerated;

/* eslint-enable */
