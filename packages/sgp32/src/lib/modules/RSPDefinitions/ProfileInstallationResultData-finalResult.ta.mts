/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SuccessResult, _decode_SuccessResult, _encode_SuccessResult } from "../RSPDefinitions/SuccessResult.ta.mjs";
// export { SuccessResult, _decode_SuccessResult, _encode_SuccessResult } from "../RSPDefinitions/SuccessResult.ta.mjs";
import { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";
// export { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";


/**
 * @summary ProfileInstallationResultData_finalResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInstallationResultData-finalResult ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileInstallationResultData_finalResult =
    { successResult: SuccessResult } /* CHOICE_ALT_ROOT */
    | { errorResult: ErrorResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileInstallationResultData_finalResult: $.ASN1Decoder<ProfileInstallationResultData_finalResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInstallationResultData_finalResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInstallationResultData_finalResult (el: _Element): ProfileInstallationResultData_finalResult {
    if (!_cached_decoder_for_ProfileInstallationResultData_finalResult) { _cached_decoder_for_ProfileInstallationResultData_finalResult = $._decode_inextensible_choice<ProfileInstallationResultData_finalResult>({
    "CONTEXT 0": [ "successResult", _decode_SuccessResult ],
    "CONTEXT 1": [ "errorResult", _decode_ErrorResult ]
}); }
    return _cached_decoder_for_ProfileInstallationResultData_finalResult(el);
}

let _cached_encoder_for_ProfileInstallationResultData_finalResult: $.ASN1Encoder<ProfileInstallationResultData_finalResult> | null = null;

/**
 * @summary Encodes a(n) ProfileInstallationResultData_finalResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInstallationResultData_finalResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInstallationResultData_finalResult (value: ProfileInstallationResultData_finalResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInstallationResultData_finalResult) { _cached_encoder_for_ProfileInstallationResultData_finalResult = $._encode_choice<ProfileInstallationResultData_finalResult>({
    "successResult": _encode_SuccessResult,
    "errorResult": _encode_ErrorResult,
}, $.BER); }
    return _cached_encoder_for_ProfileInstallationResultData_finalResult(value, elGetter);
}


/* eslint-enable */
