/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalLocalPostalAttributes
 * @description
 *
 * A local-postal-attributes is a standard attribute that identifies the locus of
 * distribution, other than that denoted by a physical-delivery-office-name attribute
 * (e.g., a geographical area), of a user's physical messages. The value of a
 * local-postal-attributes is a Printable String, Teletex String, Universal String, or a
 * combination of these types. See ITU-T X.402 (1999), §18.3.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalLocalPostalAttributes  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalLocalPostalAttributes = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalLocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalLocalPostalAttributes} The decoded data structure.
 */
export const _decode_UniversalLocalPostalAttributes: $.ASN1Decoder<UniversalLocalPostalAttributes> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalLocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalLocalPostalAttributes, encoded as an ASN.1 Element.
 */
export const _encode_UniversalLocalPostalAttributes: $.ASN1Encoder<UniversalLocalPostalAttributes> = _encode_UniversalPDSParameter;


/* eslint-enable */
