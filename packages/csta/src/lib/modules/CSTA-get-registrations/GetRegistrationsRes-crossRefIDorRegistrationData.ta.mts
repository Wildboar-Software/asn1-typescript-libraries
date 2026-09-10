/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { RegistrationList, _decode_RegistrationList, _encode_RegistrationList } from "../CSTA-status-reporting/RegistrationList.ta.mjs";



/**
 * @summary GetRegistrationsRes_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRegistrationsRes-crossRefIDorRegistrationData ::= CHOICE {
 *     serviceCrossRefID ServiceCrossRefID,
 *     registrationList RegistrationList
 * }
 * ```
 */
export
type GetRegistrationsRes_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { registrationList: RegistrationList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData: $.ASN1Decoder<GetRegistrationsRes_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRegistrationsRes_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRegistrationsRes_crossRefIDorRegistrationData (el: _Element): GetRegistrationsRes_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData) { _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetRegistrationsRes_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "registrationList", _decode_RegistrationList ]
}); }
    return _cached_decoder_for_GetRegistrationsRes_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData: $.ASN1Encoder<GetRegistrationsRes_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetRegistrationsRes_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRegistrationsRes_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetRegistrationsRes_crossRefIDorRegistrationData (value: GetRegistrationsRes_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData) { _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData = $._encode_choice<GetRegistrationsRes_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "registrationList": _encode_RegistrationList,
}, $.BER); }
    return _cached_encoder_for_GetRegistrationsRes_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
