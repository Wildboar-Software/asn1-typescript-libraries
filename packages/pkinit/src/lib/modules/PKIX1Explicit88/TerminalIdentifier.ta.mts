/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TerminalIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalIdentifier  ::=  PrintableString (SIZE
 * (1..ub-terminal-id-length))
 * ```
 */
export
type TerminalIdentifier = PrintableString; // PrintableString

let _cached_decoder_for_TerminalIdentifier: $.ASN1Decoder<TerminalIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalIdentifier (el: _Element): TerminalIdentifier {
    if (!_cached_decoder_for_TerminalIdentifier) { _cached_decoder_for_TerminalIdentifier = $._decodePrintableString; }
    return _cached_decoder_for_TerminalIdentifier(el);
}

let _cached_encoder_for_TerminalIdentifier: $.ASN1Encoder<TerminalIdentifier> | null = null;

/**
 * @summary Encodes a(n) TerminalIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalIdentifier (value: TerminalIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalIdentifier) { _cached_encoder_for_TerminalIdentifier = $._encodePrintableString; }
    return _cached_encoder_for_TerminalIdentifier(value, elGetter);
}


/* eslint-enable */
