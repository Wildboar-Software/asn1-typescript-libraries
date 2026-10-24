/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";
// export { IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";


/**
 * @summary IRISequence
 * @description
 * 
 * Optional aggregation of `IRIContent` when several IRI records are available
 * at one time for the same LEA destination. As a general rule, a record created
 * at any event is sent immediately and is not held in the DF or MF in order to
 * apply aggregation. When aggregation is not used, `IRIContent` is chosen
 * instead. National or regional requirements govern use of the option, because
 * IRI delivery is time-constrained.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 5.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRISequence  ::=  SEQUENCE OF IRIContent
 * ```
 */
export
type IRISequence = IRIContent[]; // SequenceOfType

let _cached_decoder_for_IRISequence: $.ASN1Decoder<IRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRISequence (el: _Element): IRISequence {
    if (!_cached_decoder_for_IRISequence) { _cached_decoder_for_IRISequence = $._decodeSequenceOf<IRIContent>(() => _decode_IRIContent); }
    return _cached_decoder_for_IRISequence(el);
}

let _cached_encoder_for_IRISequence: $.ASN1Encoder<IRISequence> | null = null;

/**
 * @summary Encodes a(n) IRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_IRISequence (value: IRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRISequence) { _cached_encoder_for_IRISequence = $._encodeSequenceOf<IRIContent>(() => _encode_IRIContent, $.BER); }
    return _cached_encoder_for_IRISequence(value, elGetter);
}


/* eslint-enable */
