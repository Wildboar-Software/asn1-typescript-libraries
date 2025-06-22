/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    UpdateShadowArgumentData,
    _decode_UpdateShadowArgumentData,
    _encode_UpdateShadowArgumentData,
} from "../DirectoryShadowAbstractService/UpdateShadowArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary UpdateShadowArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowArgument  ::=  OPTIONALLY-PROTECTED {UpdateShadowArgumentData }
 * ```
 */
export type UpdateShadowArgument = OPTIONALLY_PROTECTED<UpdateShadowArgumentData>; // DefinedType

let _cached_decoder_for_UpdateShadowArgument: $.ASN1Decoder<UpdateShadowArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowArgument} The decoded data structure.
 */
export function _decode_UpdateShadowArgument(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowArgument) {
        _cached_decoder_for_UpdateShadowArgument = _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowArgumentData>(
            _decode_UpdateShadowArgumentData
        );
    }
    return _cached_decoder_for_UpdateShadowArgument(el);
}

let _cached_encoder_for_UpdateShadowArgument: $.ASN1Encoder<UpdateShadowArgument> | null = null;

/**
 * @summary Encodes a(n) UpdateShadowArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowArgument, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowArgument(
    value: UpdateShadowArgument,
    elGetter: $.ASN1Encoder<UpdateShadowArgument>
) {
    if (!_cached_encoder_for_UpdateShadowArgument) {
        _cached_encoder_for_UpdateShadowArgument = _get_encoder_for_OPTIONALLY_PROTECTED<UpdateShadowArgumentData>(
            _encode_UpdateShadowArgumentData
        );
    }
    return _cached_encoder_for_UpdateShadowArgument(value, elGetter);
}


/* eslint-enable */
