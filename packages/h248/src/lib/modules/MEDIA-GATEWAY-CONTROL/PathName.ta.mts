/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PathName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathName  ::=  IA5String(SIZE (1..64))
 * ```
 */
export
type PathName = IA5String; // IA5String

let _cached_decoder_for_PathName: $.ASN1Decoder<PathName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PathName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PathName (el: _Element): PathName {
    if (!_cached_decoder_for_PathName) { _cached_decoder_for_PathName = $._decodeIA5String; }
    return _cached_decoder_for_PathName(el);
}

let _cached_encoder_for_PathName: $.ASN1Encoder<PathName> | null = null;

/**
 * @summary Encodes a(n) PathName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PathName, encoded as an ASN.1 Element.
 */
export
function _encode_PathName (value: PathName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PathName) { _cached_encoder_for_PathName = $._encodeIA5String; }
    return _cached_encoder_for_PathName(value, elGetter);
}


/* eslint-enable */
