/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary NetworkCallingDeviceID
 * @description
 *
 * Calling-device information supplied by the network over an NID on
 * an external incoming call (`APPLICATION 7`; ECMA-269 §12.3.23).
 * Typically ANI, CLID, SID, or equivalent digits.
 *
 * Set when the call is created and kept while the NID of the original
 * calling device remains in the call, even after transfer from the
 * original called device. Unlike `CallingDeviceID`, this does not
 * change on transfer or conference for that reason.
 *
 * - `deviceIdentifier`: network calling info is provided.
 * - `notKnown`: switching function cannot provide it.
 * - `restricted`: withheld for regulatory or privacy reasons.
 *
 * Never `notRequired` or `notSpecified`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCallingDeviceID ::=  [APPLICATION 7] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type NetworkCallingDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NetworkCallingDeviceID: $.ASN1Decoder<NetworkCallingDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCallingDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCallingDeviceID (el: _Element): NetworkCallingDeviceID {
    if (!_cached_decoder_for_NetworkCallingDeviceID) { _cached_decoder_for_NetworkCallingDeviceID = $._decode_explicit<NetworkCallingDeviceID>(() => $._decode_inextensible_choice<NetworkCallingDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_NetworkCallingDeviceID(el);
}

let _cached_encoder_for_NetworkCallingDeviceID: $.ASN1Encoder<NetworkCallingDeviceID> | null = null;

/**
 * @summary Encodes a(n) NetworkCallingDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCallingDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCallingDeviceID (value: NetworkCallingDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCallingDeviceID) { _cached_encoder_for_NetworkCallingDeviceID = $._encode_explicit(_TagClass.application, 7, () => $._encode_choice<NetworkCallingDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_NetworkCallingDeviceID(value, elGetter);
}


/* eslint-enable */
