/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetImmediateEnableConfigResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetResponse_resetImmediateEnableConfigResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 */
export
const resetIECNotSupported: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> = $._encodeInteger;


/* eslint-enable */
