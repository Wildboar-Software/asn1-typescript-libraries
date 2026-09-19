/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_MSISDN_BS, _encode_MSISDN_BS, MSISDN_BS } from "../MAP-MS-DataTypes/MSISDN-BS.ta.mjs";


import { maxNumOfMSISDN } from "./maxNumOfMSISDN.va.mjs";

/**
 * @summary MSISDN_BS_List
 * @description
 *
 * List of MSISDN-plus-basic-service entries (SIZE 1..50). (3GPP TS 29.002
 * V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN-BS-List  ::=  SEQUENCE SIZE (1..maxNumOfMSISDN) OF
 *     MSISDN-BS
 * ```
 */
export
type MSISDN_BS_List = MSISDN_BS[]; // SequenceOfType

let _cached_decoder_for_MSISDN_BS_List: $.ASN1Decoder<MSISDN_BS_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSISDN_BS_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSISDN_BS_List (el: _Element): MSISDN_BS_List {
    if (!_cached_decoder_for_MSISDN_BS_List) { _cached_decoder_for_MSISDN_BS_List = $._decodeSequenceOf<MSISDN_BS>(() => _decode_MSISDN_BS); }
    const value = _cached_decoder_for_MSISDN_BS_List(el);
    if (value.length < 1 || value.length > maxNumOfMSISDN) {
        throw new ASN1SizeError("MSISDN_BS_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_MSISDN_BS_List: $.ASN1Encoder<MSISDN_BS_List> | null = null;

/**
 * @summary Encodes a(n) MSISDN_BS_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSISDN_BS_List, encoded as an ASN.1 Element.
 */
export
function _encode_MSISDN_BS_List (value: MSISDN_BS_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSISDN_BS_List) { _cached_encoder_for_MSISDN_BS_List = $._encodeSequenceOf<MSISDN_BS>(() => _encode_MSISDN_BS, $.BER); }
    return _cached_encoder_for_MSISDN_BS_List(value, elGetter);
}


/* eslint-enable */
