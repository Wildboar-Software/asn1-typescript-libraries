/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafStart-specific ::= INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     }
 * ```
 */
export
type DiagnosticRafStart_specific = INTEGER;

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_outOfService: DiagnosticRafStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRafStart_specific = DiagnosticRafStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_unableToComply: DiagnosticRafStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRafStart_specific = DiagnosticRafStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStartTime: DiagnosticRafStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRafStart_specific = DiagnosticRafStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStopTime: DiagnosticRafStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRafStart_specific = DiagnosticRafStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_missingTimeValue: DiagnosticRafStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRafStart_specific = DiagnosticRafStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRafStart_specific: $.ASN1Decoder<DiagnosticRafStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRafStart_specific: $.ASN1Encoder<DiagnosticRafStart_specific> = $._encodeInteger;


/* eslint-enable */
