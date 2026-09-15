/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary AssociatedCallingDeviceID
 * @description
 *
 * Network Interface Device (trunk, CO line) in the switching
 * sub-domain associated with the calling device on an external
 * incoming call (`APPLICATION 5`; ECMA-269 §12.3.3). Present only
 * for inbound calls that use an NID; shall be included on all
 * external incoming calls.
 *
 * Not ANI/CLID/SID — that is `CallingDeviceID`.
 *
 * - `deviceIdentifier`: NID is provided.
 * - `notKnown`: NID unknown, or multiple associated calling devices
 *   (e.g. conference callback).
 * - `restricted`: encoded in ECMA-285 §9.2; ECMA-269 §12.3.3 does
 *   not assign this status.
 *
 * Never `notRequired` or `notSpecified`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatedCallingDeviceID ::=  [APPLICATION 5] CHOICE
 * {    deviceIdentifier             DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type AssociatedCallingDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AssociatedCallingDeviceID: $.ASN1Decoder<AssociatedCallingDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCallingDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatedCallingDeviceID (el: _Element): AssociatedCallingDeviceID {
    if (!_cached_decoder_for_AssociatedCallingDeviceID) { _cached_decoder_for_AssociatedCallingDeviceID = $._decode_explicit<AssociatedCallingDeviceID>(() => $._decode_inextensible_choice<AssociatedCallingDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_AssociatedCallingDeviceID(el);
}

let _cached_encoder_for_AssociatedCallingDeviceID: $.ASN1Encoder<AssociatedCallingDeviceID> | null = null;

/**
 * @summary Encodes a(n) AssociatedCallingDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCallingDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatedCallingDeviceID (value: AssociatedCallingDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatedCallingDeviceID) { _cached_encoder_for_AssociatedCallingDeviceID = $._encode_explicit(_TagClass.application, 5, () => $._encode_choice<AssociatedCallingDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_AssociatedCallingDeviceID(value, elGetter);
}


/* eslint-enable */
