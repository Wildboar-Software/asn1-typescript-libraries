/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_MT_SMS_TPDU_Type, _encode_MT_SMS_TPDU_Type, MT_SMS_TPDU_Type } from "../MAP-MS-DataTypes/MT-SMS-TPDU-Type.ta.mjs";


import { maxNumOfTPDUTypes } from "./maxNumOfTPDUTypes.va.mjs";

/**
 * @summary TPDU_TypeCriterion
 * @description
 *
 * MT-SMS TPDU types that arm MT-SMS CAMEL criteria. Size
 * 1..`maxNumOfTPDUTypes`. A sequence containing any TPDU type other than those
 * listed shall be ignored wholly. In CAMEL phase 4, `sms-SUBMIT-REPORT` shall
 * not be used and a received list containing it shall be wholly ignored.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-TypeCriterion  ::=  SEQUENCE SIZE (1..maxNumOfTPDUTypes) OF
 *     MT-SMS-TPDU-Type
 * ```
 */
export
type TPDU_TypeCriterion = MT_SMS_TPDU_Type[]; // SequenceOfType

let _cached_decoder_for_TPDU_TypeCriterion: $.ASN1Decoder<TPDU_TypeCriterion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TPDU_TypeCriterion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TPDU_TypeCriterion (el: _Element): TPDU_TypeCriterion {
    if (!_cached_decoder_for_TPDU_TypeCriterion) { _cached_decoder_for_TPDU_TypeCriterion = $._decodeSequenceOf<MT_SMS_TPDU_Type>(() => _decode_MT_SMS_TPDU_Type); }
    const value = _cached_decoder_for_TPDU_TypeCriterion(el);
    if (value.length < 1 || value.length > maxNumOfTPDUTypes) {
        throw new ASN1SizeError("TPDU_TypeCriterion violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TPDU_TypeCriterion: $.ASN1Encoder<TPDU_TypeCriterion> | null = null;

/**
 * @summary Encodes a(n) TPDU_TypeCriterion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPDU_TypeCriterion, encoded as an ASN.1 Element.
 */
export
function _encode_TPDU_TypeCriterion (value: TPDU_TypeCriterion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TPDU_TypeCriterion) { _cached_encoder_for_TPDU_TypeCriterion = $._encodeSequenceOf<MT_SMS_TPDU_Type>(() => _encode_MT_SMS_TPDU_Type, $.BER); }
    return _cached_encoder_for_TPDU_TypeCriterion(value, elGetter);
}


/* eslint-enable */
