/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AdjacentAccessRestrictionData, _encode_AdjacentAccessRestrictionData, AdjacentAccessRestrictionData } from "../MAP-MS-DataTypes/AdjacentAccessRestrictionData.ta.mjs";


/**
 * @summary AdjacentAccessRestrictionDataList
 * @description
 *
 * List of per-PLMN access restriction data for adjacent PLMNs (SIZE 1..50)
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdjacentAccessRestrictionDataList  ::=  SEQUENCE SIZE (1..50) OF
 *     AdjacentAccessRestrictionData
 * ```
 */
export
type AdjacentAccessRestrictionDataList = AdjacentAccessRestrictionData[]; // SequenceOfType

let _cached_decoder_for_AdjacentAccessRestrictionDataList: $.ASN1Decoder<AdjacentAccessRestrictionDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdjacentAccessRestrictionDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdjacentAccessRestrictionDataList (el: _Element): AdjacentAccessRestrictionDataList {
    if (!_cached_decoder_for_AdjacentAccessRestrictionDataList) { _cached_decoder_for_AdjacentAccessRestrictionDataList = $._decodeSequenceOf<AdjacentAccessRestrictionData>(() => _decode_AdjacentAccessRestrictionData); }
    const value = _cached_decoder_for_AdjacentAccessRestrictionDataList(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("AdjacentAccessRestrictionDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AdjacentAccessRestrictionDataList: $.ASN1Encoder<AdjacentAccessRestrictionDataList> | null = null;

/**
 * @summary Encodes a(n) AdjacentAccessRestrictionDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacentAccessRestrictionDataList, encoded as an ASN.1 Element.
 */
export
function _encode_AdjacentAccessRestrictionDataList (value: AdjacentAccessRestrictionDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdjacentAccessRestrictionDataList) { _cached_encoder_for_AdjacentAccessRestrictionDataList = $._encodeSequenceOf<AdjacentAccessRestrictionData>(() => _encode_AdjacentAccessRestrictionData, $.BER); }
    return _cached_encoder_for_AdjacentAccessRestrictionDataList(value, elGetter);
}


/* eslint-enable */
