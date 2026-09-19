/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Ocn, _decode_Ocn, _encode_Ocn } from "../AIN-Parameters/Ocn.ta.mjs";
// export { Ocn, _decode_Ocn, _encode_Ocn } from "../AIN-Parameters/Ocn.ta.mjs";
import { MsrID, _decode_MsrID, _encode_MsrID } from "../AIN-Parameters/MsrID.ta.mjs";
// export { MsrID, _decode_MsrID, _encode_MsrID } from "../AIN-Parameters/MsrID.ta.mjs";


/**
 * @summary ServiceProviderID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceProviderID  ::=  CHOICE{
 *         ocn Ocn,
 *         msrID MsrID
 *     }
 * ```
 */
export
type ServiceProviderID =
    { ocn: Ocn } /* CHOICE_ALT_ROOT */
    | { msrID: MsrID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceProviderID: $.ASN1Decoder<ServiceProviderID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceProviderID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceProviderID (el: _Element): ServiceProviderID {
    if (!_cached_decoder_for_ServiceProviderID) { _cached_decoder_for_ServiceProviderID = $._decode_inextensible_choice<ServiceProviderID>({
    "CONTEXT 87": [ "ocn", _decode_Ocn ],
    "CONTEXT 106": [ "msrID", _decode_MsrID ]
}); }
    return _cached_decoder_for_ServiceProviderID(el);
}

let _cached_encoder_for_ServiceProviderID: $.ASN1Encoder<ServiceProviderID> | null = null;

/**
 * @summary Encodes a(n) ServiceProviderID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceProviderID, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceProviderID (value: ServiceProviderID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceProviderID) { _cached_encoder_for_ServiceProviderID = $._encode_choice<ServiceProviderID>({
    "ocn": _encode_Ocn,
    "msrID": _encode_MsrID,
}, $.BER); }
    return _cached_encoder_for_ServiceProviderID(value, elGetter);
}


/* eslint-enable */
