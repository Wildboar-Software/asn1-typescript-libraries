/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sic  ::=  PrintableString(SIZE (lb-military-sic..ub-military-sic))
 * ```
 */
export
type Sic = PrintableString; // PrintableString

let _cached_decoder_for_Sic: $.ASN1Decoder<Sic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Sic (el: _Element): Sic {
    if (!_cached_decoder_for_Sic) { _cached_decoder_for_Sic = $._decodePrintableString; }
    return _cached_decoder_for_Sic(el);
}

let _cached_encoder_for_Sic: $.ASN1Encoder<Sic> | null = null;

/**
 * @summary Encodes a(n) Sic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sic, encoded as an ASN.1 Element.
 */
export
function _encode_Sic (value: Sic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Sic) { _cached_encoder_for_Sic = $._encodePrintableString; }
    return _cached_encoder_for_Sic(value, elGetter);
}


/* eslint-enable */
