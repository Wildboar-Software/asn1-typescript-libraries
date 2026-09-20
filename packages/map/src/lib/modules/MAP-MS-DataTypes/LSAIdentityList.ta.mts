/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LSAIdentity, _encode_LSAIdentity, LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";


import { maxNumOfLSAs } from "./maxNumOfLSAs.va.mjs";

/**
 * @summary LSAIdentityList
 * @description
 *
 * LSA identities to withdraw (SIZE 1..20) in `LSAInformationWithdraw`. (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.58 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAIdentityList  ::=  SEQUENCE SIZE (1..maxNumOfLSAs) OF
 *     LSAIdentity
 * ```
 */
export
type LSAIdentityList = LSAIdentity[]; // SequenceOfType

let _cached_decoder_for_LSAIdentityList: $.ASN1Decoder<LSAIdentityList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAIdentityList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAIdentityList (el: _Element): LSAIdentityList {
    if (!_cached_decoder_for_LSAIdentityList) { _cached_decoder_for_LSAIdentityList = $._decodeSequenceOf<LSAIdentity>(() => _decode_LSAIdentity); }
    const value = _cached_decoder_for_LSAIdentityList(el);
    if (value.length < 1 || value.length > maxNumOfLSAs) {
        throw new ASN1SizeError("LSAIdentityList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LSAIdentityList: $.ASN1Encoder<LSAIdentityList> | null = null;

/**
 * @summary Encodes a(n) LSAIdentityList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAIdentityList, encoded as an ASN.1 Element.
 */
export
function _encode_LSAIdentityList (value: LSAIdentityList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAIdentityList) { _cached_encoder_for_LSAIdentityList = $._encodeSequenceOf<LSAIdentity>(() => _encode_LSAIdentity, $.BER); }
    return _cached_encoder_for_LSAIdentityList(value, elGetter);
}


/* eslint-enable */
