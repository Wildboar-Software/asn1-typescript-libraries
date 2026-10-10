/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode, Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";


import { maxNumOfTeleservices } from "./maxNumOfTeleservices.va.mjs";

/**
 * @summary TeleserviceList
 * @description
 *
 * Provisioned teleservices for subscriber-profile management. A teleservice may
 * be a single service, a set, or all teleservices as in 3GPP TS 22.003.
 * Exception handling for unsupported codes: clause 8.8.1.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.4, 8.8.1 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeleserviceList  ::=  SEQUENCE SIZE (1..maxNumOfTeleservices) OF
 *     Ext-TeleserviceCode
 * ```
 */
export
type TeleserviceList = Ext_TeleserviceCode[]; // SequenceOfType

let _cached_decoder_for_TeleserviceList: $.ASN1Decoder<TeleserviceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeleserviceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TeleserviceList (el: _Element): TeleserviceList {
    if (!_cached_decoder_for_TeleserviceList) { _cached_decoder_for_TeleserviceList = $._decodeSequenceOf<Ext_TeleserviceCode>(() => _decode_Ext_TeleserviceCode); }
    const value = _cached_decoder_for_TeleserviceList(el);
    if (value.length < 1 || value.length > maxNumOfTeleservices) {
        throw new ASN1SizeError("TeleserviceList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TeleserviceList: $.ASN1Encoder<TeleserviceList> | null = null;

/**
 * @summary Encodes a(n) TeleserviceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeleserviceList, encoded as an ASN.1 Element.
 */
export
function _encode_TeleserviceList (value: TeleserviceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TeleserviceList) { _cached_encoder_for_TeleserviceList = $._encodeSequenceOf<Ext_TeleserviceCode>(() => _encode_Ext_TeleserviceCode, $.BER); }
    return _cached_encoder_for_TeleserviceList(value, elGetter);
}


/* eslint-enable */
