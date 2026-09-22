/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaEuiccData, _decode_IpaEuiccData, _encode_IpaEuiccData } from "../SGP32Definitions/IpaEuiccData.ta.mjs";
// export { IpaEuiccData, _decode_IpaEuiccData, _encode_IpaEuiccData } from "../SGP32Definitions/IpaEuiccData.ta.mjs";
import { IpaEuiccDataResponseError, _decode_IpaEuiccDataResponseError, _encode_IpaEuiccDataResponseError } from "../SGP32Definitions/IpaEuiccDataResponseError.ta.mjs";
// export { IpaEuiccDataResponseError, _decode_IpaEuiccDataResponseError, _encode_IpaEuiccDataResponseError } from "../SGP32Definitions/IpaEuiccDataResponseError.ta.mjs";


/**
 * @summary IpaEuiccDataResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataResponse  ::=  [82] CHOICE { -- Tag 'BF52'
 *     ipaEuiccData IpaEuiccData,
 *     ipaEuiccDataResponseError IpaEuiccDataResponseError
 * }
 * ```
 */
export
type IpaEuiccDataResponse =
    { ipaEuiccData: IpaEuiccData } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataResponseError: IpaEuiccDataResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataResponse: $.ASN1Decoder<IpaEuiccDataResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataResponse (el: _Element): IpaEuiccDataResponse {
    if (!_cached_decoder_for_IpaEuiccDataResponse) { _cached_decoder_for_IpaEuiccDataResponse = $._decode_explicit<IpaEuiccDataResponse>(() => $._decode_inextensible_choice<IpaEuiccDataResponse>({
    "CONTEXT 0": [ "ipaEuiccData", _decode_IpaEuiccData ],
    "CONTEXT 1": [ "ipaEuiccDataResponseError", _decode_IpaEuiccDataResponseError ]
})); }
    return _cached_decoder_for_IpaEuiccDataResponse(el);
}

let _cached_encoder_for_IpaEuiccDataResponse: $.ASN1Encoder<IpaEuiccDataResponse> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataResponse (value: IpaEuiccDataResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataResponse) { _cached_encoder_for_IpaEuiccDataResponse = $._encode_explicit(_TagClass.context, 82, () => $._encode_choice<IpaEuiccDataResponse>({
    "ipaEuiccData": _encode_IpaEuiccData,
    "ipaEuiccDataResponseError": _encode_IpaEuiccDataResponseError,
}, $.BER), $.BER); }
    return _cached_encoder_for_IpaEuiccDataResponse(value, elGetter);
}


/* eslint-enable */
