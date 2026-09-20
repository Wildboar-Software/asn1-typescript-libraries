/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary RoutingInfo
 * @description
 *
 * Roaming number or forwarding data (3GPP TS 29.002 V19.1.0 clauses 10.1.3 and
 * 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfo  ::=  CHOICE {
 *     roamingNumber    ISDN-AddressString,
 *     forwardingData    ForwardingData}
 * ```
 */
export
type RoutingInfo =
    { roamingNumber: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { forwardingData: ForwardingData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RoutingInfo: $.ASN1Decoder<RoutingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfo (el: _Element): RoutingInfo {
    if (!_cached_decoder_for_RoutingInfo) { _cached_decoder_for_RoutingInfo = $._decode_inextensible_choice<RoutingInfo>({
    "UNIVERSAL 4": [ "roamingNumber", _decode_ISDN_AddressString ],
    "UNIVERSAL 16": [ "forwardingData", _decode_ForwardingData ]
}); }
    return _cached_decoder_for_RoutingInfo(el);
}

let _cached_encoder_for_RoutingInfo: $.ASN1Encoder<RoutingInfo> | null = null;

/**
 * @summary Encodes a(n) RoutingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfo (value: RoutingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfo) { _cached_encoder_for_RoutingInfo = $._encode_choice<RoutingInfo>({
    "roamingNumber": _encode_ISDN_AddressString,
    "forwardingData": _encode_ForwardingData,
}, $.BER); }
    return _cached_encoder_for_RoutingInfo(value, elGetter);
}


/* eslint-enable */
