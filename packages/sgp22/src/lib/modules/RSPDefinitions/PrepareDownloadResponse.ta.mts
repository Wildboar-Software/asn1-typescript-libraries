/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrepareDownloadResponseOk, _decode_PrepareDownloadResponseOk, _encode_PrepareDownloadResponseOk } from "../RSPDefinitions/PrepareDownloadResponseOk.ta.mjs";
// export { PrepareDownloadResponseOk, _decode_PrepareDownloadResponseOk, _encode_PrepareDownloadResponseOk } from "../RSPDefinitions/PrepareDownloadResponseOk.ta.mjs";
import { PrepareDownloadResponseError, _decode_PrepareDownloadResponseError, _encode_PrepareDownloadResponseError } from "../RSPDefinitions/PrepareDownloadResponseError.ta.mjs";
// export { PrepareDownloadResponseError, _decode_PrepareDownloadResponseError, _encode_PrepareDownloadResponseError } from "../RSPDefinitions/PrepareDownloadResponseError.ta.mjs";


/**
 * @summary PrepareDownloadResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadResponse  ::=  [33] CHOICE { -- Tag 'BF21'
 *     downloadResponseOk PrepareDownloadResponseOk,
 *     downloadResponseError PrepareDownloadResponseError
 * }
 * ```
 */
export
type PrepareDownloadResponse =
    { downloadResponseOk: PrepareDownloadResponseOk } /* CHOICE_ALT_ROOT */
    | { downloadResponseError: PrepareDownloadResponseError } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "downloadResponseError", _decode_PrepareDownloadResponseError ]
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
}, $.BER), $.BER); }
    return _cached_encoder_for_PrepareDownloadResponse(value, elGetter);
}


/* eslint-enable */
