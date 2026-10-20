/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment  ::=  ENUMERATED {reportErrorToScf(0), help(1), repeatPrompt(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ErrorTreatment {
    reportErrorToScf = 0,
    help = 1,
    repeatPrompt = 2,
}

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment  ::=  ENUMERATED {reportErrorToScf(0), help(1), repeatPrompt(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment  ::=  ENUMERATED {reportErrorToScf(0), help(1), repeatPrompt(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment_reportErrorToScf
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_reportErrorToScf: ErrorTreatment = ErrorTreatment.reportErrorToScf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reportErrorToScf
 * @constant
 * @type {number}
 */
export
const reportErrorToScf: ErrorTreatment = ErrorTreatment.reportErrorToScf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_help
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_help: ErrorTreatment = ErrorTreatment.help; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary help
 * @constant
 * @type {number}
 */
export
const help: ErrorTreatment = ErrorTreatment.help; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_repeatPrompt
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatPrompt
 * @constant
 * @type {number}
 */
export
const repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ErrorTreatment: $.ASN1Decoder<ErrorTreatment> = $._decodeEnumerated;

export
const _encode_ErrorTreatment: $.ASN1Encoder<ErrorTreatment> = $._encodeEnumerated;

/* eslint-enable */
