/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_APN, _encode_APN, APN } from "../MAP-MS-DataTypes/APN.ta.mjs";


import { maxNumOfLIPAAllowedAPN } from "./maxNumOfLIPAAllowedAPN.va.mjs";

/**
 * @summary LIPA_AllowedAPNList
 * @description
 *
 * APNs for which LIPA is allowed for a CSG subscription (SIZE 1..50). (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIPA-AllowedAPNList  ::=  SEQUENCE SIZE (1..maxNumOfLIPAAllowedAPN) OF
 *     APN
 * ```
 */
export
type LIPA_AllowedAPNList = APN[]; // SequenceOfType

let _cached_decoder_for_LIPA_AllowedAPNList: $.ASN1Decoder<LIPA_AllowedAPNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIPA_AllowedAPNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIPA_AllowedAPNList (el: _Element): LIPA_AllowedAPNList {
    if (!_cached_decoder_for_LIPA_AllowedAPNList) { _cached_decoder_for_LIPA_AllowedAPNList = $._decodeSequenceOf<APN>(() => _decode_APN); }
    const value = _cached_decoder_for_LIPA_AllowedAPNList(el);
    if (value.length < 1 || value.length > maxNumOfLIPAAllowedAPN) {
        throw new ASN1SizeError("LIPA_AllowedAPNList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LIPA_AllowedAPNList: $.ASN1Encoder<LIPA_AllowedAPNList> | null = null;

/**
 * @summary Encodes a(n) LIPA_AllowedAPNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIPA_AllowedAPNList, encoded as an ASN.1 Element.
 */
export
function _encode_LIPA_AllowedAPNList (value: LIPA_AllowedAPNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIPA_AllowedAPNList) { _cached_encoder_for_LIPA_AllowedAPNList = $._encodeSequenceOf<APN>(() => _encode_APN, $.BER); }
    return _cached_encoder_for_LIPA_AllowedAPNList(value, elGetter);
}


/* eslint-enable */
