/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TriggerResult, _decode_TriggerResult, _encode_TriggerResult } from "../IN-SSF-SCF-datatypes/TriggerResult.ta.mjs";
// export { TriggerResult, _decode_TriggerResult, _encode_TriggerResult } from "../IN-SSF-SCF-datatypes/TriggerResult.ta.mjs";


/**
 * @summary TriggerResults
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResults  ::= 
 *   SEQUENCE OF TriggerResult
 * ```
 */
export
type TriggerResults = TriggerResult[]; // SequenceOfType

let _cached_decoder_for_TriggerResults: $.ASN1Decoder<TriggerResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResults
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerResults (el: _Element): TriggerResults {
    if (!_cached_decoder_for_TriggerResults) { _cached_decoder_for_TriggerResults = $._decodeSequenceOf<TriggerResult>(() => _decode_TriggerResult); }
    return _cached_decoder_for_TriggerResults(el);
}

let _cached_encoder_for_TriggerResults: $.ASN1Encoder<TriggerResults> | null = null;

/**
 * @summary Encodes a(n) TriggerResults into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResults, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerResults (value: TriggerResults, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerResults) { _cached_encoder_for_TriggerResults = $._encodeSequenceOf<TriggerResult>(() => _encode_TriggerResult, $.BER); }
    return _cached_encoder_for_TriggerResults(value, elGetter);
}


/* eslint-enable */
