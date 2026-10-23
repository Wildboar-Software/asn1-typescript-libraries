/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalCommonName
 * @description
 *
 * A common-name is a standard attribute that identifies a user or DL relative to the
 * entity denoted by another attribute (e.g., an organization-name). The value of a
 * common-name is a Printable String, Teletex String, Universal String, or a combination of
 * these types. See ITU-T X.402 (1999), §18.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalCommonName  ::=  UniversalOrBMPString{ub-common-name-length}
 * ```
 */
export type UniversalCommonName = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalCommonName} The decoded data structure.
 */
export const _decode_UniversalCommonName: $.ASN1Decoder<UniversalCommonName> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) UniversalCommonName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalCommonName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalCommonName: $.ASN1Encoder<UniversalCommonName> = _encode_UniversalOrBMPString;


/* eslint-enable */
