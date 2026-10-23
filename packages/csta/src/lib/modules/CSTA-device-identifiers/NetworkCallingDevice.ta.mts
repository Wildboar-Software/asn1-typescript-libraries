/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";



/**
 * @summary NetworkCallingDevice
 * @description
 *
 * Synonym for `NetworkCallingDeviceID` (ECMA-285 §9.2). See that
 * type for network-provided calling-device semantics
 * (ECMA-269 §12.3.23).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCallingDevice  ::=  NetworkCallingDeviceID
 * ```
 */
export
type NetworkCallingDevice = NetworkCallingDeviceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCallingDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NetworkCallingDevice: $.ASN1Decoder<NetworkCallingDevice> = _decode_NetworkCallingDeviceID;

/**
 * @summary Encodes a(n) NetworkCallingDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCallingDevice, encoded as an ASN.1 Element.
 */
export const _encode_NetworkCallingDevice: (value: NetworkCallingDevice, elGetter: $.ASN1Encoder<any>) => _Element = _encode_NetworkCallingDeviceID;


/* eslint-enable */
