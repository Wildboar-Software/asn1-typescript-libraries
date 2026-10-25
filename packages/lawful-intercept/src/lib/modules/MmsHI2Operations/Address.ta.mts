/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary Address
 * @description
 * 
 * One MMS address, either as text or as an encoded character string.
 * 
 * 3GPP TS 33.108, annex B.15. Clause 15.3 does not further define this alias.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Address ::=  EncodedString
 * ```
 */
export
type Address = EncodedString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Address: $.ASN1Decoder<Address> = _decode_EncodedString;

/**
 * @summary Encodes a(n) Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Address, encoded as an ASN.1 Element.
 */
export const _encode_Address: $.ASN1Encoder<Address> = _encode_EncodedString;


/* eslint-enable */
