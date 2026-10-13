/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuTransferData_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuTransferData-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticCltuTransferData_specific = INTEGER;

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToProcess: DiagnosticCltuTransferData_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const unableToProcess: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToStore: DiagnosticCltuTransferData_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const unableToStore: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToStore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_outOfSequence: DiagnosticCltuTransferData_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @constant
 * @type {number}
 */
export
const outOfSequence: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_outOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_inconsistentTimeRange: DiagnosticCltuTransferData_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const inconsistentTimeRange: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_inconsistentTimeRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidTime: DiagnosticCltuTransferData_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const invalidTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_lateSldu: DiagnosticCltuTransferData_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const lateSldu: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_lateSldu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidDelayTime: DiagnosticCltuTransferData_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const invalidDelayTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_cltuError: DiagnosticCltuTransferData_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @constant
 * @type {number}
 */
export
const cltuError: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_cltuError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuTransferData_specific: $.ASN1Decoder<DiagnosticCltuTransferData_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuTransferData_specific: $.ASN1Encoder<DiagnosticCltuTransferData_specific> = $._encodeInteger;


/* eslint-enable */
