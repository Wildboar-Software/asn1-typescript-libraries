/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary AssociatedCalledDeviceID
 * @description
 *
 * Switching-function view of the originally called side when an NID
 * is in use (`APPLICATION 6`; ECMA-269 §12.3.2). Present only on
 * external calls that use a Network Interface Device.
 *
 * Outgoing external: NID (trunk, CO line) associated with the called
 * device; mandatory on those events. Incoming external: internal
 * representation associated with the originally called device (e.g.
 * internal DNIS); optional. Not DNIS/DID digits — that is
 * `CalledDeviceID`.
 *
 * - `deviceIdentifier`: associated device is provided.
 * - `notKnown`: NID associated with the called device is unknown.
 * - `restricted`: encoded in ECMA-285 §9.2; ECMA-269 §12.3.2 does
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
 * AssociatedCalledDeviceID  ::=  [APPLICATION 6] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type AssociatedCalledDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AssociatedCalledDeviceID: $.ASN1Decoder<AssociatedCalledDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCalledDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatedCalledDeviceID (el: _Element): AssociatedCalledDeviceID {
    if (!_cached_decoder_for_AssociatedCalledDeviceID) { _cached_decoder_for_AssociatedCalledDeviceID = $._decode_explicit<AssociatedCalledDeviceID>(() => $._decode_inextensible_choice<AssociatedCalledDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_AssociatedCalledDeviceID(el);
}

let _cached_encoder_for_AssociatedCalledDeviceID: $.ASN1Encoder<AssociatedCalledDeviceID> | null = null;

/**
 * @summary Encodes a(n) AssociatedCalledDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCalledDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatedCalledDeviceID (value: AssociatedCalledDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatedCalledDeviceID) { _cached_encoder_for_AssociatedCalledDeviceID = $._encode_explicit(_TagClass.application, 6, () => $._encode_choice<AssociatedCalledDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_AssociatedCalledDeviceID(value, elGetter);
}


/* eslint-enable */
