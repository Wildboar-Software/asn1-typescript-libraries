/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CallBarringFeature, _encode_CallBarringFeature, CallBarringFeature } from "../MAP-SS-DataTypes/CallBarringFeature.ta.mjs";


import { maxNumOfBasicServiceGroups } from "./maxNumOfBasicServiceGroups.va.mjs";

/**
 * @summary CallBarringFeatureList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF `CallBarringFeature` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfBasicServiceGroups) OF
 *     CallBarringFeature
 * ```
 */
export
type CallBarringFeatureList = CallBarringFeature[]; // SequenceOfType

let _cached_decoder_for_CallBarringFeatureList: $.ASN1Decoder<CallBarringFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarringFeatureList (el: _Element): CallBarringFeatureList {
    if (!_cached_decoder_for_CallBarringFeatureList) { _cached_decoder_for_CallBarringFeatureList = $._decodeSequenceOf<CallBarringFeature>(() => _decode_CallBarringFeature); }
    const value = _cached_decoder_for_CallBarringFeatureList(el);
    if (value.length < 1 || value.length > maxNumOfBasicServiceGroups) {
        throw new ASN1SizeError("CallBarringFeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CallBarringFeatureList: $.ASN1Encoder<CallBarringFeatureList> | null = null;

/**
 * @summary Encodes a(n) CallBarringFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarringFeatureList (value: CallBarringFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarringFeatureList) { _cached_encoder_for_CallBarringFeatureList = $._encodeSequenceOf<CallBarringFeature>(() => _encode_CallBarringFeature, $.BER); }
    return _cached_encoder_for_CallBarringFeatureList(value, elGetter);
}


/* eslint-enable */
