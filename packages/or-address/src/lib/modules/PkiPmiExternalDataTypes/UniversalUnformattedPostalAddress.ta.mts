/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalUnformattedPostalAddress
 * @description
 *
 * Universal-string unformatted postal address (ITU-T X.402 (1999), §18.3.25 / §18.5.3).
 * Language code is ignored in comparison.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalUnformattedPostalAddress  ::=
 *   UniversalOrBMPString{ub-unformatted-address-length}
 * ```
 */
export type UniversalUnformattedPostalAddress = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUnformattedPostalAddress} The decoded data structure.
 */
export const _decode_UniversalUnformattedPostalAddress: $.ASN1Decoder<UniversalUnformattedPostalAddress> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) UniversalUnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export const _encode_UniversalUnformattedPostalAddress: $.ASN1Encoder<UniversalUnformattedPostalAddress> = _encode_UniversalOrBMPString;


/* eslint-enable */
