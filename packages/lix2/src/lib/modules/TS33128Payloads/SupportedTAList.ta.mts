/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAItem, _decode_TAItem, _encode_TAItem } from "../TS33128Payloads/TAItem.ta.mjs";
// export { TAItem, _decode_TAItem, _encode_TAItem } from "../TS33128Payloads/TAItem.ta.mjs";


/**
 * @summary SupportedTAList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedTAList  ::=  SEQUENCE (SIZE(1..MAX)) OF TAItem
 * ```
 */
export
type SupportedTAList = TAItem[]; // SequenceOfType

let _cached_decoder_for_SupportedTAList: $.ASN1Decoder<SupportedTAList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedTAList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedTAList (el: _Element): SupportedTAList {
    if (!_cached_decoder_for_SupportedTAList) { _cached_decoder_for_SupportedTAList = $._decodeSequenceOf<TAItem>(() => _decode_TAItem); }
    return _cached_decoder_for_SupportedTAList(el);
}

let _cached_encoder_for_SupportedTAList: $.ASN1Encoder<SupportedTAList> | null = null;

/**
 * @summary Encodes a(n) SupportedTAList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedTAList, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedTAList (value: SupportedTAList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedTAList) { _cached_encoder_for_SupportedTAList = $._encodeSequenceOf<TAItem>(() => _encode_TAItem, $.BER); }
    return _cached_encoder_for_SupportedTAList(value, elGetter);
}


/* eslint-enable */
