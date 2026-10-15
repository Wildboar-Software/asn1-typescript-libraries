/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSSerSubscriberList_Item, _decode_MBMSSerSubscriberList_Item, _encode_MBMSSerSubscriberList_Item } from "../MBMSUmtsHI2Operations/MBMSSerSubscriberList-Item.ta.mjs";
// export { MBMSSerSubscriberList_Item, _decode_MBMSSerSubscriberList_Item, _encode_MBMSSerSubscriberList_Item } from "../MBMSUmtsHI2Operations/MBMSSerSubscriberList-Item.ta.mjs";


/**
 * @summary MBMSSerSubscriberList
 * @description
 * 
 * List of users subscribed to the MBMS service the target asked to join. The
 * list may be very long. Optional on the clause 9.5.1 records (table 9.2).
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSSerSubscriberList  ::=  SEQUENCE OF SEQUENCE
 *     {
 *         mBMSSERSUBSCRIBERLIST    [1]    UTF8String,
 *         ...
 *     }
 * ```
 */
export
type MBMSSerSubscriberList = MBMSSerSubscriberList_Item[]; // SequenceOfType

let _cached_decoder_for_MBMSSerSubscriberList: $.ASN1Decoder<MBMSSerSubscriberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSSerSubscriberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSSerSubscriberList (el: _Element): MBMSSerSubscriberList {
    if (!_cached_decoder_for_MBMSSerSubscriberList) { _cached_decoder_for_MBMSSerSubscriberList = $._decodeSequenceOf<MBMSSerSubscriberList_Item>(() => _decode_MBMSSerSubscriberList_Item); }
    return _cached_decoder_for_MBMSSerSubscriberList(el);
}

let _cached_encoder_for_MBMSSerSubscriberList: $.ASN1Encoder<MBMSSerSubscriberList> | null = null;

/**
 * @summary Encodes a(n) MBMSSerSubscriberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSSerSubscriberList, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSSerSubscriberList (value: MBMSSerSubscriberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSSerSubscriberList) { _cached_encoder_for_MBMSSerSubscriberList = $._encodeSequenceOf<MBMSSerSubscriberList_Item>(() => _encode_MBMSSerSubscriberList_Item, $.BER); }
    return _cached_encoder_for_MBMSSerSubscriberList(value, elGetter);
}


/* eslint-enable */
