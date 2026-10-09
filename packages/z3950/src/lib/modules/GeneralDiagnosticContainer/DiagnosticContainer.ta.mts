/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary DiagnosticContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticContainer  ::=  SEQUENCE OF DiagRec
 * ```
 */
export
type DiagnosticContainer = DiagRec[]; // SequenceOfType

let _cached_decoder_for_DiagnosticContainer: $.ASN1Decoder<DiagnosticContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticContainer (el: _Element): DiagnosticContainer {
    if (!_cached_decoder_for_DiagnosticContainer) { _cached_decoder_for_DiagnosticContainer = $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec); }
    return _cached_decoder_for_DiagnosticContainer(el);
}

let _cached_encoder_for_DiagnosticContainer: $.ASN1Encoder<DiagnosticContainer> | null = null;

/**
 * @summary Encodes a(n) DiagnosticContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticContainer, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticContainer (value: DiagnosticContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticContainer) { _cached_encoder_for_DiagnosticContainer = $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER); }
    return _cached_encoder_for_DiagnosticContainer(value, elGetter);
}


/* eslint-enable */
