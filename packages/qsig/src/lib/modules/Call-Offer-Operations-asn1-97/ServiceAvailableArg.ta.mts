/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceList, _decode_ServiceList, _encode_ServiceList } from "../Call-Offer-Operations-asn1-97/ServiceList.ta.mjs";
// export { ServiceList, ServiceList_callOffer /* IMPORTED_LONG_NAMED_BIT */, callOffer /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceList, _encode_ServiceList } from "../Call-Offer-Operations-asn1-97/ServiceList.ta.mjs";
import { ServiceAvailableArg_extendedServiceList, _decode_ServiceAvailableArg_extendedServiceList, _encode_ServiceAvailableArg_extendedServiceList } from "../Call-Offer-Operations-asn1-97/ServiceAvailableArg-extendedServiceList.ta.mjs";
// export { ServiceAvailableArg_extendedServiceList, _decode_ServiceAvailableArg_extendedServiceList, _encode_ServiceAvailableArg_extendedServiceList } from "../Call-Offer-Operations-asn1-97/ServiceAvailableArg-extendedServiceList.ta.mjs";


/**
 * @summary ServiceAvailableArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAvailableArg  ::=  CHOICE {
 *     serviceList ServiceList,
 *     extendedServiceList SEQUENCE {
 *         serviceList ServiceList,
 *         extension Extension {{COExtSet}}
 *     }
 * }
 * ```
 */
export
type ServiceAvailableArg =
    { serviceList: ServiceList } /* CHOICE_ALT_ROOT */
    | { extendedServiceList: ServiceAvailableArg_extendedServiceList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceAvailableArg: $.ASN1Decoder<ServiceAvailableArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAvailableArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAvailableArg (el: _Element): ServiceAvailableArg {
    if (!_cached_decoder_for_ServiceAvailableArg) { _cached_decoder_for_ServiceAvailableArg = $._decode_inextensible_choice<ServiceAvailableArg>({
    "UNIVERSAL 3": [ "serviceList", _decode_ServiceList ],
    "UNIVERSAL 16": [ "extendedServiceList", _decode_ServiceAvailableArg_extendedServiceList ]
}); }
    return _cached_decoder_for_ServiceAvailableArg(el);
}

let _cached_encoder_for_ServiceAvailableArg: $.ASN1Encoder<ServiceAvailableArg> | null = null;

/**
 * @summary Encodes a(n) ServiceAvailableArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAvailableArg, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAvailableArg (value: ServiceAvailableArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAvailableArg) { _cached_encoder_for_ServiceAvailableArg = $._encode_choice<ServiceAvailableArg>({
    "serviceList": _encode_ServiceList,
    "extendedServiceList": _encode_ServiceAvailableArg_extendedServiceList,
}, $.BER); }
    return _cached_encoder_for_ServiceAvailableArg(value, elGetter);
}


/* eslint-enable */
