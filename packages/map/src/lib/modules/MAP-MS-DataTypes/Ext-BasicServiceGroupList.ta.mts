/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode, Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary Ext_BasicServiceGroupList
 * @description
 *
 * List of extensible basic service groups, e.g. in a CUG subscription (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.5 and 7.6.3.23).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-BasicServiceGroupList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-BasicServiceCode
 * ```
 */
export
type Ext_BasicServiceGroupList = Ext_BasicServiceCode[]; // SequenceOfType

let _cached_decoder_for_Ext_BasicServiceGroupList: $.ASN1Decoder<Ext_BasicServiceGroupList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_BasicServiceGroupList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_BasicServiceGroupList (el: _Element): Ext_BasicServiceGroupList {
    if (!_cached_decoder_for_Ext_BasicServiceGroupList) { _cached_decoder_for_Ext_BasicServiceGroupList = $._decodeSequenceOf<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode); }
    const value = _cached_decoder_for_Ext_BasicServiceGroupList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("Ext_BasicServiceGroupList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Ext_BasicServiceGroupList: $.ASN1Encoder<Ext_BasicServiceGroupList> | null = null;

/**
 * @summary Encodes a(n) Ext_BasicServiceGroupList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_BasicServiceGroupList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_BasicServiceGroupList (value: Ext_BasicServiceGroupList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_BasicServiceGroupList) { _cached_encoder_for_Ext_BasicServiceGroupList = $._encodeSequenceOf<Ext_BasicServiceCode>(() => _encode_Ext_BasicServiceCode, $.BER); }
    return _cached_encoder_for_Ext_BasicServiceGroupList(value, elGetter);
}


/* eslint-enable */
