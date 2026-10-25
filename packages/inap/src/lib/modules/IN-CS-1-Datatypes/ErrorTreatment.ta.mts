/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const ErrorTreatment: typeof _enum_for_ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment_reportErrorToScf
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_reportErrorToScf: _enum_for_ErrorTreatment.reportErrorToScf = ErrorTreatment.reportErrorToScf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reportErrorToScf
 * @constant
 * @type {number}
 */
export
const reportErrorToScf: _enum_for_ErrorTreatment.reportErrorToScf = ErrorTreatment.reportErrorToScf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_help
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_help: _enum_for_ErrorTreatment.help = ErrorTreatment.help; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary help
 * @constant
 * @type {number}
 */
export
const help: _enum_for_ErrorTreatment.help = ErrorTreatment.help; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_repeatPrompt
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_repeatPrompt: _enum_for_ErrorTreatment.repeatPrompt = ErrorTreatment.repeatPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatPrompt
 * @constant
 * @type {number}
 */
export
const repeatPrompt: _enum_for_ErrorTreatment.repeatPrompt = ErrorTreatment.repeatPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ErrorTreatment(el: _Element): ErrorTreatment {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ErrorTreatment.reportErrorToScf: return ErrorTreatment.reportErrorToScf;
        case ErrorTreatment.help: return ErrorTreatment.help;
        case ErrorTreatment.repeatPrompt: return ErrorTreatment.repeatPrompt;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ErrorTreatment.",
                el,
            );
    }
}

export
const _encode_ErrorTreatment: $.ASN1Encoder<ErrorTreatment> = $._encodeEnumerated as $.ASN1Encoder<ErrorTreatment>;

/* eslint-enable */
