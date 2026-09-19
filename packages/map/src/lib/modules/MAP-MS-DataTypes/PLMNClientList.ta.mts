/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LCSClientInternalID, _encode_LCSClientInternalID, LCSClientInternalID } from "../MAP-CommonDataTypes/LCSClientInternalID.ta.mjs";


import { maxNumOfPLMNClient } from "./maxNumOfPLMNClient.va.mjs";

/**
 * @summary PLMNClientList
 * @description
 *
 * Internal LCS clients of the PLMN operator privacy class. Size 1..5. May be
 * sent only for SS-code `plmnoperator`.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.65 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNClientList  ::=  SEQUENCE SIZE (1..maxNumOfPLMNClient) OF
 *     LCSClientInternalID
 * ```
 */
export
type PLMNClientList = LCSClientInternalID[]; // SequenceOfType

let _cached_decoder_for_PLMNClientList: $.ASN1Decoder<PLMNClientList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNClientList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNClientList (el: _Element): PLMNClientList {
    if (!_cached_decoder_for_PLMNClientList) { _cached_decoder_for_PLMNClientList = $._decodeSequenceOf<LCSClientInternalID>(() => _decode_LCSClientInternalID); }
    const value = _cached_decoder_for_PLMNClientList(el);
    if (value.length < 1 || value.length > maxNumOfPLMNClient) {
        throw new ASN1SizeError("PLMNClientList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_PLMNClientList: $.ASN1Encoder<PLMNClientList> | null = null;

/**
 * @summary Encodes a(n) PLMNClientList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNClientList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNClientList (value: PLMNClientList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNClientList) { _cached_encoder_for_PLMNClientList = $._encodeSequenceOf<LCSClientInternalID>(() => _encode_LCSClientInternalID, $.BER); }
    return _cached_encoder_for_PLMNClientList(value, elGetter);
}


/* eslint-enable */
