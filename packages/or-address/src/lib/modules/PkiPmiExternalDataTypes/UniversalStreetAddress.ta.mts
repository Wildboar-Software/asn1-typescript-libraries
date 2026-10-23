/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalStreetAddress
 * @description
 *
 * A street-address is a standard attribute that specifies the street address (e.g., house
 * number and street name and type (e.g., "Road")) at which a user takes delivery of
 * physical messages. The value of a street-address is a Printable String, Teletex String,
 * Universal String, or a combination of these types. See ITU-T X.402 (1999), §18.3.22.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalStreetAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalStreetAddress = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalStreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalStreetAddress} The decoded data structure.
 */
export const _decode_UniversalStreetAddress: $.ASN1Decoder<UniversalStreetAddress> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalStreetAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalStreetAddress, encoded as an ASN.1 Element.
 */
export const _encode_UniversalStreetAddress: $.ASN1Encoder<UniversalStreetAddress> = _encode_UniversalPDSParameter;


/* eslint-enable */
