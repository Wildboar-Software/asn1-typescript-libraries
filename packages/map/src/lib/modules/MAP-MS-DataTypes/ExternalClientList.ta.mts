/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ExternalClient, _encode_ExternalClient, ExternalClient } from "../MAP-MS-DataTypes/ExternalClient.ta.mjs";


import { maxNumOfExternalClient } from "./maxNumOfExternalClient.va.mjs";

/**
 * @summary ExternalClientList
 * @description
 *
 * Identities of external clients allowed to locate a target MS for an MT-LR,
 * applicable to call/session unrelated and call/session related privacy
 * classes. Usage is defined in 3GPP TS 23.271 (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.64).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalClientList  ::=  SEQUENCE SIZE (0..maxNumOfExternalClient) OF
 *     ExternalClient
 * ```
 */
export
type ExternalClientList = ExternalClient[]; // SequenceOfType

let _cached_decoder_for_ExternalClientList: $.ASN1Decoder<ExternalClientList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalClientList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalClientList (el: _Element): ExternalClientList {
    if (!_cached_decoder_for_ExternalClientList) { _cached_decoder_for_ExternalClientList = $._decodeSequenceOf<ExternalClient>(() => _decode_ExternalClient); }
    const value = _cached_decoder_for_ExternalClientList(el);
    if (value.length < 0 || value.length > maxNumOfExternalClient) {
        throw new ASN1SizeError("ExternalClientList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ExternalClientList: $.ASN1Encoder<ExternalClientList> | null = null;

/**
 * @summary Encodes a(n) ExternalClientList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalClientList, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalClientList (value: ExternalClientList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalClientList) { _cached_encoder_for_ExternalClientList = $._encodeSequenceOf<ExternalClient>(() => _encode_ExternalClient, $.BER); }
    return _cached_encoder_for_ExternalClientList(value, elGetter);
}


/* eslint-enable */
