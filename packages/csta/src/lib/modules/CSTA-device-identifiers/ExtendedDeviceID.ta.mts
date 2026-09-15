/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary ExtendedDeviceID
 * @description
 *
 * Device ID plus status when an actual identifier may be omitted
 * (`APPLICATION 9`; ECMA-269 §6.1.1; ECMA-285 §9.2).
 *
 * - `deviceIdentifier`: identifier is provided.
 * - `notKnown`: switching function cannot provide the ID but knows
 *   the device exists.
 * - `restricted`: cannot be given for regulatory or privacy reasons.
 *
 * `notRequired` and `notSpecified` are not used here; they appear on
 * `RedirectionDeviceID` (ECMA-269 §12.3.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedDeviceID ::=  [APPLICATION 9] CHOICE
 * {    deviceIdentifier            DeviceID,
 *     notKnown                [ 7] IMPLICIT     NULL,
 *     restricted                [ 8] IMPLICIT     NULL }
 * ```
 */
export
type ExtendedDeviceID =
    { deviceIdentifier: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedDeviceID: $.ASN1Decoder<ExtendedDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedDeviceID (el: _Element): ExtendedDeviceID {
    if (!_cached_decoder_for_ExtendedDeviceID) { _cached_decoder_for_ExtendedDeviceID = $._decode_explicit<ExtendedDeviceID>(() => $._decode_inextensible_choice<ExtendedDeviceID>({
    "UNIVERSAL 16": [ "deviceIdentifier", _decode_DeviceID ],
    "CONTEXT 7": [ "notKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
})); }
    return _cached_decoder_for_ExtendedDeviceID(el);
}

let _cached_encoder_for_ExtendedDeviceID: $.ASN1Encoder<ExtendedDeviceID> | null = null;

/**
 * @summary Encodes a(n) ExtendedDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedDeviceID (value: ExtendedDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedDeviceID) { _cached_encoder_for_ExtendedDeviceID = $._encode_explicit(_TagClass.application, 9, () => $._encode_choice<ExtendedDeviceID>({
    "deviceIdentifier": _encode_DeviceID,
    "notKnown": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "restricted": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_ExtendedDeviceID(value, elGetter);
}


/* eslint-enable */
