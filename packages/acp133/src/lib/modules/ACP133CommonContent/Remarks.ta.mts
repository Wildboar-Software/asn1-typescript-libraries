/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Remarks
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Remarks  ::=  SEQUENCE OF PrintableString
 * ```
 */
export
type Remarks = PrintableString[]; // SequenceOfType

let _cached_decoder_for_Remarks: $.ASN1Decoder<Remarks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Remarks
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Remarks (el: _Element): Remarks {
    if (!_cached_decoder_for_Remarks) { _cached_decoder_for_Remarks = $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString); }
    return _cached_decoder_for_Remarks(el);
}

let _cached_encoder_for_Remarks: $.ASN1Encoder<Remarks> | null = null;

/**
 * @summary Encodes a(n) Remarks into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Remarks, encoded as an ASN.1 Element.
 */
export
function _encode_Remarks (value: Remarks, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Remarks) { _cached_encoder_for_Remarks = $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER); }
    return _cached_encoder_for_Remarks(value, elGetter);
}


/* eslint-enable */
