/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary LocalPostalAttributes
 * @description
 *
 * Locus of distribution other than `physical-delivery-office-name`, e.g. a geographical
 * area (ITU-T X.402 (1999), §18.3.6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalPostalAttributes  ::=  PDSParameter
 * ```
 */
export type LocalPostalAttributes = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalPostalAttributes} The decoded data structure.
 */
export const _decode_LocalPostalAttributes: $.ASN1Decoder<LocalPostalAttributes> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) LocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalPostalAttributes, encoded as an ASN.1 Element.
 */
export const _encode_LocalPostalAttributes: $.ASN1Encoder<LocalPostalAttributes> = _encode_PDSParameter;


/* eslint-enable */
