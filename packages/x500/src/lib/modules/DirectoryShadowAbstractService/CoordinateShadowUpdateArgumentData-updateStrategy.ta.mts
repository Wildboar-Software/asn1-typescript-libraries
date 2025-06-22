/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgumentData-updateStrategy-standard.ta.mjs";
/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData-updateStrategy ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CoordinateShadowUpdateArgumentData_updateStrategy =
    | {
          standard: CoordinateShadowUpdateArgumentData_updateStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: $.ASN1Decoder<CoordinateShadowUpdateArgumentData_updateStrategy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData_updateStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData_updateStrategy} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
    el: _Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = $._decode_extensible_choice<CoordinateShadowUpdateArgumentData_updateStrategy>(
            {
                "UNIVERSAL 10": [
                    "standard",
                    _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
                ],
                "UNIVERSAL 8": ["other", $._decodeExternal],
            }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        el
    );
}

let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: $.ASN1Encoder<CoordinateShadowUpdateArgumentData_updateStrategy> | null = null;

/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData_updateStrategy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData_updateStrategy, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
    value: CoordinateShadowUpdateArgumentData_updateStrategy,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData_updateStrategy>
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = $._encode_choice<CoordinateShadowUpdateArgumentData_updateStrategy>(
            {
                standard: _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
                other: $._encodeExternal,
            },
            $.DER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        value,
        elGetter
    );
}


/* eslint-enable */
