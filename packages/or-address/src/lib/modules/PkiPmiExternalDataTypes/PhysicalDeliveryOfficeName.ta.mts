/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PhysicalDeliveryOfficeName
 * @description
 *
 * City/village of the delivering post office (ITU-T X.402 (1999), §18.3.14).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeName} The decoded data structure.
 */
export const _decode_PhysicalDeliveryOfficeName: $.ASN1Decoder<PhysicalDeliveryOfficeName> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export const _encode_PhysicalDeliveryOfficeName: $.ASN1Encoder<PhysicalDeliveryOfficeName> = _encode_PDSParameter;


/* eslint-enable */
