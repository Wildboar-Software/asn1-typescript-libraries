/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { SnapshotDeviceData, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-status-reporting/SnapshotDeviceData.ta.mjs";



/**
 * @summary SnapshotDeviceResult_crossRefIDorSnapshotData
 * @description
 *
 * CHOICE: `serviceCrossRefID` for later Snapshot DeviceData
 * (ECMA-269 §16.1.4); `snapshotData` for inline calls.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceResult-crossRefIDorSnapshotData ::= CHOICE {
 *     serviceCrossRefID [UNIVERSAL 4],
 *     snapshotData [APPLICATION 22]
 * }
 * ```
 */
export
type SnapshotDeviceResult_crossRefIDorSnapshotData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { snapshotData: SnapshotDeviceData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData: $.ASN1Decoder<SnapshotDeviceResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceResult_crossRefIDorSnapshotData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceResult_crossRefIDorSnapshotData (el: _Element): SnapshotDeviceResult_crossRefIDorSnapshotData {
    if (!_cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData) { _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData = $._decode_inextensible_choice<SnapshotDeviceResult_crossRefIDorSnapshotData>({
    "UNIVERSAL 4": [ "serviceCrossRefID", _decode_ServiceCrossRefID ],
    "APPLICATION 22": [ "snapshotData", _decode_SnapshotDeviceData ]
}); }
    return _cached_decoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData(el);
}

let _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData: $.ASN1Encoder<SnapshotDeviceResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceResult_crossRefIDorSnapshotData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceResult_crossRefIDorSnapshotData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceResult_crossRefIDorSnapshotData (value: SnapshotDeviceResult_crossRefIDorSnapshotData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData) { _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData = $._encode_choice<SnapshotDeviceResult_crossRefIDorSnapshotData>({
    "serviceCrossRefID": _encode_ServiceCrossRefID,
    "snapshotData": _encode_SnapshotDeviceData,
}, $.BER); }
    return _cached_encoder_for_SnapshotDeviceResult_crossRefIDorSnapshotData(value, elGetter);
}


/* eslint-enable */
