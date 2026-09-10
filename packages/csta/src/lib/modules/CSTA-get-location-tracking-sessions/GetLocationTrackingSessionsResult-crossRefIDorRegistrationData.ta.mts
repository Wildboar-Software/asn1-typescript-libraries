/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { LocationSessionInfoList, _decode_LocationSessionInfoList, _encode_LocationSessionInfoList } from "../CSTA-status-reporting/LocationSessionInfoList.ta.mjs";



/**
 * @summary GetLocationTrackingSessionsResult_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingSessionsResult-crossRefIDorRegistrationData ::= CHOICE {
 *     serviceCrossRefID ServiceCrossRefID,
 *     locationSessionInfoList LocationSessionInfoList
 * }
 * ```
 */
export
type GetLocationTrackingSessionsResult_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { locationSessionInfoList: LocationSessionInfoList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData: $.ASN1Decoder<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingSessionsResult_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData (el: _Element): GetLocationTrackingSessionsResult_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData) { _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "locationSessionInfoList", _decode_LocationSessionInfoList ]
}); }
    return _cached_decoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData: $.ASN1Encoder<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingSessionsResult_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingSessionsResult_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData (value: GetLocationTrackingSessionsResult_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData) { _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData = $._encode_choice<GetLocationTrackingSessionsResult_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "locationSessionInfoList": _encode_LocationSessionInfoList,
}, $.BER); }
    return _cached_encoder_for_GetLocationTrackingSessionsResult_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
