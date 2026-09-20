/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Area, _encode_Area, Area } from "../MAP-LCS-DataTypes/Area.ta.mjs";


import { maxNumOfAreas } from "./maxNumOfAreas.va.mjs";

/**
 * @summary AreaList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfAreas) OF Area (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaList  ::=  SEQUENCE SIZE (1..maxNumOfAreas) OF Area
 * ```
 */
export
type AreaList = Area[]; // SequenceOfType

let _cached_decoder_for_AreaList: $.ASN1Decoder<AreaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaList (el: _Element): AreaList {
    if (!_cached_decoder_for_AreaList) { _cached_decoder_for_AreaList = $._decodeSequenceOf<Area>(() => _decode_Area); }
    const value = _cached_decoder_for_AreaList(el);
    if (value.length < 1 || value.length > maxNumOfAreas) {
        throw new ASN1SizeError("AreaList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AreaList: $.ASN1Encoder<AreaList> | null = null;

/**
 * @summary Encodes a(n) AreaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaList, encoded as an ASN.1 Element.
 */
export
function _encode_AreaList (value: AreaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaList) { _cached_encoder_for_AreaList = $._encodeSequenceOf<Area>(() => _encode_Area, $.BER); }
    return _cached_encoder_for_AreaList(value, elGetter);
}


/* eslint-enable */
