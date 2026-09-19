/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary OriginatorPlad
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorPlad  ::=  MilitaryString
 * ```
 */
export
type OriginatorPlad = MilitaryString; // DefinedType

let _cached_decoder_for_OriginatorPlad: $.ASN1Decoder<OriginatorPlad> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorPlad
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatorPlad (el: _Element): OriginatorPlad {
    if (!_cached_decoder_for_OriginatorPlad) { _cached_decoder_for_OriginatorPlad = _decode_MilitaryString; }
    return _cached_decoder_for_OriginatorPlad(el);
}

let _cached_encoder_for_OriginatorPlad: $.ASN1Encoder<OriginatorPlad> | null = null;

/**
 * @summary Encodes a(n) OriginatorPlad into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorPlad, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatorPlad (value: OriginatorPlad, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatorPlad) { _cached_encoder_for_OriginatorPlad = _encode_MilitaryString; }
    return _cached_encoder_for_OriginatorPlad(value, elGetter);
}


/* eslint-enable */
