/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ReportingPLMN, _encode_ReportingPLMN, ReportingPLMN } from "../MAP-LCS-DataTypes/ReportingPLMN.ta.mjs";


import { maxNumOfReportingPLMN } from "./maxNumOfReportingPLMN.va.mjs";

/**
 * @summary PLMNList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfReportingPLMN) OF ReportingPLMN (3GPP TS 29.002
 * V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNList ::=  SEQUENCE SIZE (1..maxNumOfReportingPLMN) OF
 *     ReportingPLMN
 * ```
 */
export
type PLMNList = ReportingPLMN[]; // SequenceOfType

let _cached_decoder_for_PLMNList: $.ASN1Decoder<PLMNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNList (el: _Element): PLMNList {
    if (!_cached_decoder_for_PLMNList) { _cached_decoder_for_PLMNList = $._decodeSequenceOf<ReportingPLMN>(() => _decode_ReportingPLMN); }
    const value = _cached_decoder_for_PLMNList(el);
    if (value.length < 1 || value.length > maxNumOfReportingPLMN) {
        throw new ASN1SizeError("PLMNList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_PLMNList: $.ASN1Encoder<PLMNList> | null = null;

/**
 * @summary Encodes a(n) PLMNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNList (value: PLMNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNList) { _cached_encoder_for_PLMNList = $._encodeSequenceOf<ReportingPLMN>(() => _encode_ReportingPLMN, $.BER); }
    return _cached_encoder_for_PLMNList(value, elGetter);
}


/* eslint-enable */
