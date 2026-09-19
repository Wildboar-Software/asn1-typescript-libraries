/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CancelSessionResponseOk, _decode_CancelSessionResponseOk, _encode_CancelSessionResponseOk } from "../RSPDefinitions/CancelSessionResponseOk.ta.mjs";
// export { CancelSessionResponseOk, _decode_CancelSessionResponseOk, _encode_CancelSessionResponseOk } from "../RSPDefinitions/CancelSessionResponseOk.ta.mjs";
import { CancelSessionResponse_cancelSessionResponseError, _decode_CancelSessionResponse_cancelSessionResponseError, _encode_CancelSessionResponse_cancelSessionResponseError } from "../RSPDefinitions/CancelSessionResponse-cancelSessionResponseError.ta.mjs";
// export { CancelSessionResponse_cancelSessionResponseError, CancelSessionResponse_cancelSessionResponseError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponse_cancelSessionResponseError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponse_cancelSessionResponseError, _encode_CancelSessionResponse_cancelSessionResponseError } from "../RSPDefinitions/CancelSessionResponse-cancelSessionResponseError.ta.mjs";


/**
 * @summary CancelSessionResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse  ::=  [65] CHOICE { -- Tag 'BF41'
 *     cancelSessionResponseOk CancelSessionResponseOk,
 *     cancelSessionResponseError INTEGER {invalidTransactionId(5), undefinedError(127)}
 * }
 * ```
 */
export
type CancelSessionResponse =
    { cancelSessionResponseOk: CancelSessionResponseOk } /* CHOICE_ALT_ROOT */
    | { cancelSessionResponseError: CancelSessionResponse_cancelSessionResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelSessionResponse: $.ASN1Decoder<CancelSessionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponse (el: _Element): CancelSessionResponse {
    if (!_cached_decoder_for_CancelSessionResponse) { _cached_decoder_for_CancelSessionResponse = $._decode_explicit<CancelSessionResponse>(() => $._decode_inextensible_choice<CancelSessionResponse>({
    "CONTEXT 0": [ "cancelSessionResponseOk", _decode_CancelSessionResponseOk ],
    "CONTEXT 1": [ "cancelSessionResponseError", _decode_CancelSessionResponse_cancelSessionResponseError ]
})); }
    return _cached_decoder_for_CancelSessionResponse(el);
}

let _cached_encoder_for_CancelSessionResponse: $.ASN1Encoder<CancelSessionResponse> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponse (value: CancelSessionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponse) { _cached_encoder_for_CancelSessionResponse = $._encode_explicit(_TagClass.context, 65, () => $._encode_choice<CancelSessionResponse>({
    "cancelSessionResponseOk": _encode_CancelSessionResponseOk,
    "cancelSessionResponseError": _encode_CancelSessionResponse_cancelSessionResponseError,
}, $.BER), $.BER); }
    return _cached_encoder_for_CancelSessionResponse(value, elGetter);
}


/* eslint-enable */
