/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary PhysicalDeliveryPersonalName
 * @description
 *
 * Postal patron (ITU-T X.402 (1999), §18.3.17). Not the same type as mnemonic
 * `PersonalName`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryPersonalName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryPersonalName = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryPersonalName} The decoded data structure.
 */
export const _decode_PhysicalDeliveryPersonalName: $.ASN1Decoder<PhysicalDeliveryPersonalName> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) PhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export const _encode_PhysicalDeliveryPersonalName: $.ASN1Encoder<PhysicalDeliveryPersonalName> = _encode_PDSParameter;


/* eslint-enable */
