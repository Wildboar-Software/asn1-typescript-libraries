/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CUG_Subscription, _encode_CUG_Subscription, CUG_Subscription } from "../MAP-MS-DataTypes/CUG-Subscription.ta.mjs";


import { maxNumOfCUG } from "./maxNumOfCUG.va.mjs";

/**
 * @summary CUG_SubscriptionList
 * @description
 *
 * List of CUG subscriptions. At location updating, restoration or CUG data
 * change the HLR shall include the complete list; the first
 * insertSubscriberData message in a dialogue that contains CUG information
 * shall include a non-empty list (3GPP TS 29.002 V19.1.0 clauses 7.6.3.22 and
 * 8.8.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-SubscriptionList  ::=  SEQUENCE SIZE (0..maxNumOfCUG) OF
 *     CUG-Subscription
 * ```
 */
export
type CUG_SubscriptionList = CUG_Subscription[]; // SequenceOfType

let _cached_decoder_for_CUG_SubscriptionList: $.ASN1Decoder<CUG_SubscriptionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_SubscriptionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_SubscriptionList (el: _Element): CUG_SubscriptionList {
    if (!_cached_decoder_for_CUG_SubscriptionList) { _cached_decoder_for_CUG_SubscriptionList = $._decodeSequenceOf<CUG_Subscription>(() => _decode_CUG_Subscription); }
    const value = _cached_decoder_for_CUG_SubscriptionList(el);
    if (value.length < 0 || value.length > maxNumOfCUG) {
        throw new ASN1SizeError("CUG_SubscriptionList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CUG_SubscriptionList: $.ASN1Encoder<CUG_SubscriptionList> | null = null;

/**
 * @summary Encodes a(n) CUG_SubscriptionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_SubscriptionList, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_SubscriptionList (value: CUG_SubscriptionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_SubscriptionList) { _cached_encoder_for_CUG_SubscriptionList = $._encodeSequenceOf<CUG_Subscription>(() => _encode_CUG_Subscription, $.BER); }
    return _cached_encoder_for_CUG_SubscriptionList(value, elGetter);
}


/* eslint-enable */
