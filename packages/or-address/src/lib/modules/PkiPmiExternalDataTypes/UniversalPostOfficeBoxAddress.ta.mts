/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPostOfficeBoxAddress
 * @description
 *
 * A post-office-box-address is a standard attribute that specifies the number of the post
 * office box by means of which a user takes delivery of physical messages. See ITU-T X.402
 * (1999), §18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPostOfficeBoxAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPostOfficeBoxAddress = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPostOfficeBoxAddress} The decoded data structure.
 */
export const _decode_UniversalPostOfficeBoxAddress: $.ASN1Decoder<UniversalPostOfficeBoxAddress> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalPostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPostOfficeBoxAddress: $.ASN1Encoder<UniversalPostOfficeBoxAddress> = _encode_UniversalPDSParameter;


/* eslint-enable */
