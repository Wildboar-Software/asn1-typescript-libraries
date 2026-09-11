/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary NetworkCalledDeviceID
 * @description
 *
 * Called-device information supplied by the network over an NID on
 * an external incoming call (`APPLICATION 8`; ECMA-269 §12.3.22).
 * Typically DNIS, DID, or equivalent digits.
 *
 * Set when the call is created and kept while the NID of the original
 * calling device remains in the call. Unlike `CalledDeviceID`, this
 * does not change on transfer or conference for that reason.
 *
 * - `deviceIdentifier`: network called info is provided.
 * - `notKnown`: switching function cannot provide it.
 * - `restricted`: encoded in ECMA-285 §9.2; ECMA-269 §12.3.22 does
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
 * NetworkCalledDeviceID  ::=  [APPLICATION 8] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type NetworkCalledDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NetworkCalledDeviceID: $.ASN1Decoder<NetworkCalledDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCalledDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCalledDeviceID (el: _Element): NetworkCalledDeviceID {
    if (!_cached_decoder_for_NetworkCalledDeviceID) { _cached_decoder_for_NetworkCalledDeviceID = $._decode_explicit<NetworkCalledDeviceID>(() => $._decode_inextensible_choice<NetworkCalledDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_NetworkCalledDeviceID(el);
}

let _cached_encoder_for_NetworkCalledDeviceID: $.ASN1Encoder<NetworkCalledDeviceID> | null = null;

/**
 * @summary Encodes a(n) NetworkCalledDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCalledDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCalledDeviceID (value: NetworkCalledDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCalledDeviceID) { _cached_encoder_for_NetworkCalledDeviceID = $._encode_explicit(_TagClass.application, 8, () => $._encode_choice<NetworkCalledDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_NetworkCalledDeviceID(value, elGetter);
}


/* eslint-enable */
