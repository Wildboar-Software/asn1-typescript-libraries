/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LSAIdentityList, _decode_LSAIdentityList, _encode_LSAIdentityList } from "../MAP-MS-DataTypes/LSAIdentityList.ta.mjs";


/**
 * @summary LSAInformationWithdraw
 * @description
 *
 * Indicates that LSA information shall be deleted from the VLR or SGSN: all LSA
 * data, or a list of LSA identities. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.58
 * and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAInformationWithdraw  ::=  CHOICE {
 *     allLSAData    NULL,
 *     lsaIdentityList    LSAIdentityList }
 * ```
 */
export
type LSAInformationWithdraw =
    { allLSAData: NULL } /* CHOICE_ALT_ROOT */
    | { lsaIdentityList: LSAIdentityList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LSAInformationWithdraw: $.ASN1Decoder<LSAInformationWithdraw> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAInformationWithdraw
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAInformationWithdraw (el: _Element): LSAInformationWithdraw {
    if (!_cached_decoder_for_LSAInformationWithdraw) { _cached_decoder_for_LSAInformationWithdraw = $._decode_inextensible_choice<LSAInformationWithdraw>({
    "UNIVERSAL 5": [ "allLSAData", $._decodeNull ],
    "UNIVERSAL 16": [ "lsaIdentityList", _decode_LSAIdentityList ]
}); }
    return _cached_decoder_for_LSAInformationWithdraw(el);
}

let _cached_encoder_for_LSAInformationWithdraw: $.ASN1Encoder<LSAInformationWithdraw> | null = null;

/**
 * @summary Encodes a(n) LSAInformationWithdraw into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAInformationWithdraw, encoded as an ASN.1 Element.
 */
export
function _encode_LSAInformationWithdraw (value: LSAInformationWithdraw, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAInformationWithdraw) { _cached_encoder_for_LSAInformationWithdraw = $._encode_choice<LSAInformationWithdraw>({
    "allLSAData": $._encodeNull,
    "lsaIdentityList": _encode_LSAIdentityList,
}, $.BER); }
    return _cached_encoder_for_LSAInformationWithdraw(value, elGetter);
}


/* eslint-enable */
