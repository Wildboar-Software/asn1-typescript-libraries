/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary SubjectDeviceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectDeviceID  ::=  [APPLICATION 3] CHOICE
 * {    deviceIdentifier             DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type SubjectDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubjectDeviceID: $.ASN1Decoder<SubjectDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectDeviceID (el: _Element): SubjectDeviceID {
    if (!_cached_decoder_for_SubjectDeviceID) { _cached_decoder_for_SubjectDeviceID = $._decode_explicit<SubjectDeviceID>(() => $._decode_inextensible_choice<SubjectDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_SubjectDeviceID(el);
}

let _cached_encoder_for_SubjectDeviceID: $.ASN1Encoder<SubjectDeviceID> | null = null;

/**
 * @summary Encodes a(n) SubjectDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectDeviceID (value: SubjectDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectDeviceID) { _cached_encoder_for_SubjectDeviceID = $._encode_explicit(_TagClass.application, 3, () => $._encode_choice<SubjectDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_SubjectDeviceID(value, elGetter);
}


/* eslint-enable */
