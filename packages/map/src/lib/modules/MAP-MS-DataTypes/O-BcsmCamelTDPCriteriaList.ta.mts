/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_O_BcsmCamelTDP_Criteria, _encode_O_BcsmCamelTDP_Criteria, O_BcsmCamelTDP_Criteria } from "../MAP-MS-DataTypes/O-BcsmCamelTDP-Criteria.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary O_BcsmCamelTDPCriteriaList
 * @description
 *
 * List of O-BCSM CAMEL TDP criteria (SIZE 1..10), associated with O-CSI. (3GPP
 * TS 29.002 V19.1.0 clauses 8.8.1.3 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmCamelTDPCriteriaList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     O-BcsmCamelTDP-Criteria
 * ```
 */
export
type O_BcsmCamelTDPCriteriaList = O_BcsmCamelTDP_Criteria[]; // SequenceOfType

let _cached_decoder_for_O_BcsmCamelTDPCriteriaList: $.ASN1Decoder<O_BcsmCamelTDPCriteriaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmCamelTDPCriteriaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_BcsmCamelTDPCriteriaList (el: _Element): O_BcsmCamelTDPCriteriaList {
    if (!_cached_decoder_for_O_BcsmCamelTDPCriteriaList) { _cached_decoder_for_O_BcsmCamelTDPCriteriaList = $._decodeSequenceOf<O_BcsmCamelTDP_Criteria>(() => _decode_O_BcsmCamelTDP_Criteria); }
    const value = _cached_decoder_for_O_BcsmCamelTDPCriteriaList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("O_BcsmCamelTDPCriteriaList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_O_BcsmCamelTDPCriteriaList: $.ASN1Encoder<O_BcsmCamelTDPCriteriaList> | null = null;

/**
 * @summary Encodes a(n) O_BcsmCamelTDPCriteriaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmCamelTDPCriteriaList, encoded as an ASN.1 Element.
 */
export
function _encode_O_BcsmCamelTDPCriteriaList (value: O_BcsmCamelTDPCriteriaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_BcsmCamelTDPCriteriaList) { _cached_encoder_for_O_BcsmCamelTDPCriteriaList = $._encodeSequenceOf<O_BcsmCamelTDP_Criteria>(() => _encode_O_BcsmCamelTDP_Criteria, $.BER); }
    return _cached_encoder_for_O_BcsmCamelTDPCriteriaList(value, elGetter);
}


/* eslint-enable */
