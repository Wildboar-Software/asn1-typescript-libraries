/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSEMngtRequests, _decode_GSEMngtRequests, _encode_GSEMngtRequests } from "../IEC61850/GSEMngtRequests.ta.mjs";
// export { GSEMngtRequests, _decode_GSEMngtRequests, _encode_GSEMngtRequests } from "../IEC61850/GSEMngtRequests.ta.mjs";
import { GSEMngtResponses, _decode_GSEMngtResponses, _encode_GSEMngtResponses } from "../IEC61850/GSEMngtResponses.ta.mjs";
// export { GSEMngtResponses, _decode_GSEMngtResponses, _encode_GSEMngtResponses } from "../IEC61850/GSEMngtResponses.ta.mjs";


/**
 * @summary RequestResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestResponse  ::=  CHOICE {
 *     requests    [1] IMPLICIT GSEMngtRequests,
 *     responses    [2] IMPLICIT GSEMngtResponses
 * }
 * ```
 */
export
type RequestResponse =
    { requests: GSEMngtRequests } /* CHOICE_ALT_ROOT */
    | { responses: GSEMngtResponses } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestResponse: $.ASN1Decoder<RequestResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestResponse (el: _Element): RequestResponse {
    if (!_cached_decoder_for_RequestResponse) { _cached_decoder_for_RequestResponse = $._decode_inextensible_choice<RequestResponse>({
    "CONTEXT 1": [ "requests", $._decode_explicit<GSEMngtRequests>(() => _decode_GSEMngtRequests) ],
    "CONTEXT 2": [ "responses", $._decode_explicit<GSEMngtResponses>(() => _decode_GSEMngtResponses) ]
}); }
    return _cached_decoder_for_RequestResponse(el);
}

let _cached_encoder_for_RequestResponse: $.ASN1Encoder<RequestResponse> | null = null;

/**
 * @summary Encodes a(n) RequestResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestResponse, encoded as an ASN.1 Element.
 */
export
function _encode_RequestResponse (value: RequestResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestResponse) { _cached_encoder_for_RequestResponse = $._encode_choice<RequestResponse>({
    "requests": $._encode_explicit(_TagClass.context, 1, () => _encode_GSEMngtRequests, $.BER),
    "responses": $._encode_explicit(_TagClass.context, 2, () => _encode_GSEMngtResponses, $.BER),
}, $.BER); }
    return _cached_encoder_for_RequestResponse(value, elGetter);
}


/* eslint-enable */
