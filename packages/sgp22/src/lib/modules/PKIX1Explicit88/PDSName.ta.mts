/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDSName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSName  ::=  PrintableString (SIZE (1..ub-pds-name-length))
 * ```
 */
export
type PDSName = PrintableString; // PrintableString

let _cached_decoder_for_PDSName: $.ASN1Decoder<PDSName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDSName (el: _Element): PDSName {
    if (!_cached_decoder_for_PDSName) { _cached_decoder_for_PDSName = $._decodePrintableString; }
    return _cached_decoder_for_PDSName(el);
}

let _cached_encoder_for_PDSName: $.ASN1Encoder<PDSName> | null = null;

/**
 * @summary Encodes a(n) PDSName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSName, encoded as an ASN.1 Element.
 */
export
function _encode_PDSName (value: PDSName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDSName) { _cached_encoder_for_PDSName = $._encodePrintableString; }
    return _cached_encoder_for_PDSName(value, elGetter);
}


/* eslint-enable */
