/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CCBS_Feature, _encode_CCBS_Feature, CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";


import { maxNumOfCCBS_Requests } from "./maxNumOfCCBS-Requests.va.mjs";

/**
 * @summary CCBS_FeatureList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfCCBS-Requests) OF `CCBS-Feature` (3GPP TS 29.002
 * V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-FeatureList  ::=  SEQUENCE SIZE (1..maxNumOfCCBS-Requests) OF
 *     CCBS-Feature
 * ```
 */
export
type CCBS_FeatureList = CCBS_Feature[]; // SequenceOfType

let _cached_decoder_for_CCBS_FeatureList: $.ASN1Decoder<CCBS_FeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_FeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCBS_FeatureList (el: _Element): CCBS_FeatureList {
    if (!_cached_decoder_for_CCBS_FeatureList) { _cached_decoder_for_CCBS_FeatureList = $._decodeSequenceOf<CCBS_Feature>(() => _decode_CCBS_Feature); }
    const value = _cached_decoder_for_CCBS_FeatureList(el);
    if (value.length < 1 || value.length > maxNumOfCCBS_Requests) {
        throw new ASN1SizeError("CCBS_FeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CCBS_FeatureList: $.ASN1Encoder<CCBS_FeatureList> | null = null;

/**
 * @summary Encodes a(n) CCBS_FeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_FeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_CCBS_FeatureList (value: CCBS_FeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCBS_FeatureList) { _cached_encoder_for_CCBS_FeatureList = $._encodeSequenceOf<CCBS_Feature>(() => _encode_CCBS_Feature, $.BER); }
    return _cached_encoder_for_CCBS_FeatureList(value, elGetter);
}


/* eslint-enable */
