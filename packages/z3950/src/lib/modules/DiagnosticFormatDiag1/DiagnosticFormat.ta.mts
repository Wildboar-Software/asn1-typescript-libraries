/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticFormat_Item, _decode_DiagnosticFormat_Item, _encode_DiagnosticFormat_Item } from "../DiagnosticFormatDiag1/DiagnosticFormat-Item.ta.mjs";
// export { DiagnosticFormat_Item, _decode_DiagnosticFormat_Item, _encode_DiagnosticFormat_Item } from "../DiagnosticFormatDiag1/DiagnosticFormat-Item.ta.mjs";


/**
 * @summary DiagnosticFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFormat  ::=   SEQUENCE OF SEQUENCE{ 
 *    diagnostic   [1] CHOICE{
 *                      defaultDiagRec          [1]   IMPLICIT DefaultDiagFormat,
 *                      explicitDiagnostic      [2]   DiagFormat} OPTIONAL, 
 *    message      [2] IMPLICIT InternationalString OPTIONAL}
 * ```
 */
export
type DiagnosticFormat = DiagnosticFormat_Item[]; // SequenceOfType

let _cached_decoder_for_DiagnosticFormat: $.ASN1Decoder<DiagnosticFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFormat (el: _Element): DiagnosticFormat {
    if (!_cached_decoder_for_DiagnosticFormat) { _cached_decoder_for_DiagnosticFormat = $._decodeSequenceOf<DiagnosticFormat_Item>(() => _decode_DiagnosticFormat_Item); }
    return _cached_decoder_for_DiagnosticFormat(el);
}

let _cached_encoder_for_DiagnosticFormat: $.ASN1Encoder<DiagnosticFormat> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFormat (value: DiagnosticFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFormat) { _cached_encoder_for_DiagnosticFormat = $._encodeSequenceOf<DiagnosticFormat_Item>(() => _encode_DiagnosticFormat_Item, $.BER); }
    return _cached_encoder_for_DiagnosticFormat(value, elGetter);
}


/* eslint-enable */
