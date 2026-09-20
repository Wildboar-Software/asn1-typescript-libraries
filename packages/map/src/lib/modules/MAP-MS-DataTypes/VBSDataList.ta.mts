/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_VoiceBroadcastData, _encode_VoiceBroadcastData, VoiceBroadcastData } from "../MAP-MS-DataTypes/VoiceBroadcastData.ta.mjs";


import { maxNumOfVBSGroupIds } from "./maxNumOfVBSGroupIds.va.mjs";

/**
 * @summary VBSDataList
 * @description
 *
 * Voice Broadcast Service groups the subscriber may belong to. Per group,
 * whether the subscriber may only listen or may also initiate broadcast calls.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.40 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VBSDataList  ::=  SEQUENCE SIZE (1..maxNumOfVBSGroupIds) OF
 *     VoiceBroadcastData
 * ```
 */
export
type VBSDataList = VoiceBroadcastData[]; // SequenceOfType

let _cached_decoder_for_VBSDataList: $.ASN1Decoder<VBSDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VBSDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VBSDataList (el: _Element): VBSDataList {
    if (!_cached_decoder_for_VBSDataList) { _cached_decoder_for_VBSDataList = $._decodeSequenceOf<VoiceBroadcastData>(() => _decode_VoiceBroadcastData); }
    const value = _cached_decoder_for_VBSDataList(el);
    if (value.length < 1 || value.length > maxNumOfVBSGroupIds) {
        throw new ASN1SizeError("VBSDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_VBSDataList: $.ASN1Encoder<VBSDataList> | null = null;

/**
 * @summary Encodes a(n) VBSDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VBSDataList, encoded as an ASN.1 Element.
 */
export
function _encode_VBSDataList (value: VBSDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VBSDataList) { _cached_encoder_for_VBSDataList = $._encodeSequenceOf<VoiceBroadcastData>(() => _encode_VoiceBroadcastData, $.BER); }
    return _cached_encoder_for_VBSDataList(value, elGetter);
}


/* eslint-enable */
