/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary CalledDeviceID
 * @description
 *
 * Originally called device associated with a call (`APPLICATION 2`;
 * ECMA-269 §12.3.6). For external incoming calls this is DNIS, DID,
 * or equivalent digits.
 *
 * - `deviceIdentifier`: originally called device is provided.
 * - `notKnown`: switching function cannot provide the ID.
 * - `restricted`: encoded in ECMA-285 §9.2; ECMA-269 §12.3.6 does
 *   not assign this status.
 *
 * Never `notRequired` or `notSpecified`. After conference or
 * transfer, take this from the secondary call. Unlike
 * `NetworkCalledDeviceID`, this may change after transfer or
 * conference.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledDeviceID  ::=  [APPLICATION 2] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type CalledDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CalledDeviceID: $.ASN1Decoder<CalledDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledDeviceID (el: _Element): CalledDeviceID {
    if (!_cached_decoder_for_CalledDeviceID) { _cached_decoder_for_CalledDeviceID = $._decode_explicit<CalledDeviceID>(() => $._decode_inextensible_choice<CalledDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_CalledDeviceID(el);
}

let _cached_encoder_for_CalledDeviceID: $.ASN1Encoder<CalledDeviceID> | null = null;

/**
 * @summary Encodes a(n) CalledDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_CalledDeviceID (value: CalledDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledDeviceID) { _cached_encoder_for_CalledDeviceID = $._encode_explicit(_TagClass.application, 2, () => $._encode_choice<CalledDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_CalledDeviceID(value, elGetter);
}


/* eslint-enable */
