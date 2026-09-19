/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimAcknowledgements, _decode_EimAcknowledgements, _encode_EimAcknowledgements } from "../SGP32Definitions/EimAcknowledgements.ta.mjs";
// export { EimAcknowledgements, _decode_EimAcknowledgements, _encode_EimAcknowledgements } from "../SGP32Definitions/EimAcknowledgements.ta.mjs";
import { ProvideEimPackageResultResponse_emptyResponse, _decode_ProvideEimPackageResultResponse_emptyResponse, _encode_ProvideEimPackageResultResponse_emptyResponse } from "../SGP32Definitions/ProvideEimPackageResultResponse-emptyResponse.ta.mjs";
// export { ProvideEimPackageResultResponse_emptyResponse, _decode_ProvideEimPackageResultResponse_emptyResponse, _encode_ProvideEimPackageResultResponse_emptyResponse } from "../SGP32Definitions/ProvideEimPackageResultResponse-emptyResponse.ta.mjs";
import { ProvideEimPackageResultResponse_provideEimPackageResultError, _decode_ProvideEimPackageResultResponse_provideEimPackageResultError, _encode_ProvideEimPackageResultResponse_provideEimPackageResultError } from "../SGP32Definitions/ProvideEimPackageResultResponse-provideEimPackageResultError.ta.mjs";
// export { ProvideEimPackageResultResponse_provideEimPackageResultError, ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, eidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid /* IMPORTED_LONG_NAMED_INTEGER */, invalidEid /* IMPORTED_SHORT_NAMED_INTEGER */, ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid /* IMPORTED_LONG_NAMED_INTEGER */, missingEid /* IMPORTED_SHORT_NAMED_INTEGER */, ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProvideEimPackageResultResponse_provideEimPackageResultError, _encode_ProvideEimPackageResultResponse_provideEimPackageResultError } from "../SGP32Definitions/ProvideEimPackageResultResponse-provideEimPackageResultError.ta.mjs";


/**
 * @summary ProvideEimPackageResultResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResultResponse  ::=  [80] CHOICE { -- Tag 'BF50'
 *     eimAcknowledgements [83] EimAcknowledgements, -- Tag 'BF53'
 *     emptyResponse SEQUENCE {}, -- because EimAcknowledgements was OPTIONAL
 *     provideEimPackageResultError INTEGER {
 *         eidNotFound(2),
 *         invalidEid(3),
 *         missingEid(4),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type ProvideEimPackageResultResponse =
    { eimAcknowledgements: EimAcknowledgements } /* CHOICE_ALT_ROOT */
    | { emptyResponse: ProvideEimPackageResultResponse_emptyResponse } /* CHOICE_ALT_ROOT */
    | { provideEimPackageResultError: ProvideEimPackageResultResponse_provideEimPackageResultError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProvideEimPackageResultResponse: $.ASN1Decoder<ProvideEimPackageResultResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideEimPackageResultResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideEimPackageResultResponse (el: _Element): ProvideEimPackageResultResponse {
    if (!_cached_decoder_for_ProvideEimPackageResultResponse) { _cached_decoder_for_ProvideEimPackageResultResponse = $._decode_explicit<ProvideEimPackageResultResponse>(() => $._decode_inextensible_choice<ProvideEimPackageResultResponse>({
    "CONTEXT 83": [ "eimAcknowledgements", $._decode_implicit<EimAcknowledgements>(() => _decode_EimAcknowledgements) ],
    "UNIVERSAL 16": [ "emptyResponse", _decode_ProvideEimPackageResultResponse_emptyResponse ],
    "UNIVERSAL 2": [ "provideEimPackageResultError", _decode_ProvideEimPackageResultResponse_provideEimPackageResultError ]
})); }
    return _cached_decoder_for_ProvideEimPackageResultResponse(el);
}

let _cached_encoder_for_ProvideEimPackageResultResponse: $.ASN1Encoder<ProvideEimPackageResultResponse> | null = null;

/**
 * @summary Encodes a(n) ProvideEimPackageResultResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideEimPackageResultResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideEimPackageResultResponse (value: ProvideEimPackageResultResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideEimPackageResultResponse) { _cached_encoder_for_ProvideEimPackageResultResponse = $._encode_explicit(_TagClass.context, 80, () => $._encode_choice<ProvideEimPackageResultResponse>({
    "eimAcknowledgements": $._encode_implicit(_TagClass.context, 83, () => _encode_EimAcknowledgements, $.BER),
    "emptyResponse": _encode_ProvideEimPackageResultResponse_emptyResponse,
    "provideEimPackageResultError": _encode_ProvideEimPackageResultResponse_provideEimPackageResultError,
}, $.BER), $.BER); }
    return _cached_encoder_for_ProvideEimPackageResultResponse(value, elGetter);
}


/* eslint-enable */
