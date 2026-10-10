/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SMServingNodeAddress, _encode_SMServingNodeAddress, SMServingNodeAddress } from "../MAP-SM-DataTypes/SMServingNodeAddress.ta.mjs";


import { maxNumOfSMServingNodeAddresses } from "./maxNumOfSMServingNodeAddresses.va.mjs";

/**
 * @summary SMServingNodeAddressList
 * @description
 *
 * SEQUENCE SIZE (1..maxNumOfSMServingNodeAddresses) OF `SMServingNodeAddress`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMServingNodeAddressList  ::=  
 *     SEQUENCE SIZE (1..maxNumOfSMServingNodeAddresses) OF
 *     SMServingNodeAddress
 * ```
 */
export
type SMServingNodeAddressList = SMServingNodeAddress[]; // SequenceOfType

let _cached_decoder_for_SMServingNodeAddressList: $.ASN1Decoder<SMServingNodeAddressList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMServingNodeAddressList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMServingNodeAddressList (el: _Element): SMServingNodeAddressList {
    if (!_cached_decoder_for_SMServingNodeAddressList) { _cached_decoder_for_SMServingNodeAddressList = $._decodeSequenceOf<SMServingNodeAddress>(() => _decode_SMServingNodeAddress); }
    const value = _cached_decoder_for_SMServingNodeAddressList(el);
    if (value.length < 1 || value.length > maxNumOfSMServingNodeAddresses) {
        throw new ASN1SizeError("SMServingNodeAddressList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SMServingNodeAddressList: $.ASN1Encoder<SMServingNodeAddressList> | null = null;

/**
 * @summary Encodes a(n) SMServingNodeAddressList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMServingNodeAddressList, encoded as an ASN.1 Element.
 */
export
function _encode_SMServingNodeAddressList (value: SMServingNodeAddressList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMServingNodeAddressList) { _cached_encoder_for_SMServingNodeAddressList = $._encodeSequenceOf<SMServingNodeAddress>(() => _encode_SMServingNodeAddress, $.BER); }
    return _cached_encoder_for_SMServingNodeAddressList(value, elGetter);
}


/* eslint-enable */
