/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DestinationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export
type DestinationIndicator = PrintableString; // PrintableString

let _cached_decoder_for_DestinationIndicator: $.ASN1Decoder<DestinationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationIndicator (el: _Element): DestinationIndicator {
    if (!_cached_decoder_for_DestinationIndicator) { _cached_decoder_for_DestinationIndicator = $._decodePrintableString; }
    return _cached_decoder_for_DestinationIndicator(el);
}

let _cached_encoder_for_DestinationIndicator: $.ASN1Encoder<DestinationIndicator> | null = null;

/**
 * @summary Encodes a(n) DestinationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationIndicator (value: DestinationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationIndicator) { _cached_encoder_for_DestinationIndicator = $._encodePrintableString; }
    return _cached_encoder_for_DestinationIndicator(value, elGetter);
}


/* eslint-enable */
