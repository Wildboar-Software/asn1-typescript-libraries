/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASServiceFeature, _decode_EASServiceFeature, _encode_EASServiceFeature } from "../TS33128Payloads/EASServiceFeature.ta.mjs";
// export { EASServiceFeature, _decode_EASServiceFeature, _encode_EASServiceFeature } from "../TS33128Payloads/EASServiceFeature.ta.mjs";


/**
 * @summary EASServiceFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASServiceFeatures  ::=  SET OF EASServiceFeature
 * ```
 */
export
type EASServiceFeatures = EASServiceFeature[]; // SetOfType

let _cached_decoder_for_EASServiceFeatures: $.ASN1Decoder<EASServiceFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASServiceFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASServiceFeatures (el: _Element): EASServiceFeatures {
    if (!_cached_decoder_for_EASServiceFeatures) { _cached_decoder_for_EASServiceFeatures = $._decodeSetOf<EASServiceFeature>(() => _decode_EASServiceFeature); }
    return _cached_decoder_for_EASServiceFeatures(el);
}

let _cached_encoder_for_EASServiceFeatures: $.ASN1Encoder<EASServiceFeatures> | null = null;

/**
 * @summary Encodes a(n) EASServiceFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASServiceFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_EASServiceFeatures (value: EASServiceFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASServiceFeatures) { _cached_encoder_for_EASServiceFeatures = $._encodeSetOf<EASServiceFeature>(() => _encode_EASServiceFeature, $.BER); }
    return _cached_encoder_for_EASServiceFeatures(value, elGetter);
}


/* eslint-enable */
