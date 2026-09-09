/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { SnapshotCallData, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-status-reporting/SnapshotCallData.ta.mjs";



/**
 * @summary SnapshotCallResult_crossRefIDorSnapshotData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallResult-crossRefIDorSnapshotData ::= CHOICE {
 *     serviceCrossRefID [0],
 *     snapshotData [APPLICATION 23]
 * }
 * ```
 */
export
type SnapshotCallResult_crossRefIDorSnapshotData =
    { serviceCrossRefID: ServiceCrossRefID } /* CHOICE_ALT_ROOT */
    | { snapshotData: SnapshotCallData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SnapshotCallResult_crossRefIDorSnapshotData: $.ASN1Decoder<SnapshotCallResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallResult_crossRefIDorSnapshotData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallResult_crossRefIDorSnapshotData (el: _Element): SnapshotCallResult_crossRefIDorSnapshotData {
    if (!_cached_decoder_for_SnapshotCallResult_crossRefIDorSnapshotData) { _cached_decoder_for_SnapshotCallResult_crossRefIDorSnapshotData = $._decode_inextensible_choice<SnapshotCallResult_crossRefIDorSnapshotData>({
    "CONTEXT 0": [ "serviceCrossRefID", $._decode_implicit<ServiceCrossRefID>(() => _decode_ServiceCrossRefID) ],
    "APPLICATION 23": [ "snapshotData", _decode_SnapshotCallData ]
}); }
    return _cached_decoder_for_SnapshotCallResult_crossRefIDorSnapshotData(el);
}

let _cached_encoder_for_SnapshotCallResult_crossRefIDorSnapshotData: $.ASN1Encoder<SnapshotCallResult_crossRefIDorSnapshotData> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallResult_crossRefIDorSnapshotData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallResult_crossRefIDorSnapshotData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallResult_crossRefIDorSnapshotData (value: SnapshotCallResult_crossRefIDorSnapshotData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallResult_crossRefIDorSnapshotData) { _cached_encoder_for_SnapshotCallResult_crossRefIDorSnapshotData = $._encode_choice<SnapshotCallResult_crossRefIDorSnapshotData>({
    "serviceCrossRefID": $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceCrossRefID, $.BER),
    "snapshotData": _encode_SnapshotCallData,
}, $.BER); }
    return _cached_encoder_for_SnapshotCallResult_crossRefIDorSnapshotData(value, elGetter);
}


/* eslint-enable */
