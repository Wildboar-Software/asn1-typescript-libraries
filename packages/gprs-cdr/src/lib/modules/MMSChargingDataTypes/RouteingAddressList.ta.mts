/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";


/**
 * @summary RouteingAddressList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingAddressList  ::=  SET  OF
 *    MMSAgentAddress
 * ```
 */
export
type RouteingAddressList = MMSAgentAddress[]; // SetOfType

let _cached_decoder_for_RouteingAddressList: $.ASN1Decoder<RouteingAddressList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingAddressList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingAddressList (el: _Element): RouteingAddressList {
    if (!_cached_decoder_for_RouteingAddressList) { _cached_decoder_for_RouteingAddressList = $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress); }
    return _cached_decoder_for_RouteingAddressList(el);
}

let _cached_encoder_for_RouteingAddressList: $.ASN1Encoder<RouteingAddressList> | null = null;

/**
 * @summary Encodes a(n) RouteingAddressList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingAddressList, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingAddressList (value: RouteingAddressList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingAddressList) { _cached_encoder_for_RouteingAddressList = $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER); }
    return _cached_encoder_for_RouteingAddressList(value, elGetter);
}


/* eslint-enable */
