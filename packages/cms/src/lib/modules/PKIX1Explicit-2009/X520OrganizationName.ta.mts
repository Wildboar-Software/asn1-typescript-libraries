/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary X520OrganizationName
 * @description
 *
 * DirectoryString CHOICE for the X.520 `organizationName` attribute type ([RFC 5280 Appendix A](https://datatracker.ietf.org/doc/html/rfc5280#appendix-A); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520OrganizationName  ::=  DirectoryString {ub-organization-name}
 * ```
 */
export type X520OrganizationName = DirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520OrganizationName} The decoded data structure.
 */
export const _decode_X520OrganizationName: $.ASN1Decoder<X520OrganizationName> = _decode_DirectoryString;

/**
 * @summary Encodes a(n) X520OrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationName, encoded as an ASN.1 Element.
 */
export const _encode_X520OrganizationName: $.ASN1Encoder<X520OrganizationName> = _encode_DirectoryString;


/* eslint-enable */
