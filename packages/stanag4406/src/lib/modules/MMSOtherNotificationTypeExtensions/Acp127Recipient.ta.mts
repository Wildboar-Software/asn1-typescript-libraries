/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127Recipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127Recipient  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127Recipient = PrintableString; // PrintableString

let _cached_decoder_for_Acp127Recipient: $.ASN1Decoder<Acp127Recipient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127Recipient
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127Recipient (el: _Element): Acp127Recipient {
    if (!_cached_decoder_for_Acp127Recipient) { _cached_decoder_for_Acp127Recipient = $._decodePrintableString; }
    return _cached_decoder_for_Acp127Recipient(el);
}

let _cached_encoder_for_Acp127Recipient: $.ASN1Encoder<Acp127Recipient> | null = null;

/**
 * @summary Encodes a(n) Acp127Recipient into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Acp127Recipient, encoded as an ASN.1 Element.
 */
export
function _encode_Acp127Recipient (value: Acp127Recipient, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Acp127Recipient) { _cached_encoder_for_Acp127Recipient = $._encodePrintableString; }
    return _cached_encoder_for_Acp127Recipient(value, elGetter);
}


/* eslint-enable */
