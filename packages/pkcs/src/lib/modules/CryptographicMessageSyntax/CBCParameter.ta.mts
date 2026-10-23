/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IV,
    _decode_IV,
    _encode_IV,
} from "../CryptographicMessageSyntax/IV.ta.mjs";

/**
 * @summary CBCParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBCParameter  ::=  IV
 * ```
 */
export type CBCParameter = IV; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CBCParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CBCParameter} The decoded data structure.
 */
export const _decode_CBCParameter: $.ASN1Decoder<CBCParameter> = _decode_IV;

/**
 * @summary Encodes a(n) CBCParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CBCParameter, encoded as an ASN.1 Element.
 */
export const _encode_CBCParameter: $.ASN1Encoder<CBCParameter> = _encode_IV;


/* eslint-enable */
