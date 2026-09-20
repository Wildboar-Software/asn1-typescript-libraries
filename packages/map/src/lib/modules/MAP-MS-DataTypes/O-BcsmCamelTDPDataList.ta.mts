/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_O_BcsmCamelTDPData, _encode_O_BcsmCamelTDPData, O_BcsmCamelTDPData } from "../MAP-MS-DataTypes/O-BcsmCamelTDPData.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary O_BcsmCamelTDPDataList
 * @description
 *
 * O-BCSM CAMEL TDP data (SIZE 1..10). Shall not contain more than one instance
 * with the same `o-BcsmTriggerDetectionPoint`. For CAMEL phase 2 only one
 * instance is allowed, with DP2 (`collectedInfo`). (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmCamelTDPDataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     O-BcsmCamelTDPData
 * ```
 */
export
type O_BcsmCamelTDPDataList = O_BcsmCamelTDPData[]; // SequenceOfType

let _cached_decoder_for_O_BcsmCamelTDPDataList: $.ASN1Decoder<O_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmCamelTDPDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_BcsmCamelTDPDataList (el: _Element): O_BcsmCamelTDPDataList {
    if (!_cached_decoder_for_O_BcsmCamelTDPDataList) { _cached_decoder_for_O_BcsmCamelTDPDataList = $._decodeSequenceOf<O_BcsmCamelTDPData>(() => _decode_O_BcsmCamelTDPData); }
    const value = _cached_decoder_for_O_BcsmCamelTDPDataList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("O_BcsmCamelTDPDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_O_BcsmCamelTDPDataList: $.ASN1Encoder<O_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Encodes a(n) O_BcsmCamelTDPDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmCamelTDPDataList, encoded as an ASN.1 Element.
 */
export
function _encode_O_BcsmCamelTDPDataList (value: O_BcsmCamelTDPDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_BcsmCamelTDPDataList) { _cached_encoder_for_O_BcsmCamelTDPDataList = $._encodeSequenceOf<O_BcsmCamelTDPData>(() => _encode_O_BcsmCamelTDPData, $.BER); }
    return _cached_encoder_for_O_BcsmCamelTDPDataList(value, elGetter);
}


/* eslint-enable */
