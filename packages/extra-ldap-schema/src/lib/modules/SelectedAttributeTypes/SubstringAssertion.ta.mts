/* eslint-disable */
import {
    ASN1ConstructionError,
    type ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SubstringAssertion_Item, _decode_SubstringAssertion_Item, _encode_SubstringAssertion_Item } from "../SelectedAttributeTypes/SubstringAssertion-Item.ta.mjs";

/**
 * @summary SubstringAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  UnboundedDirectoryString,
 *   any      [1]  UnboundedDirectoryString,
 *   final    [2]  UnboundedDirectoryString,
 *     -- at most one initial and one final component
 *   control       Attribute{{SupportedAttributes}},
 *     -- Used to specify interpretation of the following items
 *   ... }
 * ```
 */
export
type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType

let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<SubstringAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubstringAssertion (el: _Element): SubstringAssertion {
    if (!_cached_decoder_for_SubstringAssertion) { _cached_decoder_for_SubstringAssertion = $._decodeSequenceOf<SubstringAssertion_Item>(() => _decode_SubstringAssertion_Item); }
    const _decoded = _cached_decoder_for_SubstringAssertion(el);
    let _initial = 0;
    let _final = 0;
    for (const item of _decoded) {
        if (Object.hasOwn(item, "initial")) _initial++;
        if (Object.hasOwn(item, "final")) _final++;
    }
    if (_initial > 1 || _final > 1) {
        throw new ASN1ConstructionError("SubstringAssertion has more than one initial or final component");
    }
    return _decoded;
}

let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<SubstringAssertion> | null = null;

/**
 * @summary Encodes a(n) SubstringAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_SubstringAssertion (value: SubstringAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubstringAssertion) { _cached_encoder_for_SubstringAssertion = $._encodeSequenceOf<SubstringAssertion_Item>(() => _encode_SubstringAssertion_Item, $.BER); }
    return _cached_encoder_for_SubstringAssertion(value, elGetter);
}

/* eslint-enable */
