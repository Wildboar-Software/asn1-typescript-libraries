/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SupportedCurves
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedCurves OBJECT IDENTIFIER ::= {dummyCurv, ...}
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type SupportedCurves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_SupportedCurves: $.ASN1Decoder<SupportedCurves> | null = null;

export function _decode_SupportedCurves(el: _Element): OBJECT_IDENTIFIER {
    if (!_cached_decoder_for_SupportedCurves) {
        _cached_decoder_for_SupportedCurves = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SupportedCurves(el);
}

let _cached_encoder_for_SupportedCurves: $.ASN1Encoder<SupportedCurves> | null = null;

export function _encode_SupportedCurves(
    value: SupportedCurves,
    elGetter: $.ASN1Encoder<SupportedCurves>
): _Element {
    if (!_cached_encoder_for_SupportedCurves) {
        _cached_encoder_for_SupportedCurves = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SupportedCurves(value, elGetter);
}

/* eslint-enable */
