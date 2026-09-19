/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Addressees
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Addressees  ::=  SEQUENCE OF PrintableString (SIZE (1..55))
 * ```
 */
export
type Addressees = PrintableString[]; // SequenceOfType

let _cached_decoder_for_Addressees: $.ASN1Decoder<Addressees> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Addressees
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Addressees (el: _Element): Addressees {
    if (!_cached_decoder_for_Addressees) { _cached_decoder_for_Addressees = $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString); }
    return _cached_decoder_for_Addressees(el);
}

let _cached_encoder_for_Addressees: $.ASN1Encoder<Addressees> | null = null;

/**
 * @summary Encodes a(n) Addressees into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Addressees, encoded as an ASN.1 Element.
 */
export
function _encode_Addressees (value: Addressees, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Addressees) { _cached_encoder_for_Addressees = $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER); }
    return _cached_encoder_for_Addressees(value, elGetter);
}


/* eslint-enable */
