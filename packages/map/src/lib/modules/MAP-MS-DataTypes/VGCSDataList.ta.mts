/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_VoiceGroupCallData, _encode_VoiceGroupCallData, VoiceGroupCallData } from "../MAP-MS-DataTypes/VoiceGroupCallData.ta.mjs";


import { maxNumOfVGCSGroupIds } from "./maxNumOfVGCSGroupIds.va.mjs";

/**
 * @summary VGCSDataList
 * @description
 *
 * Voice Group Call Service groups the subscriber may belong to.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.39 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VGCSDataList  ::=  SEQUENCE SIZE (1..maxNumOfVGCSGroupIds) OF
 *     VoiceGroupCallData
 * ```
 */
export
type VGCSDataList = VoiceGroupCallData[]; // SequenceOfType

let _cached_decoder_for_VGCSDataList: $.ASN1Decoder<VGCSDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VGCSDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VGCSDataList (el: _Element): VGCSDataList {
    if (!_cached_decoder_for_VGCSDataList) { _cached_decoder_for_VGCSDataList = $._decodeSequenceOf<VoiceGroupCallData>(() => _decode_VoiceGroupCallData); }
    const value = _cached_decoder_for_VGCSDataList(el);
    if (value.length < 1 || value.length > maxNumOfVGCSGroupIds) {
        throw new ASN1SizeError("VGCSDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_VGCSDataList: $.ASN1Encoder<VGCSDataList> | null = null;

/**
 * @summary Encodes a(n) VGCSDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VGCSDataList, encoded as an ASN.1 Element.
 */
export
function _encode_VGCSDataList (value: VGCSDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VGCSDataList) { _cached_encoder_for_VGCSDataList = $._encodeSequenceOf<VoiceGroupCallData>(() => _encode_VoiceGroupCallData, $.BER); }
    return _cached_encoder_for_VGCSDataList(value, elGetter);
}


/* eslint-enable */
