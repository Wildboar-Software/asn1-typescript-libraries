/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPhysicalDeliveryOfficeNumber
 * @description
 *
 * A physical-delivery-office-number is a standard attribute that distinguishes among
 * several post offices denoted by a single physical-delivery-office-name. The value of a
 * physical-delivery-office-number is a Printable String, Teletex String, Universal String,
 * or a combination of these types. See ITU-T X.402 (1999), §18.3.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeNumber  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeNumber = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export const _decode_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Decoder<UniversalPhysicalDeliveryOfficeNumber> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber> = _encode_UniversalPDSParameter;


/* eslint-enable */
