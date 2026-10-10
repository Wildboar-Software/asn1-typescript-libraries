/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ForwardingFeature, _encode_ForwardingFeature, ForwardingFeature } from "../MAP-SS-DataTypes/ForwardingFeature.ta.mjs";


import { maxNumOfBasicServiceGroups } from "./maxNumOfBasicServiceGroups.va.mjs";

/**
 * @summary ForwardingFeatureList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF `ForwardingFeature` (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.4.15 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingFeatureList  ::=  
 *     SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF
 *     ForwardingFeature
 * ```
 */
export
type ForwardingFeatureList = ForwardingFeature[]; // SequenceOfType

let _cached_decoder_for_ForwardingFeatureList: $.ASN1Decoder<ForwardingFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingFeatureList (el: _Element): ForwardingFeatureList {
    if (!_cached_decoder_for_ForwardingFeatureList) { _cached_decoder_for_ForwardingFeatureList = $._decodeSequenceOf<ForwardingFeature>(() => _decode_ForwardingFeature); }
    const value = _cached_decoder_for_ForwardingFeatureList(el);
    if (value.length < 1 || value.length > maxNumOfBasicServiceGroups) {
        throw new ASN1SizeError("ForwardingFeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ForwardingFeatureList: $.ASN1Encoder<ForwardingFeatureList> | null = null;

/**
 * @summary Encodes a(n) ForwardingFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingFeatureList (value: ForwardingFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingFeatureList) { _cached_encoder_for_ForwardingFeatureList = $._encodeSequenceOf<ForwardingFeature>(() => _encode_ForwardingFeature, $.BER); }
    return _cached_encoder_for_ForwardingFeatureList(value, elGetter);
}


/* eslint-enable */
