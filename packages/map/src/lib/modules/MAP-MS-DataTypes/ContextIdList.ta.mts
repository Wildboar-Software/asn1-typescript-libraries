/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ContextId, _encode_ContextId, ContextId } from "../MAP-MS-DataTypes/ContextId.ta.mjs";


import { maxNumOfPDP_Contexts } from "./maxNumOfPDP-Contexts.va.mjs";

/**
 * @summary ContextIdList
 * @description
 *
 * List of PDP-context / APN-configuration identifiers used when withdrawing a
 * subset of GPRS or EPS subscription data (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.3.45, 7.6.3.45A and 8.8.2.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextIdList  ::=  SEQUENCE SIZE (1..maxNumOfPDP-Contexts) OF
 *     ContextId
 * ```
 */
export
type ContextIdList = ContextId[]; // SequenceOfType

let _cached_decoder_for_ContextIdList: $.ASN1Decoder<ContextIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextIdList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextIdList (el: _Element): ContextIdList {
    if (!_cached_decoder_for_ContextIdList) { _cached_decoder_for_ContextIdList = $._decodeSequenceOf<ContextId>(() => _decode_ContextId); }
    const value = _cached_decoder_for_ContextIdList(el);
    if (value.length < 1 || value.length > maxNumOfPDP_Contexts) {
        throw new ASN1SizeError("ContextIdList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ContextIdList: $.ASN1Encoder<ContextIdList> | null = null;

/**
 * @summary Encodes a(n) ContextIdList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextIdList, encoded as an ASN.1 Element.
 */
export
function _encode_ContextIdList (value: ContextIdList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextIdList) { _cached_encoder_for_ContextIdList = $._encodeSequenceOf<ContextId>(() => _encode_ContextId, $.BER); }
    return _cached_encoder_for_ContextIdList(value, elGetter);
}


/* eslint-enable */
