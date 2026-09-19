/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentType  ::=  PrintableString(SIZE(1..2))
 * ```
 */
export
type DocumentType = PrintableString; // PrintableString

let _cached_decoder_for_DocumentType: $.ASN1Decoder<DocumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DocumentType (el: _Element): DocumentType {
    if (!_cached_decoder_for_DocumentType) { _cached_decoder_for_DocumentType = $._decodePrintableString; }
    return _cached_decoder_for_DocumentType(el);
}

let _cached_encoder_for_DocumentType: $.ASN1Encoder<DocumentType> | null = null;

/**
 * @summary Encodes a(n) DocumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentType, encoded as an ASN.1 Element.
 */
export
function _encode_DocumentType (value: DocumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DocumentType) { _cached_encoder_for_DocumentType = $._encodePrintableString; }
    return _cached_encoder_for_DocumentType(value, elGetter);
}


/* eslint-enable */
