/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Quality, _decode_Quality, _encode_Quality } from "../PKIS/Quality.ta.mjs";
// export { Quality, _decode_Quality, _encode_Quality } from "../PKIS/Quality.ta.mjs";


/**
 * @summary KeyQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyQuality  ::=  Quality
 * ```
 */
export
type KeyQuality = Quality; // DefinedType

let _cached_decoder_for_KeyQuality: $.ASN1Decoder<KeyQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyQuality (el: _Element): KeyQuality {
    if (!_cached_decoder_for_KeyQuality) { _cached_decoder_for_KeyQuality = _decode_Quality; }
    return _cached_decoder_for_KeyQuality(el);
}

let _cached_encoder_for_KeyQuality: $.ASN1Encoder<KeyQuality> | null = null;

/**
 * @summary Encodes a(n) KeyQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyQuality, encoded as an ASN.1 Element.
 */
export
function _encode_KeyQuality (value: KeyQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyQuality) { _cached_encoder_for_KeyQuality = _encode_Quality; }
    return _cached_encoder_for_KeyQuality(value, elGetter);
}


/* eslint-enable */
