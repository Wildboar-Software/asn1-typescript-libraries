/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SpecificAPNInfo, _encode_SpecificAPNInfo, SpecificAPNInfo } from "../MAP-MS-DataTypes/SpecificAPNInfo.ta.mjs";


import { maxNumOfSpecificAPNInfos } from "./maxNumOfSpecificAPNInfos.va.mjs";

/**
 * @summary SpecificAPNInfoList
 * @description
 *
 * List of up to 50 per-APN PDN GW identities.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificAPNInfoList  ::=  SEQUENCE SIZE (1..maxNumOfSpecificAPNInfos) OF
 *     SpecificAPNInfo
 * ```
 */
export
type SpecificAPNInfoList = SpecificAPNInfo[]; // SequenceOfType

let _cached_decoder_for_SpecificAPNInfoList: $.ASN1Decoder<SpecificAPNInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificAPNInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpecificAPNInfoList (el: _Element): SpecificAPNInfoList {
    if (!_cached_decoder_for_SpecificAPNInfoList) { _cached_decoder_for_SpecificAPNInfoList = $._decodeSequenceOf<SpecificAPNInfo>(() => _decode_SpecificAPNInfo); }
    const value = _cached_decoder_for_SpecificAPNInfoList(el);
    if (value.length < 1 || value.length > maxNumOfSpecificAPNInfos) {
        throw new ASN1SizeError("SpecificAPNInfoList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SpecificAPNInfoList: $.ASN1Encoder<SpecificAPNInfoList> | null = null;

/**
 * @summary Encodes a(n) SpecificAPNInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificAPNInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificAPNInfoList (value: SpecificAPNInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpecificAPNInfoList) { _cached_encoder_for_SpecificAPNInfoList = $._encodeSequenceOf<SpecificAPNInfo>(() => _encode_SpecificAPNInfo, $.BER); }
    return _cached_encoder_for_SpecificAPNInfoList(value, elGetter);
}


/* eslint-enable */
