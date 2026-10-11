/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACP127DataData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataData  ::=  IA5String(SIZE (1..ub-data-size))
 * ```
 */
export
type ACP127DataData = IA5String; // IA5String

let _cached_decoder_for_ACP127DataData: $.ASN1Decoder<ACP127DataData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACP127DataData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACP127DataData (el: _Element): ACP127DataData {
    if (!_cached_decoder_for_ACP127DataData) { _cached_decoder_for_ACP127DataData = $._decodeIA5String; }
    return _cached_decoder_for_ACP127DataData(el);
}

let _cached_encoder_for_ACP127DataData: $.ASN1Encoder<ACP127DataData> | null = null;

/**
 * @summary Encodes a(n) ACP127DataData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACP127DataData, encoded as an ASN.1 Element.
 */
export
function _encode_ACP127DataData (value: ACP127DataData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACP127DataData) { _cached_encoder_for_ACP127DataData = $._encodeIA5String; }
    return _cached_encoder_for_ACP127DataData(value, elGetter);
}


/* eslint-enable */
