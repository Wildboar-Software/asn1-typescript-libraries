/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_GPRS_CamelTDPData, _encode_GPRS_CamelTDPData, GPRS_CamelTDPData } from "../MAP-MS-DataTypes/GPRS-CamelTDPData.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary GPRS_CamelTDPDataList
 * @description
 *
 * List of GPRS CAMEL TDP data. Shall not contain more than one instance with
 * the same gprs-TriggerDetectionPoint (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-CamelTDPDataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     GPRS-CamelTDPData
 * ```
 */
export
type GPRS_CamelTDPDataList = GPRS_CamelTDPData[]; // SequenceOfType

let _cached_decoder_for_GPRS_CamelTDPDataList: $.ASN1Decoder<GPRS_CamelTDPDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_CamelTDPDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_CamelTDPDataList (el: _Element): GPRS_CamelTDPDataList {
    if (!_cached_decoder_for_GPRS_CamelTDPDataList) { _cached_decoder_for_GPRS_CamelTDPDataList = $._decodeSequenceOf<GPRS_CamelTDPData>(() => _decode_GPRS_CamelTDPData); }
    const value = _cached_decoder_for_GPRS_CamelTDPDataList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("GPRS_CamelTDPDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_GPRS_CamelTDPDataList: $.ASN1Encoder<GPRS_CamelTDPDataList> | null = null;

/**
 * @summary Encodes a(n) GPRS_CamelTDPDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_CamelTDPDataList, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_CamelTDPDataList (value: GPRS_CamelTDPDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_CamelTDPDataList) { _cached_encoder_for_GPRS_CamelTDPDataList = $._encodeSequenceOf<GPRS_CamelTDPData>(() => _encode_GPRS_CamelTDPData, $.BER); }
    return _cached_encoder_for_GPRS_CamelTDPDataList(value, elGetter);
}


/* eslint-enable */
