/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrectionsData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrectionsData  ::=  IA5String
 * ```
 */
export
type CorrectionsData = IA5String; // IA5String

let _cached_decoder_for_CorrectionsData: $.ASN1Decoder<CorrectionsData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrectionsData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrectionsData (el: _Element): CorrectionsData {
    if (!_cached_decoder_for_CorrectionsData) { _cached_decoder_for_CorrectionsData = $._decodeIA5String; }
    return _cached_decoder_for_CorrectionsData(el);
}

let _cached_encoder_for_CorrectionsData: $.ASN1Encoder<CorrectionsData> | null = null;

/**
 * @summary Encodes a(n) CorrectionsData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrectionsData, encoded as an ASN.1 Element.
 */
export
function _encode_CorrectionsData (value: CorrectionsData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrectionsData) { _cached_encoder_for_CorrectionsData = $._encodeIA5String; }
    return _cached_encoder_for_CorrectionsData(value, elGetter);
}


/* eslint-enable */
