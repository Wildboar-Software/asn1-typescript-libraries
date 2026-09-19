/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiateAuthenticationOkEs9, _decode_InitiateAuthenticationOkEs9, _encode_InitiateAuthenticationOkEs9 } from "../RSPDefinitions/InitiateAuthenticationOkEs9.ta.mjs";
// export { InitiateAuthenticationOkEs9, _decode_InitiateAuthenticationOkEs9, _encode_InitiateAuthenticationOkEs9 } from "../RSPDefinitions/InitiateAuthenticationOkEs9.ta.mjs";
import { InitiateAuthenticationResponse_initiateAuthenticationError, _decode_InitiateAuthenticationResponse_initiateAuthenticationError, _encode_InitiateAuthenticationResponse_initiateAuthenticationError } from "../RSPDefinitions/InitiateAuthenticationResponse-initiateAuthenticationError.ta.mjs";
// export { InitiateAuthenticationResponse_initiateAuthenticationError, InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress /* IMPORTED_LONG_NAMED_INTEGER */, invalidDpAddress /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp /* IMPORTED_LONG_NAMED_INTEGER */, euiccVersionNotSupportedByDp /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, ciPKIdNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_InitiateAuthenticationResponse_initiateAuthenticationError, _encode_InitiateAuthenticationResponse_initiateAuthenticationError } from "../RSPDefinitions/InitiateAuthenticationResponse-initiateAuthenticationError.ta.mjs";


/**
 * @summary InitiateAuthenticationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponse  ::=  [57] CHOICE { -- Tag 'BF39'
 *     initiateAuthenticationOk InitiateAuthenticationOkEs9,
 *     initiateAuthenticationError INTEGER {
 *         invalidDpAddress(1),
 *         euiccVersionNotSupportedByDp(2),
 *         ciPKIdNotSupported(3)
 *     }
 * }
 * ```
 */
export
type InitiateAuthenticationResponse =
    { initiateAuthenticationOk: InitiateAuthenticationOkEs9 } /* CHOICE_ALT_ROOT */
    | { initiateAuthenticationError: InitiateAuthenticationResponse_initiateAuthenticationError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InitiateAuthenticationResponse: $.ASN1Decoder<InitiateAuthenticationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationResponse (el: _Element): InitiateAuthenticationResponse {
    if (!_cached_decoder_for_InitiateAuthenticationResponse) { _cached_decoder_for_InitiateAuthenticationResponse = $._decode_explicit<InitiateAuthenticationResponse>(() => $._decode_inextensible_choice<InitiateAuthenticationResponse>({
    "CONTEXT 0": [ "initiateAuthenticationOk", _decode_InitiateAuthenticationOkEs9 ],
    "CONTEXT 1": [ "initiateAuthenticationError", _decode_InitiateAuthenticationResponse_initiateAuthenticationError ]
})); }
    return _cached_decoder_for_InitiateAuthenticationResponse(el);
}

let _cached_encoder_for_InitiateAuthenticationResponse: $.ASN1Encoder<InitiateAuthenticationResponse> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationResponse (value: InitiateAuthenticationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationResponse) { _cached_encoder_for_InitiateAuthenticationResponse = $._encode_explicit(_TagClass.context, 57, () => $._encode_choice<InitiateAuthenticationResponse>({
    "initiateAuthenticationOk": _encode_InitiateAuthenticationOkEs9,
    "initiateAuthenticationError": _encode_InitiateAuthenticationResponse_initiateAuthenticationError,
}, $.BER), $.BER); }
    return _cached_encoder_for_InitiateAuthenticationResponse(value, elGetter);
}


/* eslint-enable */
