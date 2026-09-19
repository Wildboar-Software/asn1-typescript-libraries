/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommonName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonName  ::=  PrintableString (SIZE (1..ub-common-name-length))
 * ```
 */
export
type CommonName = PrintableString; // PrintableString

let _cached_decoder_for_CommonName: $.ASN1Decoder<CommonName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonName (el: _Element): CommonName {
    if (!_cached_decoder_for_CommonName) { _cached_decoder_for_CommonName = $._decodePrintableString; }
    return _cached_decoder_for_CommonName(el);
}

let _cached_encoder_for_CommonName: $.ASN1Encoder<CommonName> | null = null;

/**
 * @summary Encodes a(n) CommonName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonName, encoded as an ASN.1 Element.
 */
export
function _encode_CommonName (value: CommonName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonName) { _cached_encoder_for_CommonName = $._encodePrintableString; }
    return _cached_encoder_for_CommonName(value, elGetter);
}


/* eslint-enable */
