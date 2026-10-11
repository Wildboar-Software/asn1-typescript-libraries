/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BasicServiceCode, _encode_BasicServiceCode, BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";


import { maxNumOfBasicServiceGroups } from "./maxNumOfBasicServiceGroups.va.mjs";

/**
 * @summary BasicServiceGroupList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF `BasicServiceCode` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicServiceGroupList  ::=  SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF
 *     BasicServiceCode
 * ```
 */
export
type BasicServiceGroupList = BasicServiceCode[]; // SequenceOfType

let _cached_decoder_for_BasicServiceGroupList: $.ASN1Decoder<BasicServiceGroupList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicServiceGroupList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicServiceGroupList (el: _Element): BasicServiceGroupList {
    if (!_cached_decoder_for_BasicServiceGroupList) { _cached_decoder_for_BasicServiceGroupList = $._decodeSequenceOf<BasicServiceCode>(() => _decode_BasicServiceCode); }
    const value = _cached_decoder_for_BasicServiceGroupList(el);
    if (value.length < 1 || value.length > maxNumOfBasicServiceGroups) {
        throw new ASN1SizeError("BasicServiceGroupList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_BasicServiceGroupList: $.ASN1Encoder<BasicServiceGroupList> | null = null;

/**
 * @summary Encodes a(n) BasicServiceGroupList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicServiceGroupList, encoded as an ASN.1 Element.
 */
export
function _encode_BasicServiceGroupList (value: BasicServiceGroupList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicServiceGroupList) { _cached_encoder_for_BasicServiceGroupList = $._encodeSequenceOf<BasicServiceCode>(() => _encode_BasicServiceCode, $.BER); }
    return _cached_encoder_for_BasicServiceGroupList(value, elGetter);
}


/* eslint-enable */
