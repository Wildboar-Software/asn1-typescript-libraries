/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary LocalDeviceID
 * @description
 *
 * Device component of a `ConnectionID` (ECMA-269 §12.3.9, §6.1.1,
 * §6.1.6; ECMA-285 §9.3).
 *
 * - `staticID`: stable `DeviceID` (e.g. E.164). Computing functions
 *   may extract this for other DeviceID parameters only if the
 *   switching function accepts it.
 * - `dynamicID`: created when the device enters the call; constant
 *   for that participation; invalid once the device leaves. Never a
 *   dialable number; never used outside the ConnectionID. Used when
 *   no unique static ID is available.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalDeviceID  ::=  CHOICE
 * {     staticID         DeviceID,
 *     dynamicID         [3] IMPLICIT         OCTET STRING }
 * ```
 */
export
type LocalDeviceID =
    { staticID: DeviceID } /* CHOICE_ALT_ROOT */
    | { dynamicID: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocalDeviceID: $.ASN1Decoder<LocalDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalDeviceID (el: _Element): LocalDeviceID {
    if (!_cached_decoder_for_LocalDeviceID) { _cached_decoder_for_LocalDeviceID = $._decode_inextensible_choice<LocalDeviceID>({
    "UNIVERSAL 16": [ "staticID", _decode_DeviceID ],
    "CONTEXT 3": [ "dynamicID", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_LocalDeviceID(el);
}

let _cached_encoder_for_LocalDeviceID: $.ASN1Encoder<LocalDeviceID> | null = null;

/**
 * @summary Encodes a(n) LocalDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_LocalDeviceID (value: LocalDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalDeviceID) { _cached_encoder_for_LocalDeviceID = $._encode_choice<LocalDeviceID>({
    "staticID": _encode_DeviceID,
    "dynamicID": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocalDeviceID(value, elGetter);
}


/* eslint-enable */
