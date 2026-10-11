/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_ForwFeature, _encode_Ext_ForwFeature, Ext_ForwFeature } from "../MAP-MS-DataTypes/Ext-ForwFeature.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary Ext_ForwFeatureList
 * @description
 *
 * List of extensible forwarding features, one item per Basic Service Group
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-ForwFeature
 * ```
 */
export
type Ext_ForwFeatureList = Ext_ForwFeature[]; // SequenceOfType

let _cached_decoder_for_Ext_ForwFeatureList: $.ASN1Decoder<Ext_ForwFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ForwFeatureList (el: _Element): Ext_ForwFeatureList {
    if (!_cached_decoder_for_Ext_ForwFeatureList) { _cached_decoder_for_Ext_ForwFeatureList = $._decodeSequenceOf<Ext_ForwFeature>(() => _decode_Ext_ForwFeature); }
    const value = _cached_decoder_for_Ext_ForwFeatureList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("Ext_ForwFeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Ext_ForwFeatureList: $.ASN1Encoder<Ext_ForwFeatureList> | null = null;

/**
 * @summary Encodes a(n) Ext_ForwFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ForwFeatureList (value: Ext_ForwFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ForwFeatureList) { _cached_encoder_for_Ext_ForwFeatureList = $._encodeSequenceOf<Ext_ForwFeature>(() => _encode_Ext_ForwFeature, $.BER); }
    return _cached_encoder_for_Ext_ForwFeatureList(value, elGetter);
}


/* eslint-enable */
