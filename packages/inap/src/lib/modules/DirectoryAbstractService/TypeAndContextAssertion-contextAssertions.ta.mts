/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";
// export { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";


/**
 * @summary TypeAndContextAssertion_contextAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeAndContextAssertion-contextAssertions ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TypeAndContextAssertion_contextAssertions =
    { preference: ContextAssertion[] } /* CHOICE_ALT_ROOT */
    | { all: ContextAssertion[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TypeAndContextAssertion_contextAssertions: $.ASN1Decoder<TypeAndContextAssertion_contextAssertions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeAndContextAssertion_contextAssertions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeAndContextAssertion_contextAssertions (el: _Element): TypeAndContextAssertion_contextAssertions {
    if (!_cached_decoder_for_TypeAndContextAssertion_contextAssertions) { _cached_decoder_for_TypeAndContextAssertion_contextAssertions = $._decode_inextensible_choice<TypeAndContextAssertion_contextAssertions>({
    "UNIVERSAL 16": [ "preference", $._decodeSequenceOf<ContextAssertion>(() => _decode_ContextAssertion) ],
    "UNIVERSAL 17": [ "all", $._decodeSetOf<ContextAssertion>(() => _decode_ContextAssertion) ]
}); }
    return _cached_decoder_for_TypeAndContextAssertion_contextAssertions(el);
}

let _cached_encoder_for_TypeAndContextAssertion_contextAssertions: $.ASN1Encoder<TypeAndContextAssertion_contextAssertions> | null = null;

/**
 * @summary Encodes a(n) TypeAndContextAssertion_contextAssertions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeAndContextAssertion_contextAssertions, encoded as an ASN.1 Element.
 */
export
function _encode_TypeAndContextAssertion_contextAssertions (value: TypeAndContextAssertion_contextAssertions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeAndContextAssertion_contextAssertions) { _cached_encoder_for_TypeAndContextAssertion_contextAssertions = $._encode_choice<TypeAndContextAssertion_contextAssertions>({
    "preference": $._encodeSequenceOf<ContextAssertion>(() => _encode_ContextAssertion, $.BER),
    "all": $._encodeSetOf<ContextAssertion>(() => _encode_ContextAssertion, $.BER),
}, $.BER); }
    return _cached_encoder_for_TypeAndContextAssertion_contextAssertions(value, elGetter);
}


/* eslint-enable */
