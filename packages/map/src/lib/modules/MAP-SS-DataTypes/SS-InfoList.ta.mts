/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SS_Info, _encode_SS_Info, SS_Info } from "../MAP-SS-DataTypes/SS-Info.ta.mjs";


import { maxNumOfSS } from "./maxNumOfSS.va.mjs";

/**
 * @summary SS_InfoList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfSS) OF `SS-Info` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-InfoList  ::=  SEQUENCE SIZE (1..maxNumOfSS) OF
 *     SS-Info
 * ```
 */
export
type SS_InfoList = SS_Info[]; // SequenceOfType

let _cached_decoder_for_SS_InfoList: $.ASN1Decoder<SS_InfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_InfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_InfoList (el: _Element): SS_InfoList {
    if (!_cached_decoder_for_SS_InfoList) { _cached_decoder_for_SS_InfoList = $._decodeSequenceOf<SS_Info>(() => _decode_SS_Info); }
    const value = _cached_decoder_for_SS_InfoList(el);
    if (value.length < 1 || value.length > maxNumOfSS) {
        throw new ASN1SizeError("SS_InfoList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SS_InfoList: $.ASN1Encoder<SS_InfoList> | null = null;

/**
 * @summary Encodes a(n) SS_InfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_InfoList, encoded as an ASN.1 Element.
 */
export
function _encode_SS_InfoList (value: SS_InfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_InfoList) { _cached_encoder_for_SS_InfoList = $._encodeSequenceOf<SS_Info>(() => _encode_SS_Info, $.BER); }
    return _cached_encoder_for_SS_InfoList(value, elGetter);
}


/* eslint-enable */
