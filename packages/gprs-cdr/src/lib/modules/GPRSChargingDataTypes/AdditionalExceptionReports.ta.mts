/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalExceptionReports  ::=  ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AdditionalExceptionReports {
    notAllowed = 0,
    allowed = 1,
}

/**
 * @summary AdditionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalExceptionReports  ::=  ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalExceptionReports = _enum_for_AdditionalExceptionReports;

/**
 * @summary AdditionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalExceptionReports  ::=  ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const AdditionalExceptionReports = _enum_for_AdditionalExceptionReports;

/**
 * @summary AdditionalExceptionReports_notAllowed
 * @constant
 * @type {number}
 */
export
const AdditionalExceptionReports_notAllowed: AdditionalExceptionReports = AdditionalExceptionReports.notAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: AdditionalExceptionReports = AdditionalExceptionReports.notAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalExceptionReports_allowed
 * @constant
 * @type {number}
 */
export
const AdditionalExceptionReports_allowed: AdditionalExceptionReports = AdditionalExceptionReports.allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowed
 * @constant
 * @type {number}
 */
export
const allowed: AdditionalExceptionReports = AdditionalExceptionReports.allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AdditionalExceptionReports: $.ASN1Decoder<AdditionalExceptionReports> = $._decodeEnumerated;

export
const _encode_AdditionalExceptionReports: $.ASN1Encoder<AdditionalExceptionReports> = $._encodeEnumerated;

/* eslint-enable */
