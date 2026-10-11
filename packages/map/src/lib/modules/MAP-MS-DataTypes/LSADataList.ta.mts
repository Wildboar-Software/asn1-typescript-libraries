/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LSAData, _encode_LSAData, LSAData } from "../MAP-MS-DataTypes/LSAData.ta.mjs";


import { maxNumOfLSAs } from "./maxNumOfLSAs.va.mjs";

/**
 * @summary LSADataList
 * @description
 *
 * LSA data entries (SIZE 1..20) in `LSAInformation`. (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSADataList  ::=  SEQUENCE SIZE (1..maxNumOfLSAs) OF
 *     LSAData
 * ```
 */
export
type LSADataList = LSAData[]; // SequenceOfType

let _cached_decoder_for_LSADataList: $.ASN1Decoder<LSADataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSADataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSADataList (el: _Element): LSADataList {
    if (!_cached_decoder_for_LSADataList) { _cached_decoder_for_LSADataList = $._decodeSequenceOf<LSAData>(() => _decode_LSAData); }
    const value = _cached_decoder_for_LSADataList(el);
    if (value.length < 1 || value.length > maxNumOfLSAs) {
        throw new ASN1SizeError("LSADataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LSADataList: $.ASN1Encoder<LSADataList> | null = null;

/**
 * @summary Encodes a(n) LSADataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSADataList, encoded as an ASN.1 Element.
 */
export
function _encode_LSADataList (value: LSADataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSADataList) { _cached_encoder_for_LSADataList = $._encodeSequenceOf<LSAData>(() => _encode_LSAData, $.BER); }
    return _cached_encoder_for_LSADataList(value, elGetter);
}


/* eslint-enable */
