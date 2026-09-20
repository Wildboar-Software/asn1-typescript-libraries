/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CUG_Feature, _encode_CUG_Feature, CUG_Feature } from "../MAP-MS-DataTypes/CUG-Feature.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary CUG_FeatureList
 * @description
 *
 * CUG features per basic service group. If omitted in Insert Subscriber Data,
 * the VLR shall interpret that no options per extensible basic service group
 * exist and apply defaults (no outgoing access, no incoming access, no
 * preferential CUG) (3GPP TS 29.002 V19.1.0 clauses 7.6.3.22 and 8.8.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-FeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     CUG-Feature
 * ```
 */
export
type CUG_FeatureList = CUG_Feature[]; // SequenceOfType

let _cached_decoder_for_CUG_FeatureList: $.ASN1Decoder<CUG_FeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_FeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_FeatureList (el: _Element): CUG_FeatureList {
    if (!_cached_decoder_for_CUG_FeatureList) { _cached_decoder_for_CUG_FeatureList = $._decodeSequenceOf<CUG_Feature>(() => _decode_CUG_Feature); }
    const value = _cached_decoder_for_CUG_FeatureList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("CUG_FeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CUG_FeatureList: $.ASN1Encoder<CUG_FeatureList> | null = null;

/**
 * @summary Encodes a(n) CUG_FeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_FeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_FeatureList (value: CUG_FeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_FeatureList) { _cached_encoder_for_CUG_FeatureList = $._encodeSequenceOf<CUG_Feature>(() => _encode_CUG_Feature, $.BER); }
    return _cached_encoder_for_CUG_FeatureList(value, elGetter);
}


/* eslint-enable */
