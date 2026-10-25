/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { RequestNotificationArg_Type, _decode_RequestNotificationArg_Type, _encode_RequestNotificationArg_Type } from "../IN-SCF-SCF-ops-args/RequestNotificationArg-Type.ta.mjs";
// export { RequestNotificationArg_Type, _decode_RequestNotificationArg_Type, _encode_RequestNotificationArg_Type } from "../IN-SCF-SCF-ops-args/RequestNotificationArg-Type.ta.mjs";


/**
 * @summary RequestNotificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestNotificationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {requestedNotifications  [0]  RequestedNotifications,
 *                securityParameters      [1]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions              [30]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type RequestNotificationArg = OPTIONALLY_PROTECTED<RequestNotificationArg_Type>; // DefinedType

let _cached_decoder_for_RequestNotificationArg: $.ASN1Decoder<RequestNotificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestNotificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestNotificationArg (el: _Element): RequestNotificationArg {
    if (!_cached_decoder_for_RequestNotificationArg) { _cached_decoder_for_RequestNotificationArg = _get_decoder_for_OPTIONALLY_PROTECTED<RequestNotificationArg_Type>(_decode_RequestNotificationArg_Type); }
    return _cached_decoder_for_RequestNotificationArg(el);
}

let _cached_encoder_for_RequestNotificationArg: $.ASN1Encoder<RequestNotificationArg> | null = null;

/**
 * @summary Encodes a(n) RequestNotificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestNotificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestNotificationArg (value: RequestNotificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestNotificationArg) { _cached_encoder_for_RequestNotificationArg = _get_encoder_for_OPTIONALLY_PROTECTED<RequestNotificationArg_Type>(_encode_RequestNotificationArg_Type); }
    return _cached_encoder_for_RequestNotificationArg(value, elGetter);
}


/* eslint-enable */
