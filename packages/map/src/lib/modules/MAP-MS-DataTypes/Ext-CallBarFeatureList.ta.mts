/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_CallBarringFeature, _encode_Ext_CallBarringFeature, Ext_CallBarringFeature } from "../MAP-MS-DataTypes/Ext-CallBarringFeature.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary Ext_CallBarFeatureList
 * @description
 *
 * List of extensible call barring features, one item per Basic Service Group
 * (3GPP TS 29.002 V19.1.0 clause 7.6.3.20).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CallBarFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-CallBarringFeature
 * ```
 */
export
type Ext_CallBarFeatureList = Ext_CallBarringFeature[]; // SequenceOfType

let _cached_decoder_for_Ext_CallBarFeatureList: $.ASN1Decoder<Ext_CallBarFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CallBarFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CallBarFeatureList (el: _Element): Ext_CallBarFeatureList {
    if (!_cached_decoder_for_Ext_CallBarFeatureList) { _cached_decoder_for_Ext_CallBarFeatureList = $._decodeSequenceOf<Ext_CallBarringFeature>(() => _decode_Ext_CallBarringFeature); }
    const value = _cached_decoder_for_Ext_CallBarFeatureList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("Ext_CallBarFeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Ext_CallBarFeatureList: $.ASN1Encoder<Ext_CallBarFeatureList> | null = null;

/**
 * @summary Encodes a(n) Ext_CallBarFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CallBarFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CallBarFeatureList (value: Ext_CallBarFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CallBarFeatureList) { _cached_encoder_for_Ext_CallBarFeatureList = $._encodeSequenceOf<Ext_CallBarringFeature>(() => _encode_Ext_CallBarringFeature, $.BER); }
    return _cached_encoder_for_Ext_CallBarFeatureList(value, elGetter);
}


/* eslint-enable */
