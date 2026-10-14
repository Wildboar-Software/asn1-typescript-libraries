/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRocfStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfStart-specific ::= INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  invalidStartTime        (2)
 *    ,  invalidStopTime         (3)
 *    ,  missingTimeValue        (4)
 *    ,  invalidGvcid            (5)
 *    ,  invalidControlWordType  (6)
 *    ,  invalidTcVcid           (7)
 *    ,  invalidUpdateMode       (8)
 *    }
 * ```
 */
export
type DiagnosticRocfStart_specific = INTEGER;

/**
 * @summary DiagnosticRocfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_outOfService: DiagnosticRocfStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_unableToComply: DiagnosticRocfStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidStartTime: DiagnosticRocfStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStartTime
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidStopTime: DiagnosticRocfStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStopTime
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_missingTimeValue: DiagnosticRocfStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_missingTimeValue
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidGvcid: DiagnosticRocfStart_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidGvcid
 * @constant
 * @type {number}
 */
export
const invalidGvcid: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidGvcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidControlWordType
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidControlWordType: DiagnosticRocfStart_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidControlWordType
 * @constant
 * @type {number}
 */
export
const invalidControlWordType: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidControlWordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidTcVcid
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidTcVcid: DiagnosticRocfStart_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidTcVcid
 * @constant
 * @type {number}
 */
export
const invalidTcVcid: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidTcVcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidUpdateMode
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidUpdateMode: DiagnosticRocfStart_specific = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidUpdateMode
 * @constant
 * @type {number}
 */
export
const invalidUpdateMode: DiagnosticRocfStart_specific = DiagnosticRocfStart_specific_invalidUpdateMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRocfStart_specific: $.ASN1Decoder<DiagnosticRocfStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRocfStart_specific: $.ASN1Encoder<DiagnosticRocfStart_specific> = $._encodeInteger;


/* eslint-enable */
