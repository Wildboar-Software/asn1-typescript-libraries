/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PDP_ContextInfo, _encode_PDP_ContextInfo, PDP_ContextInfo } from "../MAP-MS-DataTypes/PDP-ContextInfo.ta.mjs";


import { maxNumOfPDP_Contexts } from "./maxNumOfPDP-Contexts.va.mjs";

/**
 * @summary PDP_ContextInfoList
 * @description
 *
 * List of PDP context information associated with a PS subscriber state that
 * has active PDP contexts.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDP-ContextInfoList  ::=  SEQUENCE SIZE (1..maxNumOfPDP-Contexts) OF
 *     PDP-ContextInfo
 * ```
 */
export
type PDP_ContextInfoList = PDP_ContextInfo[]; // SequenceOfType

let _cached_decoder_for_PDP_ContextInfoList: $.ASN1Decoder<PDP_ContextInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDP_ContextInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDP_ContextInfoList (el: _Element): PDP_ContextInfoList {
    if (!_cached_decoder_for_PDP_ContextInfoList) { _cached_decoder_for_PDP_ContextInfoList = $._decodeSequenceOf<PDP_ContextInfo>(() => _decode_PDP_ContextInfo); }
    const value = _cached_decoder_for_PDP_ContextInfoList(el);
    if (value.length < 1 || value.length > maxNumOfPDP_Contexts) {
        throw new ASN1SizeError("PDP_ContextInfoList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_PDP_ContextInfoList: $.ASN1Encoder<PDP_ContextInfoList> | null = null;

/**
 * @summary Encodes a(n) PDP_ContextInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDP_ContextInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_PDP_ContextInfoList (value: PDP_ContextInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDP_ContextInfoList) { _cached_encoder_for_PDP_ContextInfoList = $._encodeSequenceOf<PDP_ContextInfo>(() => _encode_PDP_ContextInfo, $.BER); }
    return _cached_encoder_for_PDP_ContextInfoList(value, elGetter);
}


/* eslint-enable */
