/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PostOfficeBoxAddress
 * @description
 *
 * Post-office box number assigned by the office in `physical-delivery-office-name` (ITU-T
 * X.402 (1999), §18.3.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostOfficeBoxAddress  ::=  PDSParameter
 * ```
 */
export type PostOfficeBoxAddress = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostOfficeBoxAddress} The decoded data structure.
 */
export const _decode_PostOfficeBoxAddress: $.ASN1Decoder<PostOfficeBoxAddress> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export const _encode_PostOfficeBoxAddress: $.ASN1Encoder<PostOfficeBoxAddress> = _encode_PDSParameter;


/* eslint-enable */
