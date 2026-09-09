/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary MonitorCrossRefID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorCrossRefID  ::=  [APPLICATION 21] IMPLICIT OCTET STRING
 * ```
 */
export
type MonitorCrossRefID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MonitorCrossRefID: $.ASN1Decoder<MonitorCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorCrossRefID (el: _Element): MonitorCrossRefID {
    if (!_cached_decoder_for_MonitorCrossRefID) { _cached_decoder_for_MonitorCrossRefID = $._decode_implicit<MonitorCrossRefID>(() => $._decodeOctetString); }
    return _cached_decoder_for_MonitorCrossRefID(el);
}

let _cached_encoder_for_MonitorCrossRefID: $.ASN1Encoder<MonitorCrossRefID> | null = null;

/**
 * @summary Encodes a(n) MonitorCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorCrossRefID (value: MonitorCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorCrossRefID) { _cached_encoder_for_MonitorCrossRefID = $._encode_implicit(_TagClass.application, 21, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MonitorCrossRefID(value, elGetter);
}


/* eslint-enable */
