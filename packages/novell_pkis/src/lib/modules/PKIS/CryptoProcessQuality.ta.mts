/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Quality, _decode_Quality, _encode_Quality } from "../PKIS/Quality.ta.mjs";
// export { Quality, _decode_Quality, _encode_Quality } from "../PKIS/Quality.ta.mjs";


/**
 * @summary CryptoProcessQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CryptoProcessQuality  ::=  Quality
 * ```
 */
export
type CryptoProcessQuality = Quality; // DefinedType

let _cached_decoder_for_CryptoProcessQuality: $.ASN1Decoder<CryptoProcessQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CryptoProcessQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CryptoProcessQuality (el: _Element): CryptoProcessQuality {
    if (!_cached_decoder_for_CryptoProcessQuality) { _cached_decoder_for_CryptoProcessQuality = _decode_Quality; }
    return _cached_decoder_for_CryptoProcessQuality(el);
}

let _cached_encoder_for_CryptoProcessQuality: $.ASN1Encoder<CryptoProcessQuality> | null = null;

/**
 * @summary Encodes a(n) CryptoProcessQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoProcessQuality, encoded as an ASN.1 Element.
 */
export
function _encode_CryptoProcessQuality (value: CryptoProcessQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CryptoProcessQuality) { _cached_encoder_for_CryptoProcessQuality = _encode_Quality; }
    return _cached_encoder_for_CryptoProcessQuality(value, elGetter);
}


/* eslint-enable */
