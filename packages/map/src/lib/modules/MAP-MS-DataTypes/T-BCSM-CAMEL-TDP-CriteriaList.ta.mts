/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_T_BCSM_CAMEL_TDP_Criteria, _encode_T_BCSM_CAMEL_TDP_Criteria, T_BCSM_CAMEL_TDP_Criteria } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-Criteria.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary T_BCSM_CAMEL_TDP_CriteriaList
 * @description
 *
 * List of terminating BCSM CAMEL TDP criteria associated with T-CSI / VT-CSI.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BCSM-CAMEL-TDP-CriteriaList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     T-BCSM-CAMEL-TDP-Criteria
 * ```
 */
export
type T_BCSM_CAMEL_TDP_CriteriaList = T_BCSM_CAMEL_TDP_Criteria[]; // SequenceOfType

let _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList: $.ASN1Decoder<T_BCSM_CAMEL_TDP_CriteriaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_BCSM_CAMEL_TDP_CriteriaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_BCSM_CAMEL_TDP_CriteriaList (el: _Element): T_BCSM_CAMEL_TDP_CriteriaList {
    if (!_cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList) { _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList = $._decodeSequenceOf<T_BCSM_CAMEL_TDP_Criteria>(() => _decode_T_BCSM_CAMEL_TDP_Criteria); }
    const value = _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("T_BCSM_CAMEL_TDP_CriteriaList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList: $.ASN1Encoder<T_BCSM_CAMEL_TDP_CriteriaList> | null = null;

/**
 * @summary Encodes a(n) T_BCSM_CAMEL_TDP_CriteriaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BCSM_CAMEL_TDP_CriteriaList, encoded as an ASN.1 Element.
 */
export
function _encode_T_BCSM_CAMEL_TDP_CriteriaList (value: T_BCSM_CAMEL_TDP_CriteriaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList) { _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList = $._encodeSequenceOf<T_BCSM_CAMEL_TDP_Criteria>(() => _encode_T_BCSM_CAMEL_TDP_Criteria, $.BER); }
    return _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList(value, elGetter);
}


/* eslint-enable */
