/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContextIdList, _decode_ContextIdList, _encode_ContextIdList } from "../MAP-MS-DataTypes/ContextIdList.ta.mjs";


/**
 * @summary GPRSSubscriptionDataWithdraw
 * @description
 *
 * Indicates that GPRS Subscription Data shall be deleted from the SGSN: either
 * all GPRS data or only PDP contexts whose identifiers are listed. Used only by
 * the SGSN; if the VLR receives this parameter it shall ignore it. Not
 * applicable for the CSS (3GPP TS 29.002 V19.1.0 clauses 7.6.3.45, 7.6.3.53 and
 * 8.8.2.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSSubscriptionDataWithdraw  ::=  CHOICE {
 *     allGPRSData    NULL,
 *     contextIdList    ContextIdList}
 * ```
 */
export
type GPRSSubscriptionDataWithdraw =
    { allGPRSData: NULL } /* CHOICE_ALT_ROOT */
    | { contextIdList: ContextIdList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GPRSSubscriptionDataWithdraw: $.ASN1Decoder<GPRSSubscriptionDataWithdraw> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSSubscriptionDataWithdraw
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSSubscriptionDataWithdraw (el: _Element): GPRSSubscriptionDataWithdraw {
    if (!_cached_decoder_for_GPRSSubscriptionDataWithdraw) { _cached_decoder_for_GPRSSubscriptionDataWithdraw = $._decode_inextensible_choice<GPRSSubscriptionDataWithdraw>({
    "UNIVERSAL 5": [ "allGPRSData", $._decodeNull ],
    "UNIVERSAL 16": [ "contextIdList", _decode_ContextIdList ]
}); }
    return _cached_decoder_for_GPRSSubscriptionDataWithdraw(el);
}

let _cached_encoder_for_GPRSSubscriptionDataWithdraw: $.ASN1Encoder<GPRSSubscriptionDataWithdraw> | null = null;

/**
 * @summary Encodes a(n) GPRSSubscriptionDataWithdraw into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSSubscriptionDataWithdraw, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSSubscriptionDataWithdraw (value: GPRSSubscriptionDataWithdraw, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSSubscriptionDataWithdraw) { _cached_encoder_for_GPRSSubscriptionDataWithdraw = $._encode_choice<GPRSSubscriptionDataWithdraw>({
    "allGPRSData": $._encodeNull,
    "contextIdList": _encode_ContextIdList,
}, $.BER); }
    return _cached_encoder_for_GPRSSubscriptionDataWithdraw(value, elGetter);
}


/* eslint-enable */
