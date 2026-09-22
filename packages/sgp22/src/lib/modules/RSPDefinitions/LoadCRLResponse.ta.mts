/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LoadCRLResponseOk, _decode_LoadCRLResponseOk, _encode_LoadCRLResponseOk } from "../RSPDefinitions/LoadCRLResponseOk.ta.mjs";
// export { LoadCRLResponseOk, _decode_LoadCRLResponseOk, _encode_LoadCRLResponseOk } from "../RSPDefinitions/LoadCRLResponseOk.ta.mjs";
import { LoadCRLResponseError, _decode_LoadCRLResponseError, _encode_LoadCRLResponseError } from "../RSPDefinitions/LoadCRLResponseError.ta.mjs";
// export { LoadCRLResponseError, LoadCRLResponseError_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_invalidCRLFormat /* IMPORTED_LONG_NAMED_INTEGER */, invalidCRLFormat /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_notEnoughMemorySpace /* IMPORTED_LONG_NAMED_INTEGER */, notEnoughMemorySpace /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_verificationKeyNotFound /* IMPORTED_LONG_NAMED_INTEGER */, verificationKeyNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_fresherCrlAlreadyLoaded /* IMPORTED_LONG_NAMED_INTEGER */, fresherCrlAlreadyLoaded /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_baseCrlMissing /* IMPORTED_LONG_NAMED_INTEGER */, baseCrlMissing /* IMPORTED_SHORT_NAMED_INTEGER */, LoadCRLResponseError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LoadCRLResponseError, _encode_LoadCRLResponseError } from "../RSPDefinitions/LoadCRLResponseError.ta.mjs";


/**
 * @summary LoadCRLResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadCRLResponse  ::=  [53] CHOICE {  -- Tag 'BF35'
 * loadCRLResponseOk LoadCRLResponseOk,
 * loadCRLResponseError LoadCRLResponseError
 * }
 * ```
 */
export
type LoadCRLResponse =
    { loadCRLResponseOk: LoadCRLResponseOk } /* CHOICE_ALT_ROOT */
    | { loadCRLResponseError: LoadCRLResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LoadCRLResponse: $.ASN1Decoder<LoadCRLResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadCRLResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadCRLResponse (el: _Element): LoadCRLResponse {
    if (!_cached_decoder_for_LoadCRLResponse) { _cached_decoder_for_LoadCRLResponse = $._decode_explicit<LoadCRLResponse>(() => $._decode_inextensible_choice<LoadCRLResponse>({
    "CONTEXT 0": [ "loadCRLResponseOk", _decode_LoadCRLResponseOk ],
    "CONTEXT 1": [ "loadCRLResponseError", _decode_LoadCRLResponseError ]
})); }
    return _cached_decoder_for_LoadCRLResponse(el);
}

let _cached_encoder_for_LoadCRLResponse: $.ASN1Encoder<LoadCRLResponse> | null = null;

/**
 * @summary Encodes a(n) LoadCRLResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadCRLResponse, encoded as an ASN.1 Element.
 */
export
function _encode_LoadCRLResponse (value: LoadCRLResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadCRLResponse) { _cached_encoder_for_LoadCRLResponse = $._encode_explicit(_TagClass.context, 53, () => $._encode_choice<LoadCRLResponse>({
    "loadCRLResponseOk": _encode_LoadCRLResponseOk,
    "loadCRLResponseError": _encode_LoadCRLResponseError,
}, $.BER), $.BER); }
    return _cached_encoder_for_LoadCRLResponse(value, elGetter);
}


/* eslint-enable */
