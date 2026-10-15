/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSNodeList_Item, _decode_MBMSNodeList_Item, _encode_MBMSNodeList_Item } from "../MBMSUmtsHI2Operations/MBMSNodeList-Item.ta.mjs";
// export { MBMSNodeList_Item, _decode_MBMSNodeList_Item, _encode_MBMSNodeList_Item } from "../MBMSUmtsHI2Operations/MBMSNodeList-Item.ta.mjs";


/**
 * @summary MBMSNodeList
 * @description
 * 
 * Downstream nodes that requested the MBMS bearer and that receive
 * notifications and MBMS data. Table 9.2 also maps the BM-SC identifier to
 * mBMSNODELIST.
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSNodeList  ::=  SEQUENCE OF SEQUENCE
 *     {
 *         mBMSNODELIST    [1]    SEQUENCE
 *         {
 *             mbmsnodeIPAdress    [1]      IPAddress     OPTIONAL,
 *             mbmsnodeName        [2]        UTF8String    OPTIONAL,
 *             ...
 *         },
 *         ...
 *     }
 * ```
 */
export
type MBMSNodeList = MBMSNodeList_Item[]; // SequenceOfType

let _cached_decoder_for_MBMSNodeList: $.ASN1Decoder<MBMSNodeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSNodeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSNodeList (el: _Element): MBMSNodeList {
    if (!_cached_decoder_for_MBMSNodeList) { _cached_decoder_for_MBMSNodeList = $._decodeSequenceOf<MBMSNodeList_Item>(() => _decode_MBMSNodeList_Item); }
    return _cached_decoder_for_MBMSNodeList(el);
}

let _cached_encoder_for_MBMSNodeList: $.ASN1Encoder<MBMSNodeList> | null = null;

/**
 * @summary Encodes a(n) MBMSNodeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSNodeList, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSNodeList (value: MBMSNodeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSNodeList) { _cached_encoder_for_MBMSNodeList = $._encodeSequenceOf<MBMSNodeList_Item>(() => _encode_MBMSNodeList_Item, $.BER); }
    return _cached_encoder_for_MBMSNodeList(value, elGetter);
}


/* eslint-enable */
