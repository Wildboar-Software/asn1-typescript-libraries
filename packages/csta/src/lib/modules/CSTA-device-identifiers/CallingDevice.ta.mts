/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";



/**
 * @summary CallingDevice
 * @description
 *
 * Synonym for `CallingDeviceID` (ECMA-285 §9.2). See that type for
 * calling-device semantics (ECMA-269 §12.3.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingDevice  ::=  CallingDeviceID
 * ```
 */
export
type CallingDevice = CallingDeviceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CallingDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallingDevice: $.ASN1Decoder<CallingDevice> = _decode_CallingDeviceID;

/**
 * @summary Encodes a(n) CallingDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingDevice, encoded as an ASN.1 Element.
 */
export const _encode_CallingDevice: $.ASN1Encoder<CallingDevice> = _encode_CallingDeviceID;


/* eslint-enable */
