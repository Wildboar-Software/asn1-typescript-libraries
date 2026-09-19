/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeletexCommonName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexCommonName  ::=  TeletexString (SIZE (1..ub-common-name-length))
 * ```
 */
export
type TeletexCommonName = TeletexString; // TeletexString

let _cached_decoder_for_TeletexCommonName: $.ASN1Decoder<TeletexCommonName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexCommonName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TeletexCommonName (el: _Element): TeletexCommonName {
    if (!_cached_decoder_for_TeletexCommonName) { _cached_decoder_for_TeletexCommonName = $._decodeTeletexString; }
    return _cached_decoder_for_TeletexCommonName(el);
}

let _cached_encoder_for_TeletexCommonName: $.ASN1Encoder<TeletexCommonName> | null = null;

/**
 * @summary Encodes a(n) TeletexCommonName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexCommonName, encoded as an ASN.1 Element.
 */
export
function _encode_TeletexCommonName (value: TeletexCommonName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TeletexCommonName) { _cached_encoder_for_TeletexCommonName = $._encodeTeletexString; }
    return _cached_encoder_for_TeletexCommonName(value, elGetter);
}


/* eslint-enable */
