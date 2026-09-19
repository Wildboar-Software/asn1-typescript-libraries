/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNSupportItem, _decode_PLMNSupportItem, _encode_PLMNSupportItem } from "../TS33128Payloads/PLMNSupportItem.ta.mjs";
// export { PLMNSupportItem, _decode_PLMNSupportItem, _encode_PLMNSupportItem } from "../TS33128Payloads/PLMNSupportItem.ta.mjs";


/**
 * @summary PLMNSupportList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNSupportList  ::=  SEQUENCE (SIZE(1..MAX)) OF PLMNSupportItem
 * ```
 */
export
type PLMNSupportList = PLMNSupportItem[]; // SequenceOfType

let _cached_decoder_for_PLMNSupportList: $.ASN1Decoder<PLMNSupportList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNSupportList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNSupportList (el: _Element): PLMNSupportList {
    if (!_cached_decoder_for_PLMNSupportList) { _cached_decoder_for_PLMNSupportList = $._decodeSequenceOf<PLMNSupportItem>(() => _decode_PLMNSupportItem); }
    return _cached_decoder_for_PLMNSupportList(el);
}

let _cached_encoder_for_PLMNSupportList: $.ASN1Encoder<PLMNSupportList> | null = null;

/**
 * @summary Encodes a(n) PLMNSupportList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNSupportList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNSupportList (value: PLMNSupportList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNSupportList) { _cached_encoder_for_PLMNSupportList = $._encodeSequenceOf<PLMNSupportItem>(() => _encode_PLMNSupportItem, $.BER); }
    return _cached_encoder_for_PLMNSupportList(value, elGetter);
}


/* eslint-enable */
