/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalUniquePostalName
 * @description
 *
 * A unique-postal-name is a standard attribute that identifies the point of delivery,
 * other than that denoted by a street-address, post-office-box-address, or
 * poste-restante-address, (e.g., a building or hamlet) of a user's physical messages. The
 * value of a unique-postal-name is a Printable String, Teletex String, Universal String,
 * or a combination of these types. See ITU-T X.402 (1999), §18.3.26.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalUniquePostalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalUniquePostalName = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUniquePostalName} The decoded data structure.
 */
export const _decode_UniversalUniquePostalName: $.ASN1Decoder<UniversalUniquePostalName> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalUniquePostalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUniquePostalName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalUniquePostalName: $.ASN1Encoder<UniversalUniquePostalName> = _encode_UniversalPDSParameter;


/* eslint-enable */
