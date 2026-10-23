/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary ExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * Exact point of delivery, e.g. room and floor (ITU-T X.402 (1999), §18.3.5).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionPhysicalDeliveryAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionPhysicalDeliveryAddressComponents = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export const _decode_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<ExtensionPhysicalDeliveryAddressComponents> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) ExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export const _encode_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents> = _encode_PDSParameter;


/* eslint-enable */
