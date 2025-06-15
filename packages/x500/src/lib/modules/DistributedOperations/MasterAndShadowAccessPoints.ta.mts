/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    MasterOrShadowAccessPoint,
    _decode_MasterOrShadowAccessPoint,
    _encode_MasterOrShadowAccessPoint,
} from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
/**
 * @summary MasterAndShadowAccessPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterAndShadowAccessPoints  ::=  SET SIZE (1..MAX) OF MasterOrShadowAccessPoint
 * ```
 */
export type MasterAndShadowAccessPoints = MasterOrShadowAccessPoint[]; // SetOfType

let _cached_decoder_for_MasterAndShadowAccessPoints: $.ASN1Decoder<MasterAndShadowAccessPoints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterAndShadowAccessPoints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterAndShadowAccessPoints} The decoded data structure.
 */
export function _decode_MasterAndShadowAccessPoints(el: _Element) {
    if (!_cached_decoder_for_MasterAndShadowAccessPoints) {
        _cached_decoder_for_MasterAndShadowAccessPoints = $._decodeSetOf<MasterOrShadowAccessPoint>(
            () => _decode_MasterOrShadowAccessPoint
        );
    }
    return _cached_decoder_for_MasterAndShadowAccessPoints(el);
}

let _cached_encoder_for_MasterAndShadowAccessPoints: $.ASN1Encoder<MasterAndShadowAccessPoints> | null = null;

/**
 * @summary Encodes a(n) MasterAndShadowAccessPoints into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterAndShadowAccessPoints, encoded as an ASN.1 Element.
 */
export function _encode_MasterAndShadowAccessPoints(
    value: MasterAndShadowAccessPoints,
    elGetter: $.ASN1Encoder<MasterAndShadowAccessPoints>
) {
    if (!_cached_encoder_for_MasterAndShadowAccessPoints) {
        _cached_encoder_for_MasterAndShadowAccessPoints = $._encodeSetOf<MasterOrShadowAccessPoint>(
            () => _encode_MasterOrShadowAccessPoint,
            $.DER
        );
    }
    return _cached_encoder_for_MasterAndShadowAccessPoints(value, elGetter);
}


/* eslint-enable */
