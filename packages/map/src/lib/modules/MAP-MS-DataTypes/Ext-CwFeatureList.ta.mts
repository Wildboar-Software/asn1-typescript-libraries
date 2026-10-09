/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_CwFeature, _encode_Ext_CwFeature, Ext_CwFeature } from "../MAP-MS-DataTypes/Ext-CwFeature.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary Ext_CwFeatureList
 * @description
 *
 * List of Call Waiting features (SIZE 1..maxNumOfExt-BasicServiceGroups) (3GPP
 * TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CwFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-CwFeature
 * ```
 */
export
type Ext_CwFeatureList = Ext_CwFeature[]; // SequenceOfType

let _cached_decoder_for_Ext_CwFeatureList: $.ASN1Decoder<Ext_CwFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CwFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CwFeatureList (el: _Element): Ext_CwFeatureList {
    if (!_cached_decoder_for_Ext_CwFeatureList) { _cached_decoder_for_Ext_CwFeatureList = $._decodeSequenceOf<Ext_CwFeature>(() => _decode_Ext_CwFeature); }
    const value = _cached_decoder_for_Ext_CwFeatureList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("Ext_CwFeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Ext_CwFeatureList: $.ASN1Encoder<Ext_CwFeatureList> | null = null;

/**
 * @summary Encodes a(n) Ext_CwFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CwFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CwFeatureList (value: Ext_CwFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CwFeatureList) { _cached_encoder_for_Ext_CwFeatureList = $._encodeSequenceOf<Ext_CwFeature>(() => _encode_Ext_CwFeature, $.BER); }
    return _cached_encoder_for_Ext_CwFeatureList(value, elGetter);
}


/* eslint-enable */
