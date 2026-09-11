/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary CallingDeviceID
 * @description
 *
 * Calling device associated with a call (`APPLICATION 1`;
 * ECMA-269 §12.3.7). For external incoming calls this is ANI, CLID,
 * SID, or equivalent digits.
 *
 * - `deviceIdentifier`: calling device is provided.
 * - `notKnown`: unknown, or more than one calling device (e.g.
 *   conference callback).
 * - `restricted`: withheld for regulatory or privacy reasons.
 *
 * Never `notRequired` or `notSpecified`. Unlike
 * `NetworkCallingDeviceID`, this value may change after transfer or
 * conference; network calling info does not, while the original NID
 * remains in the call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingDeviceID ::=  [APPLICATION 1] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type CallingDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallingDeviceID: $.ASN1Decoder<CallingDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingDeviceID (el: _Element): CallingDeviceID {
    if (!_cached_decoder_for_CallingDeviceID) { _cached_decoder_for_CallingDeviceID = $._decode_explicit<CallingDeviceID>(() => $._decode_inextensible_choice<CallingDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_CallingDeviceID(el);
}

let _cached_encoder_for_CallingDeviceID: $.ASN1Encoder<CallingDeviceID> | null = null;

/**
 * @summary Encodes a(n) CallingDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_CallingDeviceID (value: CallingDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingDeviceID) { _cached_encoder_for_CallingDeviceID = $._encode_explicit(_TagClass.application, 1, () => $._encode_choice<CallingDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_CallingDeviceID(value, elGetter);
}


/* eslint-enable */
