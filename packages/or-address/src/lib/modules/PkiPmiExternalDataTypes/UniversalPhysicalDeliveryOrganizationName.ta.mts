/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPhysicalDeliveryOrganizationName
 * @description
 *
 * An organization-name is a standard attribute that identifies an organization. The value
 * of an organization-name is a Printable String, Teletex String, Universal String, or a
 * combination of these types. See ITU-T X.402 (1999), §18.3.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOrganizationName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOrganizationName = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOrganizationName} The decoded data structure.
 */
export const _decode_UniversalPhysicalDeliveryOrganizationName: $.ASN1Decoder<UniversalPhysicalDeliveryOrganizationName> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPhysicalDeliveryOrganizationName: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName> = _encode_UniversalPDSParameter;


/* eslint-enable */
