/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";



/**
 * @summary LastRedirectionDevice
 * @description
 *
 * Synonym for `RedirectionDeviceID` (ECMA-285 §9.2). See that type
 * for last-redirection-device semantics (ECMA-269 §12.3.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastRedirectionDevice  ::=  RedirectionDeviceID
 * ```
 */
export
type LastRedirectionDevice = RedirectionDeviceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LastRedirectionDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LastRedirectionDevice: $.ASN1Decoder<LastRedirectionDevice> = _decode_RedirectionDeviceID;

/**
 * @summary Encodes a(n) LastRedirectionDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastRedirectionDevice, encoded as an ASN.1 Element.
 */
export const _encode_LastRedirectionDevice: $.ASN1Encoder<LastRedirectionDevice> = _encode_RedirectionDeviceID;


/* eslint-enable */
