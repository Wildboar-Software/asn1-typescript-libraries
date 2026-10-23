/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalOrganizationalUnitName
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitName  ::=
 *   UniversalOrBMPString{ub-organizational-unit-name-length}
 * ```
 */
export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitName} The decoded data structure.
 */
export const _decode_UniversalOrganizationalUnitName: $.ASN1Decoder<UniversalOrganizationalUnitName> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) UniversalOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalOrganizationalUnitName: $.ASN1Encoder<UniversalOrganizationalUnitName> = _encode_UniversalOrBMPString;


/* eslint-enable */
