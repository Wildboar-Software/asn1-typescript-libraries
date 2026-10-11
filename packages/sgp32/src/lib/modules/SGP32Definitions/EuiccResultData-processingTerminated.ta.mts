/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccResultData_processingTerminated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccResultData-processingTerminated ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccResultData_processingTerminated = INTEGER;

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_resultSizeOverflow: EuiccResultData_processingTerminated = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_resultSizeOverflow
 * @constant
 * @type {number}
 */
export
const resultSizeOverflow: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_resultSizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_unknownOrDamagedCommand: EuiccResultData_processingTerminated = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_unknownOrDamagedCommand
 * @constant
 * @type {number}
 */
export
const unknownOrDamagedCommand: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_unknownOrDamagedCommand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_interruption: EuiccResultData_processingTerminated = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_interruption
 * @constant
 * @type {number}
 */
export
const interruption: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_interruption; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccResultData_processingTerminated_undefinedError: EuiccResultData_processingTerminated = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccResultData_processingTerminated_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccResultData_processingTerminated = EuiccResultData_processingTerminated_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccResultData_processingTerminated: $.ASN1Decoder<EuiccResultData_processingTerminated> = $._decodeInteger;
export const _encode_EuiccResultData_processingTerminated: $.ASN1Encoder<EuiccResultData_processingTerminated> = $._encodeInteger;


/* eslint-enable */
