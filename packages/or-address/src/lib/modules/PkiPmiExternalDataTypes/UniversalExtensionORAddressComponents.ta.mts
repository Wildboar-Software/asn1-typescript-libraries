/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalExtensionORAddressComponents
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionORAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionORAddressComponents = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionORAddressComponents} The decoded data structure.
 */
export const _decode_UniversalExtensionORAddressComponents: $.ASN1Decoder<UniversalExtensionORAddressComponents> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export const _encode_UniversalExtensionORAddressComponents: $.ASN1Encoder<UniversalExtensionORAddressComponents> = _encode_UniversalPDSParameter;


/* eslint-enable */
