/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingResults, _decode_ChainingResults, _encode_ChainingResults } from "../DistributedOperations/ChainingResults.ta.mjs";
// export { ChainingResults, _decode_ChainingResults, _encode_ChainingResults } from "../DistributedOperations/ChainingResults.ta.mjs";


/**
 * @summary IN_ChainingResults
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ChainingResults  ::= 
 *   ChainingResults
 *     (WITH COMPONENTS {
 *        ...,
 *        info             ABSENT,
 *        crossReferences  ABSENT
 *      })
 * ```
 */
export
type IN_ChainingResults = ChainingResults; // DefinedType

let _cached_decoder_for_IN_ChainingResults: $.ASN1Decoder<IN_ChainingResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ChainingResults
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ChainingResults (el: _Element): IN_ChainingResults {
    if (!_cached_decoder_for_IN_ChainingResults) { _cached_decoder_for_IN_ChainingResults = _decode_ChainingResults; }
    return _cached_decoder_for_IN_ChainingResults(el);
}

let _cached_encoder_for_IN_ChainingResults: $.ASN1Encoder<IN_ChainingResults> | null = null;

/**
 * @summary Encodes a(n) IN_ChainingResults into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ChainingResults, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ChainingResults (value: IN_ChainingResults, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ChainingResults) { _cached_encoder_for_IN_ChainingResults = _encode_ChainingResults; }
    return _cached_encoder_for_IN_ChainingResults(value, elGetter);
}


/* eslint-enable */
