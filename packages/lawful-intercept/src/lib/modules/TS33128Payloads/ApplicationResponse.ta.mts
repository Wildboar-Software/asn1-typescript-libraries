/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary ApplicationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationResponse  ::=  CHOICE
 * {
 *     getRootApplicationResponse          [1] SBIType,
 *     getDCApplicationProfileListResponse [2] SBIType
 * }
 * ```
 */
export
type ApplicationResponse =
    { getRootApplicationResponse: SBIType } /* CHOICE_ALT_ROOT */
    | { getDCApplicationProfileListResponse: SBIType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ApplicationResponse: $.ASN1Decoder<ApplicationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationResponse (el: _Element): ApplicationResponse {
    if (!_cached_decoder_for_ApplicationResponse) { _cached_decoder_for_ApplicationResponse = $._decode_extensible_choice<ApplicationResponse>({
    "CONTEXT 1": [ "getRootApplicationResponse", $._decode_implicit<SBIType>(() => _decode_SBIType) ],
    "CONTEXT 2": [ "getDCApplicationProfileListResponse", $._decode_implicit<SBIType>(() => _decode_SBIType) ]
}); }
    return _cached_decoder_for_ApplicationResponse(el);
}

let _cached_encoder_for_ApplicationResponse: $.ASN1Encoder<ApplicationResponse> | null = null;

/**
 * @summary Encodes a(n) ApplicationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationResponse (value: ApplicationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationResponse) { _cached_encoder_for_ApplicationResponse = $._encode_choice<ApplicationResponse>({
    "getRootApplicationResponse": $._encode_implicit(_TagClass.context, 1, () => _encode_SBIType, $.BER),
    "getDCApplicationProfileListResponse": $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER),
}, $.BER); }
    return _cached_encoder_for_ApplicationResponse(value, elGetter);
}


/* eslint-enable */
