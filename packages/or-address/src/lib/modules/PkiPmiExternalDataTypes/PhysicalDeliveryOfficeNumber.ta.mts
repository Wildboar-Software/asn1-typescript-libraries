/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PhysicalDeliveryOfficeNumber
 * @description
 *
 * Distinguishes several post offices sharing one office name (ITU-T X.402 (1999),
 * §18.3.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeNumber  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export const _decode_PhysicalDeliveryOfficeNumber: $.ASN1Decoder<PhysicalDeliveryOfficeNumber> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export const _encode_PhysicalDeliveryOfficeNumber: $.ASN1Encoder<PhysicalDeliveryOfficeNumber> = _encode_PDSParameter;


/* eslint-enable */
