/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SingletonChoice, _decode_SingletonChoice, _encode_SingletonChoice } from "../PKIS/SingletonChoice.ta.mjs";
// export { SingletonChoice, _decode_SingletonChoice, _encode_SingletonChoice } from "../PKIS/SingletonChoice.ta.mjs";


/**
 * @summary Singletons
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Singletons  ::=  SEQUENCE SIZE (1..16) OF SingletonChoice
 * ```
 */
export
type Singletons = SingletonChoice[]; // SequenceOfType

let _cached_decoder_for_Singletons: $.ASN1Decoder<Singletons> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Singletons
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Singletons (el: _Element): Singletons {
    if (!_cached_decoder_for_Singletons) { _cached_decoder_for_Singletons = $._decodeSequenceOf<SingletonChoice>(() => _decode_SingletonChoice); }
    return _cached_decoder_for_Singletons(el);
}

let _cached_encoder_for_Singletons: $.ASN1Encoder<Singletons> | null = null;

/**
 * @summary Encodes a(n) Singletons into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Singletons, encoded as an ASN.1 Element.
 */
export
function _encode_Singletons (value: Singletons, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Singletons) { _cached_encoder_for_Singletons = $._encodeSequenceOf<SingletonChoice>(() => _encode_SingletonChoice, $.BER); }
    return _cached_encoder_for_Singletons(value, elGetter);
}


/* eslint-enable */
