/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { type CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";



/**
 * @summary CalledDevice
 * @description
 *
 * Synonym for `CalledDeviceID` (ECMA-285 §9.2). See that type for
 * originally-called-device semantics (ECMA-269 §12.3.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledDevice  ::=  CalledDeviceID
 * ```
 */
export
type CalledDevice = CalledDeviceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CalledDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CalledDevice: $.ASN1Decoder<CalledDevice> = _decode_CalledDeviceID;

/**
 * @summary Encodes a(n) CalledDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledDevice, encoded as an ASN.1 Element.
 */
export const _encode_CalledDevice: $.ASN1Encoder<CalledDevice> = _encode_CalledDeviceID;


/* eslint-enable */
