/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPhysicalDeliveryPersonalName
 * @description
 *
 * A personal-name is a standard attribute that identifies a person relative to the entity
 * denoted by another attribute (e.g., an organization-name). See ITU-T X.402 (1999), §18.3.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryPersonalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryPersonalName} The decoded data structure.
 */
export const _decode_UniversalPhysicalDeliveryPersonalName: $.ASN1Decoder<UniversalPhysicalDeliveryPersonalName> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPhysicalDeliveryPersonalName: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName> = _encode_UniversalPDSParameter;


/* eslint-enable */
