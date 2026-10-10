/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_T_BcsmCamelTDPData, _encode_T_BcsmCamelTDPData, T_BcsmCamelTDPData } from "../MAP-MS-DataTypes/T-BcsmCamelTDPData.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary T_BcsmCamelTDPDataList
 * @description
 *
 * Shall not contain more than one instance with the same
 * `t-BcsmTriggerDetectionPoint`. CAMEL Phase 2 allows only one instance, with
 * TDP equal to DP12. CAMEL Phase 3 allows more TDPs.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BcsmCamelTDPDataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     T-BcsmCamelTDPData
 * ```
 */
export
type T_BcsmCamelTDPDataList = T_BcsmCamelTDPData[]; // SequenceOfType

let _cached_decoder_for_T_BcsmCamelTDPDataList: $.ASN1Decoder<T_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_BcsmCamelTDPDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_BcsmCamelTDPDataList (el: _Element): T_BcsmCamelTDPDataList {
    if (!_cached_decoder_for_T_BcsmCamelTDPDataList) { _cached_decoder_for_T_BcsmCamelTDPDataList = $._decodeSequenceOf<T_BcsmCamelTDPData>(() => _decode_T_BcsmCamelTDPData); }
    const value = _cached_decoder_for_T_BcsmCamelTDPDataList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("T_BcsmCamelTDPDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_T_BcsmCamelTDPDataList: $.ASN1Encoder<T_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Encodes a(n) T_BcsmCamelTDPDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BcsmCamelTDPDataList, encoded as an ASN.1 Element.
 */
export
function _encode_T_BcsmCamelTDPDataList (value: T_BcsmCamelTDPDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_BcsmCamelTDPDataList) { _cached_encoder_for_T_BcsmCamelTDPDataList = $._encodeSequenceOf<T_BcsmCamelTDPData>(() => _encode_T_BcsmCamelTDPData, $.BER); }
    return _cached_encoder_for_T_BcsmCamelTDPDataList(value, elGetter);
}


/* eslint-enable */
