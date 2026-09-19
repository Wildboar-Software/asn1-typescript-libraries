/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PDP_Context, _encode_PDP_Context, PDP_Context } from "../MAP-MS-DataTypes/PDP-Context.ta.mjs";


import { maxNumOfPDP_Contexts } from "./maxNumOfPDP-Contexts.va.mjs";

/**
 * @summary GPRSDataList
 * @description
 *
 * List of PDP-Contexts the subscriber has subscribed to (SIZE
 * 1..maxNumOfPDP-Contexts) (3GPP TS 29.002 V19.1.0 clauses 7.6.3.46 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSDataList  ::=  SEQUENCE SIZE (1..maxNumOfPDP-Contexts) OF
 *     PDP-Context
 * ```
 */
export
type GPRSDataList = PDP_Context[]; // SequenceOfType

let _cached_decoder_for_GPRSDataList: $.ASN1Decoder<GPRSDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSDataList (el: _Element): GPRSDataList {
    if (!_cached_decoder_for_GPRSDataList) { _cached_decoder_for_GPRSDataList = $._decodeSequenceOf<PDP_Context>(() => _decode_PDP_Context); }
    const value = _cached_decoder_for_GPRSDataList(el);
    if (value.length < 1 || value.length > maxNumOfPDP_Contexts) {
        throw new ASN1SizeError("GPRSDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_GPRSDataList: $.ASN1Encoder<GPRSDataList> | null = null;

/**
 * @summary Encodes a(n) GPRSDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSDataList, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSDataList (value: GPRSDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSDataList) { _cached_encoder_for_GPRSDataList = $._encodeSequenceOf<PDP_Context>(() => _encode_PDP_Context, $.BER); }
    return _cached_encoder_for_GPRSDataList(value, elGetter);
}


/* eslint-enable */
