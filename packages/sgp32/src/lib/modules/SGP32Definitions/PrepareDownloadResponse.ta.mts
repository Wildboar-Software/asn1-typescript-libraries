/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrepareDownloadResponseOk, _decode_PrepareDownloadResponseOk, _encode_PrepareDownloadResponseOk } from "@wildboar/sgp22/RSPDefinitions";
import { PrepareDownloadResponseError, _decode_PrepareDownloadResponseError, _encode_PrepareDownloadResponseError } from "@wildboar/sgp22/RSPDefinitions";
import { CompactPrepareDownloadResponseOk, _decode_CompactPrepareDownloadResponseOk, _encode_CompactPrepareDownloadResponseOk } from "../SGP32Definitions/CompactPrepareDownloadResponseOk.ta.mjs";


/**
 * @summary PrepareDownloadResponse
 * @description
 * 
 * ES10b.PrepareDownload response, extended for ESipa. The function is
 * otherwise identical to ES10b.PrepareDownload in SGP.22 section 5.7.5, with
 * the IPA in the LPA role. Select `downloadResponseOk` or
 * `downloadResponseError` for the SGP.22 alternatives. Select
 * `compactDownloadResponseOk` when an IPA with `minimizeEsipaBytes` re-encodes
 * a `downloadResponseOk` from the eUICC. Before calling
 * ES9+'.GetBoundProfilePackage, the eIM restores `downloadResponseOk` from
 * `smdpSigned2` and `hashCc` it already holds for this eUICC. The encoded
 * value is the `prepareDownloadResponse` input of
 * ESipa.GetBoundProfilePackage. SGP.32 v1.2, sections 5.9.7 and 5.14.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadResponse  ::=  [33] CHOICE { -- Tag 'BF21'
 *     downloadResponseOk PrepareDownloadResponseOk,
 *     downloadResponseError PrepareDownloadResponseError,
 *     compactDownloadResponseOk CompactPrepareDownloadResponseOk
 * }
 * ```
 */
export
type PrepareDownloadResponse =
    { downloadResponseOk: PrepareDownloadResponseOk } /* CHOICE_ALT_ROOT */
    | { downloadResponseError: PrepareDownloadResponseError } /* CHOICE_ALT_ROOT */
    | { compactDownloadResponseOk: CompactPrepareDownloadResponseOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PrepareDownloadResponse: $.ASN1Decoder<PrepareDownloadResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareDownloadResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareDownloadResponse (el: _Element): PrepareDownloadResponse {
    if (!_cached_decoder_for_PrepareDownloadResponse) { _cached_decoder_for_PrepareDownloadResponse = $._decode_explicit<PrepareDownloadResponse>(() => $._decode_inextensible_choice<PrepareDownloadResponse>({
    "CONTEXT 0": [ "downloadResponseOk", _decode_PrepareDownloadResponseOk ],
    "CONTEXT 1": [ "downloadResponseError", _decode_PrepareDownloadResponseError ],
    "CONTEXT 2": [ "compactDownloadResponseOk", _decode_CompactPrepareDownloadResponseOk ]
})); }
    return _cached_decoder_for_PrepareDownloadResponse(el);
}

let _cached_encoder_for_PrepareDownloadResponse: $.ASN1Encoder<PrepareDownloadResponse> | null = null;

/**
 * @summary Encodes a(n) PrepareDownloadResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareDownloadResponse, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareDownloadResponse (value: PrepareDownloadResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareDownloadResponse) { _cached_encoder_for_PrepareDownloadResponse = $._encode_explicit(_TagClass.context, 33, () => $._encode_choice<PrepareDownloadResponse>({
    "downloadResponseOk": _encode_PrepareDownloadResponseOk,
    "downloadResponseError": _encode_PrepareDownloadResponseError,
    "compactDownloadResponseOk": _encode_CompactPrepareDownloadResponseOk,
}, $.BER), $.BER); }
    return _cached_encoder_for_PrepareDownloadResponse(value, elGetter);
}


/* eslint-enable */
