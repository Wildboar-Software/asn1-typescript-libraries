/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ConnectivityParameters, _decode_ConnectivityParameters, _encode_ConnectivityParameters } from "../SGP32Definitions/ConnectivityParameters.ta.mjs";
// export { ConnectivityParameters, _decode_ConnectivityParameters, _encode_ConnectivityParameters } from "../SGP32Definitions/ConnectivityParameters.ta.mjs";
import { ConnectivityParametersError, _decode_ConnectivityParametersError, _encode_ConnectivityParametersError } from "../SGP32Definitions/ConnectivityParametersError.ta.mjs";
// export { ConnectivityParametersError, ConnectivityParametersError_parametersNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, parametersNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectivityParametersError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConnectivityParametersError, _encode_ConnectivityParametersError } from "../SGP32Definitions/ConnectivityParametersError.ta.mjs";


/**
 * @summary GetConnectivityParametersResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetConnectivityParametersResponse  ::=  [95] CHOICE { -- Tag 'BF5F'
 *     connectivityParameters ConnectivityParameters,
 *     connectivityParametersError ConnectivityParametersError
 * }
 * ```
 */
export
type GetConnectivityParametersResponse =
    { connectivityParameters: ConnectivityParameters } /* CHOICE_ALT_ROOT */
    | { connectivityParametersError: ConnectivityParametersError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetConnectivityParametersResponse: $.ASN1Decoder<GetConnectivityParametersResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetConnectivityParametersResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetConnectivityParametersResponse (el: _Element): GetConnectivityParametersResponse {
    if (!_cached_decoder_for_GetConnectivityParametersResponse) { _cached_decoder_for_GetConnectivityParametersResponse = $._decode_explicit<GetConnectivityParametersResponse>(() => $._decode_inextensible_choice<GetConnectivityParametersResponse>({
    "CONTEXT 0": [ "connectivityParameters", _decode_ConnectivityParameters ],
    "CONTEXT 1": [ "connectivityParametersError", _decode_ConnectivityParametersError ]
})); }
    return _cached_decoder_for_GetConnectivityParametersResponse(el);
}

let _cached_encoder_for_GetConnectivityParametersResponse: $.ASN1Encoder<GetConnectivityParametersResponse> | null = null;

/**
 * @summary Encodes a(n) GetConnectivityParametersResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetConnectivityParametersResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetConnectivityParametersResponse (value: GetConnectivityParametersResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetConnectivityParametersResponse) { _cached_encoder_for_GetConnectivityParametersResponse = $._encode_explicit(_TagClass.context, 95, () => $._encode_choice<GetConnectivityParametersResponse>({
    "connectivityParameters": _encode_ConnectivityParameters,
    "connectivityParametersError": _encode_ConnectivityParametersError,
}, $.BER), $.BER); }
    return _cached_encoder_for_GetConnectivityParametersResponse(value, elGetter);
}


/* eslint-enable */
