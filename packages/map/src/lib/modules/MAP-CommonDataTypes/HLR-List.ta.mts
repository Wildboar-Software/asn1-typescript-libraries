/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_HLR_Id, _encode_HLR_Id, HLR_Id } from "../MAP-CommonDataTypes/HLR-Id.ta.mjs";


import { maxNumOfHLR_Id } from "./maxNumOfHLR-Id.va.mjs";

/**
 * @summary HLR_List
 * @description
 *
 * List of 1..`maxNumOfHLR-Id` (50) HLR identities.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HLR-List  ::=  SEQUENCE SIZE (1..maxNumOfHLR-Id) OF
 *     HLR-Id
 * ```
 */
export
type HLR_List = HLR_Id[]; // SequenceOfType

let _cached_decoder_for_HLR_List: $.ASN1Decoder<HLR_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HLR_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HLR_List (el: _Element): HLR_List {
    if (!_cached_decoder_for_HLR_List) { _cached_decoder_for_HLR_List = $._decodeSequenceOf<HLR_Id>(() => _decode_HLR_Id); }
    const value = _cached_decoder_for_HLR_List(el);
    if (value.length < 1 || value.length > maxNumOfHLR_Id) {
        throw new ASN1SizeError("HLR_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_HLR_List: $.ASN1Encoder<HLR_List> | null = null;

/**
 * @summary Encodes a(n) HLR_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HLR_List, encoded as an ASN.1 Element.
 */
export
function _encode_HLR_List (value: HLR_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HLR_List) { _cached_encoder_for_HLR_List = $._encodeSequenceOf<HLR_Id>(() => _encode_HLR_Id, $.BER); }
    return _cached_encoder_for_HLR_List(value, elGetter);
}


/* eslint-enable */
