/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";



/**
 * @summary AssociatedCalledDevice
 * @description
 *
 * Synonym for `AssociatedCalledDeviceID` (ECMA-285 §9.2). See that
 * type for NID-of-called-device semantics (ECMA-269 §12.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatedCalledDevice  ::=  AssociatedCalledDeviceID
 * ```
 */
export
type AssociatedCalledDevice = AssociatedCalledDeviceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCalledDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssociatedCalledDevice: $.ASN1Decoder<AssociatedCalledDevice> = _decode_AssociatedCalledDeviceID;

/**
 * @summary Encodes a(n) AssociatedCalledDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCalledDevice, encoded as an ASN.1 Element.
 */
export const _encode_AssociatedCalledDevice: (value: AssociatedCalledDevice, elGetter: $.ASN1Encoder<any>) => _Element = _encode_AssociatedCalledDeviceID;


/* eslint-enable */
