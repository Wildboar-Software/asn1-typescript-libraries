/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfStart-specific ::= INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     ,   invalidGvcid                          (5)
 *     }
 * ```
 */
export
type DiagnosticRcfStart_specific = INTEGER;

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_outOfService: DiagnosticRcfStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_unableToComply: DiagnosticRcfStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStartTime: DiagnosticRcfStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStopTime: DiagnosticRcfStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_missingTimeValue: DiagnosticRcfStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidGvcid: DiagnosticRcfStart_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const invalidGvcid: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidGvcid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRcfStart_specific: $.ASN1Decoder<DiagnosticRcfStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRcfStart_specific: $.ASN1Encoder<DiagnosticRcfStart_specific> = $._encodeInteger;


/* eslint-enable */
