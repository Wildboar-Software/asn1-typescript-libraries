/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { MonitorList, _decode_MonitorList, _encode_MonitorList } from "../CSTA-status-reporting/MonitorList.ta.mjs";



/**
 * @summary GetMonitorResult_crossRefIDorRegistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMonitorResult-crossRefIDorRegistrationData ::= CHOICE {
 *     serviceCrossRefID [UNIVERSAL 4],
 *     monitorList [UNIVERSAL 16]
 * }
 * ```
 */
export
type GetMonitorResult_crossRefIDorRegistrationData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { monitorList: MonitorList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData: $.ASN1Decoder<GetMonitorResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMonitorResult_crossRefIDorRegistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMonitorResult_crossRefIDorRegistrationData (el: _Element): GetMonitorResult_crossRefIDorRegistrationData {
    if (!_cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData) { _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData = $._decode_inextensible_choice<GetMonitorResult_crossRefIDorRegistrationData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "UNIVERSAL 16": [ "monitorList", _decode_MonitorList ]
}); }
    return _cached_decoder_for_GetMonitorResult_crossRefIDorRegistrationData(el);
}

let _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData: $.ASN1Encoder<GetMonitorResult_crossRefIDorRegistrationData> | null = null;

/**
 * @summary Encodes a(n) GetMonitorResult_crossRefIDorRegistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMonitorResult_crossRefIDorRegistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_GetMonitorResult_crossRefIDorRegistrationData (value: GetMonitorResult_crossRefIDorRegistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData) { _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData = $._encode_choice<GetMonitorResult_crossRefIDorRegistrationData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "monitorList": _encode_MonitorList,
}, $.BER); }
    return _cached_encoder_for_GetMonitorResult_crossRefIDorRegistrationData(value, elGetter);
}


/* eslint-enable */
