/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PosteRestanteAddress
 * @description
 *
 * Code a user gives a post office to collect held physical messages (ITU-T X.402 (1999),
 * §18.3.20).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PosteRestanteAddress  ::=  PDSParameter
 * ```
 */
export type PosteRestanteAddress = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PosteRestanteAddress} The decoded data structure.
 */
export const _decode_PosteRestanteAddress: $.ASN1Decoder<PosteRestanteAddress> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PosteRestanteAddress, encoded as an ASN.1 Element.
 */
export const _encode_PosteRestanteAddress: $.ASN1Encoder<PosteRestanteAddress> = _encode_PDSParameter;


/* eslint-enable */
