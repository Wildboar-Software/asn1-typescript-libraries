/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_BearerServiceCode, _encode_Ext_BearerServiceCode, Ext_BearerServiceCode } from "../MAP-BS-Code/Ext-BearerServiceCode.ta.mjs";


import { maxNumOfBearerServices } from "./maxNumOfBearerServices.va.mjs";

/**
 * @summary BearerServiceList
 * @description
 *
 * List of extensible bearer service codes sent in MAP_INSERT_SUBSCRIBER_DATA.
 * Used only by the VLR; if the SGSN or IWF receives this parameter it shall
 * ignore it. Not used by the CSS (3GPP TS 29.002 V19.1.0 clause 8.8.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceList  ::=  SEQUENCE SIZE (1..maxNumOfBearerServices) OF
 *     Ext-BearerServiceCode
 * ```
 */
export
type BearerServiceList = Ext_BearerServiceCode[]; // SequenceOfType

let _cached_decoder_for_BearerServiceList: $.ASN1Decoder<BearerServiceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BearerServiceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BearerServiceList (el: _Element): BearerServiceList {
    if (!_cached_decoder_for_BearerServiceList) { _cached_decoder_for_BearerServiceList = $._decodeSequenceOf<Ext_BearerServiceCode>(() => _decode_Ext_BearerServiceCode); }
    const value = _cached_decoder_for_BearerServiceList(el);
    if (value.length < 1 || value.length > maxNumOfBearerServices) {
        throw new ASN1SizeError("BearerServiceList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_BearerServiceList: $.ASN1Encoder<BearerServiceList> | null = null;

/**
 * @summary Encodes a(n) BearerServiceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BearerServiceList, encoded as an ASN.1 Element.
 */
export
function _encode_BearerServiceList (value: BearerServiceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BearerServiceList) { _cached_encoder_for_BearerServiceList = $._encodeSequenceOf<Ext_BearerServiceCode>(() => _encode_Ext_BearerServiceCode, $.BER); }
    return _cached_encoder_for_BearerServiceList(value, elGetter);
}


/* eslint-enable */
