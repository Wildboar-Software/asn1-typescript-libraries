/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APNRateControlParameters_additionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters-additionalExceptionReports ::= ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_APNRateControlParameters_additionalExceptionReports {
    notAllowed = 0,
    allowed = 1,
}

/**
 * @summary APNRateControlParameters_additionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters-additionalExceptionReports ::= ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type APNRateControlParameters_additionalExceptionReports = _enum_for_APNRateControlParameters_additionalExceptionReports;

/**
 * @summary APNRateControlParameters_additionalExceptionReports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters-additionalExceptionReports ::= ENUMERATED {
 *    notAllowed    ( 0 ),
 *    allowed       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const APNRateControlParameters_additionalExceptionReports: typeof _enum_for_APNRateControlParameters_additionalExceptionReports = _enum_for_APNRateControlParameters_additionalExceptionReports;

/**
 * @summary APNRateControlParameters_additionalExceptionReports_notAllowed
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_additionalExceptionReports_notAllowed: _enum_for_APNRateControlParameters_additionalExceptionReports.notAllowed = APNRateControlParameters_additionalExceptionReports.notAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: _enum_for_APNRateControlParameters_additionalExceptionReports.notAllowed = APNRateControlParameters_additionalExceptionReports.notAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APNRateControlParameters_additionalExceptionReports_allowed
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_additionalExceptionReports_allowed: _enum_for_APNRateControlParameters_additionalExceptionReports.allowed = APNRateControlParameters_additionalExceptionReports.allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowed
 * @constant
 * @type {number}
 */
export
const allowed: _enum_for_APNRateControlParameters_additionalExceptionReports.allowed = APNRateControlParameters_additionalExceptionReports.allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APNRateControlParameters_additionalExceptionReports: $.ASN1Decoder<APNRateControlParameters_additionalExceptionReports> = $._decodeEnumerated;

export
const _encode_APNRateControlParameters_additionalExceptionReports: $.ASN1Encoder<APNRateControlParameters_additionalExceptionReports> = $._encodeEnumerated;

/* eslint-enable */
