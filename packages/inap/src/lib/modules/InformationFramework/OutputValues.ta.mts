/* eslint-disable */
import {
    ASN1Element as _Element,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";


/**
 * @summary OutputValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutputValues  ::=  CHOICE {
 *   selectedValues
 *     SEQUENCE SIZE (1..MAX) OF ATTRIBUTE.&Type({SupportedAttributes}),
 *   matchedValuesOnly  NULL
 * }
 * ```
 */
export
type OutputValues =
    { selectedValues: _Element[] } /* CHOICE_ALT_ROOT */
    | { matchedValuesOnly: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OutputValues: $.ASN1Decoder<OutputValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutputValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OutputValues (el: _Element): OutputValues {
    if (!_cached_decoder_for_OutputValues) { _cached_decoder_for_OutputValues = $._decode_inextensible_choice<OutputValues>({
    "UNIVERSAL 16": [ "selectedValues", $._decodeSequenceOf<_Element>(() => $._decodeAny) ],
    "UNIVERSAL 5": [ "matchedValuesOnly", $._decodeNull ]
}); }
    return _cached_decoder_for_OutputValues(el);
}

let _cached_encoder_for_OutputValues: $.ASN1Encoder<OutputValues> | null = null;

/**
 * @summary Encodes a(n) OutputValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutputValues, encoded as an ASN.1 Element.
 */
export
function _encode_OutputValues (value: OutputValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OutputValues) { _cached_encoder_for_OutputValues = $._encode_choice<OutputValues>({
    "selectedValues": $._encodeSequenceOf<_Element>(() => $._encodeAny, $.BER),
    "matchedValuesOnly": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_OutputValues(value, elGetter);
}


/* eslint-enable */
