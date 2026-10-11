/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_SS_Info, _encode_Ext_SS_Info, Ext_SS_Info } from "../MAP-MS-DataTypes/Ext-SS-Info.ta.mjs";


import { maxNumOfSS } from "../MAP-SS-DataTypes/maxNumOfSS.va.mjs";

/**
 * @summary Ext_SS_InfoList
 * @description
 *
 * List of extensible SS-Info parameters in Insert Subscriber Data (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.14 and 8.8.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-InfoList  ::=  SEQUENCE SIZE (1..maxNumOfSS) OF
 *     Ext-SS-Info
 * ```
 */
export
type Ext_SS_InfoList = Ext_SS_Info[]; // SequenceOfType

let _cached_decoder_for_Ext_SS_InfoList: $.ASN1Decoder<Ext_SS_InfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_InfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SS_InfoList (el: _Element): Ext_SS_InfoList {
    if (!_cached_decoder_for_Ext_SS_InfoList) { _cached_decoder_for_Ext_SS_InfoList = $._decodeSequenceOf<Ext_SS_Info>(() => _decode_Ext_SS_Info); }
    const value = _cached_decoder_for_Ext_SS_InfoList(el);
    if (value.length < 1 || value.length > maxNumOfSS) {
        throw new ASN1SizeError("Ext_SS_InfoList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Ext_SS_InfoList: $.ASN1Encoder<Ext_SS_InfoList> | null = null;

/**
 * @summary Encodes a(n) Ext_SS_InfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_InfoList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SS_InfoList (value: Ext_SS_InfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SS_InfoList) { _cached_encoder_for_Ext_SS_InfoList = $._encodeSequenceOf<Ext_SS_Info>(() => _encode_Ext_SS_Info, $.BER); }
    return _cached_encoder_for_Ext_SS_InfoList(value, elGetter);
}


/* eslint-enable */
