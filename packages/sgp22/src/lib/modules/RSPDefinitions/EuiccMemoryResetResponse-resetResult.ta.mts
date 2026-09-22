/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetResponse_resetResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_ok: EuiccMemoryResetResponse_resetResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_nothingToDelete: EuiccMemoryResetResponse_resetResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_catBusy: EuiccMemoryResetResponse_resetResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_undefinedError: EuiccMemoryResetResponse_resetResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EuiccMemoryResetResponse_resetResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse_resetResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse_resetResult (el: _Element): EuiccMemoryResetResponse_resetResult {
    if (!_cached_decoder_for_EuiccMemoryResetResponse_resetResult) { _cached_decoder_for_EuiccMemoryResetResponse_resetResult = $._decodeInteger; }
    return _cached_decoder_for_EuiccMemoryResetResponse_resetResult(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse_resetResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetResult> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse_resetResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse_resetResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse_resetResult (value: EuiccMemoryResetResponse_resetResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse_resetResult) { _cached_encoder_for_EuiccMemoryResetResponse_resetResult = $._encodeInteger; }
    return _cached_encoder_for_EuiccMemoryResetResponse_resetResult(value, elGetter);
}


/* eslint-enable */
