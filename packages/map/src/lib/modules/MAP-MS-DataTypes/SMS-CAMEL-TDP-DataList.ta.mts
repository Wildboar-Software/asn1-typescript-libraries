/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SMS_CAMEL_TDP_Data, _encode_SMS_CAMEL_TDP_Data, SMS_CAMEL_TDP_Data } from "../MAP-MS-DataTypes/SMS-CAMEL-TDP-Data.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary SMS_CAMEL_TDP_DataList
 * @description
 *
 * SMS CAMEL TDP list. Shall not contain more than one instance with the same
 * `sms-TriggerDetectionPoint`.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-CAMEL-TDP-DataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     SMS-CAMEL-TDP-Data
 * ```
 */
export
type SMS_CAMEL_TDP_DataList = SMS_CAMEL_TDP_Data[]; // SequenceOfType

let _cached_decoder_for_SMS_CAMEL_TDP_DataList: $.ASN1Decoder<SMS_CAMEL_TDP_DataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_CAMEL_TDP_DataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_CAMEL_TDP_DataList (el: _Element): SMS_CAMEL_TDP_DataList {
    if (!_cached_decoder_for_SMS_CAMEL_TDP_DataList) { _cached_decoder_for_SMS_CAMEL_TDP_DataList = $._decodeSequenceOf<SMS_CAMEL_TDP_Data>(() => _decode_SMS_CAMEL_TDP_Data); }
    const value = _cached_decoder_for_SMS_CAMEL_TDP_DataList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("SMS_CAMEL_TDP_DataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SMS_CAMEL_TDP_DataList: $.ASN1Encoder<SMS_CAMEL_TDP_DataList> | null = null;

/**
 * @summary Encodes a(n) SMS_CAMEL_TDP_DataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_CAMEL_TDP_DataList, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_CAMEL_TDP_DataList (value: SMS_CAMEL_TDP_DataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_CAMEL_TDP_DataList) { _cached_encoder_for_SMS_CAMEL_TDP_DataList = $._encodeSequenceOf<SMS_CAMEL_TDP_Data>(() => _encode_SMS_CAMEL_TDP_Data, $.BER); }
    return _cached_encoder_for_SMS_CAMEL_TDP_DataList(value, elGetter);
}


/* eslint-enable */
