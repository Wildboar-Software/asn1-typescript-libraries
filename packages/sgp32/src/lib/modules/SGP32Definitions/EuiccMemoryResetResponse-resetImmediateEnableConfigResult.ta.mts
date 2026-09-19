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

let _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse_resetImmediateEnableConfigResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult (el: _Element): EuiccMemoryResetResponse_resetImmediateEnableConfigResult {
    if (!_cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult) { _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult = $._decodeInteger; }
    return _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse_resetImmediateEnableConfigResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse_resetImmediateEnableConfigResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult (value: EuiccMemoryResetResponse_resetImmediateEnableConfigResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult) { _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult = $._encodeInteger; }
    return _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(value, elGetter);
}


/* eslint-enable */
