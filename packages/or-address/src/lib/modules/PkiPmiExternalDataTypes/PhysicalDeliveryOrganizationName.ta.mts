/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PhysicalDeliveryOrganizationName
 * @description
 *
 * Postal patron's organization (ITU-T X.402 (1999), §18.3.16).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOrganizationName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOrganizationName = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOrganizationName} The decoded data structure.
 */
export const _decode_PhysicalDeliveryOrganizationName: $.ASN1Decoder<PhysicalDeliveryOrganizationName> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export const _encode_PhysicalDeliveryOrganizationName: $.ASN1Encoder<PhysicalDeliveryOrganizationName> = _encode_PDSParameter;


/* eslint-enable */
