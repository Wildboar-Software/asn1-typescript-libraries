/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSCheckError, _decode_TSCheckError, _encode_TSCheckError } from "../CSChargingDataTypes/TSCheckError.ta.mjs";


/**
 * @summary TSCheckResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCheckResult  ::=  CHOICE {
 *    success      [0] IMPLICIT NULL,
 *    fail         [1] IMPLICIT SET  OF
 *       TSCheckError}
 * ```
 */
export
type TSCheckResult =
    { success: NULL } /* CHOICE_ALT_ROOT */
    | { fail: TSCheckError[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSCheckResult: $.ASN1Decoder<TSCheckResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCheckResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCheckResult (el: _Element): TSCheckResult {
    if (!_cached_decoder_for_TSCheckResult) { _cached_decoder_for_TSCheckResult = $._decode_inextensible_choice<TSCheckResult>({
    "CONTEXT 0": [ "success", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "fail", $._decode_implicit<TSCheckError[]>(() => $._decodeSetOf<TSCheckError>(() => _decode_TSCheckError)) ]
}); }
    return _cached_decoder_for_TSCheckResult(el);
}

let _cached_encoder_for_TSCheckResult: $.ASN1Encoder<TSCheckResult> | null = null;

/**
 * @summary Encodes a(n) TSCheckResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCheckResult, encoded as an ASN.1 Element.
 */
export
function _encode_TSCheckResult (value: TSCheckResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCheckResult) { _cached_encoder_for_TSCheckResult = $._encode_choice<TSCheckResult>({
    "success": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "fail": $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<TSCheckError>(() => _encode_TSCheckError, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_TSCheckResult(value, elGetter);
}


/* eslint-enable */
