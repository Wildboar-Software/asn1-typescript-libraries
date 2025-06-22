/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CoordinateShadowUpdateArgumentData,
    _decode_CoordinateShadowUpdateArgumentData,
    _encode_CoordinateShadowUpdateArgumentData,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary CoordinateShadowUpdateArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgument  ::=
 *   OPTIONALLY-PROTECTED { CoordinateShadowUpdateArgumentData }
 * ```
 */
export type CoordinateShadowUpdateArgument = OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>; // DefinedType

let _cached_decoder_for_CoordinateShadowUpdateArgument: $.ASN1Decoder<CoordinateShadowUpdateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgument} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgument(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgument) {
        _cached_decoder_for_CoordinateShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>(
            _decode_CoordinateShadowUpdateArgumentData
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgument(el);
}

let _cached_encoder_for_CoordinateShadowUpdateArgument: $.ASN1Encoder<CoordinateShadowUpdateArgument> | null = null;

/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgument(
    value: CoordinateShadowUpdateArgument,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgument>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgument) {
        _cached_encoder_for_CoordinateShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>(
            _encode_CoordinateShadowUpdateArgumentData
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgument(value, elGetter);
}


/* eslint-enable */
