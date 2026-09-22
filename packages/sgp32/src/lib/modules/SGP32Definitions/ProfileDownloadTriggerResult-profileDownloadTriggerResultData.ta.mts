/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../SGP32Definitions/ProfileInstallationResult.ta.mjs";
// export { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../SGP32Definitions/ProfileInstallationResult.ta.mjs";
import { ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError } from "../SGP32Definitions/ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError.ta.mjs";
// export { ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError } from "../SGP32Definitions/ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError.ta.mjs";


/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerResult-profileDownloadTriggerResultData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileDownloadTriggerResult_profileDownloadTriggerResultData =
    { profileInstallationResult: ProfileInstallationResult } /* CHOICE_ALT_ROOT */
    | { profileDownloadError: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData: $.ASN1Decoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData (el: _Element): ProfileDownloadTriggerResult_profileDownloadTriggerResultData {
    if (!_cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData) { _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData = $._decode_inextensible_choice<ProfileDownloadTriggerResult_profileDownloadTriggerResultData>({
    "CONTEXT 55": [ "profileInstallationResult", $._decode_implicit<ProfileInstallationResult>(() => _decode_ProfileInstallationResult) ],
    "UNIVERSAL 16": [ "profileDownloadError", _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError ]
}); }
    return _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData(el);
}

let _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData: $.ASN1Encoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadTriggerResult_profileDownloadTriggerResultData, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData (value: ProfileDownloadTriggerResult_profileDownloadTriggerResultData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData) { _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData = $._encode_choice<ProfileDownloadTriggerResult_profileDownloadTriggerResultData>({
    "profileInstallationResult": $._encode_implicit(_TagClass.context, 55, () => _encode_ProfileInstallationResult, $.BER),
    "profileDownloadError": _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError,
}, $.BER); }
    return _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData(value, elGetter);
}


/* eslint-enable */
