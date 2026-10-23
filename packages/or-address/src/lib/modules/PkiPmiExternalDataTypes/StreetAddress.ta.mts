/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary StreetAddress
 * @description
 *
 * House number, street name and type (ITU-T X.402 (1999), §18.3.22).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StreetAddress  ::=  PDSParameter
 * ```
 */
export type StreetAddress = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) StreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StreetAddress} The decoded data structure.
 */
export const _decode_StreetAddress: $.ASN1Decoder<StreetAddress> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) StreetAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreetAddress, encoded as an ASN.1 Element.
 */
export const _encode_StreetAddress: $.ASN1Encoder<StreetAddress> = _encode_PDSParameter;


/* eslint-enable */
