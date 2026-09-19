/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetReferenceRequestPdu, _decode_GetReferenceRequestPdu, _encode_GetReferenceRequestPdu } from "../IEC61850/GetReferenceRequestPdu.ta.mjs";
// export { GetReferenceRequestPdu, _decode_GetReferenceRequestPdu, _encode_GetReferenceRequestPdu } from "../IEC61850/GetReferenceRequestPdu.ta.mjs";
import { GetElementRequestPdu, _decode_GetElementRequestPdu, _encode_GetElementRequestPdu } from "../IEC61850/GetElementRequestPdu.ta.mjs";
// export { GetElementRequestPdu, _decode_GetElementRequestPdu, _encode_GetElementRequestPdu } from "../IEC61850/GetElementRequestPdu.ta.mjs";


/**
 * @summary GSEMngtRequests
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSEMngtRequests  ::=  CHOICE {
 *     getGoReference            [1] IMPLICIT GetReferenceRequestPdu,
 *     getGOOSEElementNumber    [2] IMPLICIT GetElementRequestPdu,
 *     getGsReference            [3] IMPLICIT GetReferenceRequestPdu,
 *     getGSSEDataOffset        [4] IMPLICIT GetElementRequestPdu,
 *     ...
 * }
 * ```
 */
export
type GSEMngtRequests =
    { getGoReference: GetReferenceRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGOOSEElementNumber: GetElementRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGsReference: GetReferenceRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGSSEDataOffset: GetElementRequestPdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GSEMngtRequests: $.ASN1Decoder<GSEMngtRequests> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSEMngtRequests
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSEMngtRequests (el: _Element): GSEMngtRequests {
    if (!_cached_decoder_for_GSEMngtRequests) { _cached_decoder_for_GSEMngtRequests = $._decode_extensible_choice<GSEMngtRequests>({
    "CONTEXT 1": [ "getGoReference", $._decode_implicit<GetReferenceRequestPdu>(() => _decode_GetReferenceRequestPdu) ],
    "CONTEXT 2": [ "getGOOSEElementNumber", $._decode_implicit<GetElementRequestPdu>(() => _decode_GetElementRequestPdu) ],
    "CONTEXT 3": [ "getGsReference", $._decode_implicit<GetReferenceRequestPdu>(() => _decode_GetReferenceRequestPdu) ],
    "CONTEXT 4": [ "getGSSEDataOffset", $._decode_implicit<GetElementRequestPdu>(() => _decode_GetElementRequestPdu) ]
}); }
    return _cached_decoder_for_GSEMngtRequests(el);
}

let _cached_encoder_for_GSEMngtRequests: $.ASN1Encoder<GSEMngtRequests> | null = null;

/**
 * @summary Encodes a(n) GSEMngtRequests into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSEMngtRequests, encoded as an ASN.1 Element.
 */
export
function _encode_GSEMngtRequests (value: GSEMngtRequests, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSEMngtRequests) { _cached_encoder_for_GSEMngtRequests = $._encode_choice<GSEMngtRequests>({
    "getGoReference": $._encode_implicit(_TagClass.context, 1, () => _encode_GetReferenceRequestPdu, $.BER),
    "getGOOSEElementNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_GetElementRequestPdu, $.BER),
    "getGsReference": $._encode_implicit(_TagClass.context, 3, () => _encode_GetReferenceRequestPdu, $.BER),
    "getGSSEDataOffset": $._encode_implicit(_TagClass.context, 4, () => _encode_GetElementRequestPdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_GSEMngtRequests(value, elGetter);
}


/* eslint-enable */
