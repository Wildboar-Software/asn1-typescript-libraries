/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CoordinateShadowUpdateResultData,
    _decode_CoordinateShadowUpdateResultData,
    _encode_CoordinateShadowUpdateResultData,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary CoordinateShadowUpdateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED{ CoordinateShadowUpdateResultData },
 *   ...}
 * ```
 */
export type CoordinateShadowUpdateResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CoordinateShadowUpdateResult: $.ASN1Decoder<CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateResult} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateResult(el: _Element): CoordinateShadowUpdateResult {
    if (!_cached_decoder_for_CoordinateShadowUpdateResult) {
        _cached_decoder_for_CoordinateShadowUpdateResult = $._decode_extensible_choice<CoordinateShadowUpdateResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "UNIVERSAL 16": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(
                        _decode_CoordinateShadowUpdateResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateResult(el);
}

let _cached_encoder_for_CoordinateShadowUpdateResult: $.ASN1Encoder<CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Encodes a(n) CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateResult(
    value: CoordinateShadowUpdateResult,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResult>
): _Element {
    if (!_cached_encoder_for_CoordinateShadowUpdateResult) {
        _cached_encoder_for_CoordinateShadowUpdateResult = $._encode_choice<CoordinateShadowUpdateResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(
                    _encode_CoordinateShadowUpdateResultData
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResult(value, elGetter);
}


/* eslint-enable */
