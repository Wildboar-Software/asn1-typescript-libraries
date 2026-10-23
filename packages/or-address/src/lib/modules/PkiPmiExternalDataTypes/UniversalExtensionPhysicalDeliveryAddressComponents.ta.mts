/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * An is a standard attribute that specifies, in a postal address, additional information
 * necessary to identify the exact point of delivery (e.g., room and floor numbers in a
 * large building). The value of an extension-physical-delivery-address-components is a
 * Printable String, Teletex String, Universal String, or a combination of these types. See
 * ITU-T X.402 (1999), §18.3.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionPhysicalDeliveryAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionPhysicalDeliveryAddressComponents = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export const _decode_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<UniversalExtensionPhysicalDeliveryAddressComponents> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export const _encode_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents> = _encode_UniversalPDSParameter;


/* eslint-enable */
