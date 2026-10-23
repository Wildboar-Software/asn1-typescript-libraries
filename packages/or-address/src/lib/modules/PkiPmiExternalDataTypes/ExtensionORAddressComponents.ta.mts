/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary ExtensionORAddressComponents
 * @description
 *
 * Formatted-postal extra addressee information, e.g. an organizational unit (ITU-T X.402
 * (1999), §18.3.4). Named `extension-OR-address-components` in ASN.1 /
 * `extension-postal-OR-address-components` in X.402 Table 9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionORAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionORAddressComponents = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionORAddressComponents} The decoded data structure.
 */
export const _decode_ExtensionORAddressComponents: $.ASN1Decoder<ExtensionORAddressComponents> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export const _encode_ExtensionORAddressComponents: $.ASN1Encoder<ExtensionORAddressComponents> = _encode_PDSParameter;


/* eslint-enable */
