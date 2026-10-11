/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetEimResult ::= INTEGER {
 *     ok(0),
 *     nothingToDelete(1),
 *     eimResetNotSupported(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccMemoryResetResponse_resetEimResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_ok: EuiccMemoryResetResponse_resetEimResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_nothingToDelete: EuiccMemoryResetResponse_resetEimResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported: EuiccMemoryResetResponse_resetEimResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 */
export
const eimResetNotSupported: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_undefinedError: EuiccMemoryResetResponse_resetEimResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetEimResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetEimResult> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetEimResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetEimResult> = $._encodeInteger;


/* eslint-enable */
