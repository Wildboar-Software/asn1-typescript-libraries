/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData-requestedStrategy-standard.ta.mjs";
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData-requestedStrategy ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RequestShadowUpdateArgumentData_requestedStrategy =
    | {
          standard: RequestShadowUpdateArgumentData_requestedStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Decoder<RequestShadowUpdateArgumentData_requestedStrategy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData_requestedStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData_requestedStrategy} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy(
    el: _Element
): RequestShadowUpdateArgumentData_requestedStrategy {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._decode_extensible_choice<RequestShadowUpdateArgumentData_requestedStrategy>(
            {
                "UNIVERSAL 10": [
                    "standard",
                    _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
                ],
                "UNIVERSAL 8": ["other", $._decodeExternal],
            }
        );
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        el
    );
}

let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Encoder<RequestShadowUpdateArgumentData_requestedStrategy> | null = null;

/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData_requestedStrategy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData_requestedStrategy, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy(
    value: RequestShadowUpdateArgumentData_requestedStrategy,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData_requestedStrategy>
): _Element {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._encode_choice<RequestShadowUpdateArgumentData_requestedStrategy>(
            {
                standard: _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
                other: $._encodeExternal,
            },
            $.DER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        value,
        elGetter
    );
}


/* eslint-enable */
