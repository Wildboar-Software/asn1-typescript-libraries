/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalOrganizationName
 * @description
 *
 * An organization-name is a standard attribute that identifies an organization. The value
 * of an organization-name is a Printable String, Teletex String, Universal String, or a
 * combination of these types. See ITU-T X.402 (1999), §18.3.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationName  ::=  UniversalOrBMPString{ub-organization-name-length}
 * ```
 */
export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationName} The decoded data structure.
 */
export const _decode_UniversalOrganizationName: $.ASN1Decoder<UniversalOrganizationName> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) UniversalOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalOrganizationName: $.ASN1Encoder<UniversalOrganizationName> = _encode_UniversalOrBMPString;


/* eslint-enable */
