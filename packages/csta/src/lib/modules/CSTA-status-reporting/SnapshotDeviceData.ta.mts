/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { SnapshotDeviceResponseInfo, _decode_SnapshotDeviceResponseInfo, _encode_SnapshotDeviceResponseInfo } from "../CSTA-status-reporting/SnapshotDeviceResponseInfo.ta.mjs";



/**
 * @summary SnapshotDeviceData
 * @description
 *
 * Per-call rows of a Snapshot Device (or Snapshot DeviceData segment): each
 * call at the device and its local call state. ECMA-269 §16.1.2, §16.1.4.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceData  ::=  [APPLICATION 22] IMPLICIT SEQUENCE OF SnapshotDeviceResponseInfo
 * ```
 */
export
type SnapshotDeviceData = SnapshotDeviceResponseInfo[]; // SequenceOfType

let _cached_decoder_for_SnapshotDeviceData: $.ASN1Decoder<SnapshotDeviceData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceData (el: _Element): SnapshotDeviceData {
    if (!_cached_decoder_for_SnapshotDeviceData) { _cached_decoder_for_SnapshotDeviceData = $._decode_implicit<SnapshotDeviceData>(() => $._decodeSequenceOf<SnapshotDeviceResponseInfo>(() => _decode_SnapshotDeviceResponseInfo)); }
    return _cached_decoder_for_SnapshotDeviceData(el);
}

let _cached_encoder_for_SnapshotDeviceData: $.ASN1Encoder<SnapshotDeviceData> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceData (value: SnapshotDeviceData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceData) { _cached_encoder_for_SnapshotDeviceData = $._encode_implicit(_TagClass.application, 22, () => $._encodeSequenceOf<SnapshotDeviceResponseInfo>(() => _encode_SnapshotDeviceResponseInfo, $.BER), $.BER); }
    return _cached_encoder_for_SnapshotDeviceData(value, elGetter);
}


/* eslint-enable */
