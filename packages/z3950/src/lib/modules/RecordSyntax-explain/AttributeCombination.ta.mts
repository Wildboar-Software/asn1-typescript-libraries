/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeOccurrence, _decode_AttributeOccurrence, _encode_AttributeOccurrence } from "../RecordSyntax-explain/AttributeOccurrence.ta.mjs";
// export { AttributeOccurrence, _decode_AttributeOccurrence, _encode_AttributeOccurrence } from "../RecordSyntax-explain/AttributeOccurrence.ta.mjs";


/**
 * @summary AttributeCombination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCombination  ::=  SEQUENCE OF AttributeOccurrence
 * ```
 */
export
type AttributeCombination = AttributeOccurrence[]; // SequenceOfType

let _cached_decoder_for_AttributeCombination: $.ASN1Decoder<AttributeCombination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCombination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCombination (el: _Element): AttributeCombination {
    if (!_cached_decoder_for_AttributeCombination) { _cached_decoder_for_AttributeCombination = $._decodeSequenceOf<AttributeOccurrence>(() => _decode_AttributeOccurrence); }
    return _cached_decoder_for_AttributeCombination(el);
}

let _cached_encoder_for_AttributeCombination: $.ASN1Encoder<AttributeCombination> | null = null;

/**
 * @summary Encodes a(n) AttributeCombination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCombination, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCombination (value: AttributeCombination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCombination) { _cached_encoder_for_AttributeCombination = $._encodeSequenceOf<AttributeOccurrence>(() => _encode_AttributeOccurrence, $.BER); }
    return _cached_encoder_for_AttributeCombination(value, elGetter);
}


/* eslint-enable */
