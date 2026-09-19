/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HumanString_Item, _decode_HumanString_Item, _encode_HumanString_Item } from "../RecordSyntax-explain/HumanString-Item.ta.mjs";
// export { HumanString_Item, _decode_HumanString_Item, _encode_HumanString_Item } from "../RecordSyntax-explain/HumanString-Item.ta.mjs";


/**
 * @summary HumanString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HumanString  ::=  SEQUENCE OF SEQUENCE {
 *              language     [0] IMPLICIT LanguageCode OPTIONAL,
 *              text         [1] IMPLICIT InternationalString}
 * ```
 */
export
type HumanString = HumanString_Item[]; // SequenceOfType

let _cached_decoder_for_HumanString: $.ASN1Decoder<HumanString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HumanString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HumanString (el: _Element): HumanString {
    if (!_cached_decoder_for_HumanString) { _cached_decoder_for_HumanString = $._decodeSequenceOf<HumanString_Item>(() => _decode_HumanString_Item); }
    return _cached_decoder_for_HumanString(el);
}

let _cached_encoder_for_HumanString: $.ASN1Encoder<HumanString> | null = null;

/**
 * @summary Encodes a(n) HumanString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HumanString, encoded as an ASN.1 Element.
 */
export
function _encode_HumanString (value: HumanString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HumanString) { _cached_encoder_for_HumanString = $._encodeSequenceOf<HumanString_Item>(() => _encode_HumanString_Item, $.BER); }
    return _cached_encoder_for_HumanString(value, elGetter);
}


/* eslint-enable */
