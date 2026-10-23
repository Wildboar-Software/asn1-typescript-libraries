/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";
/**
 * @summary UniversalPDSParameter
 * @description
 *
 * Universal-string form of `PDSParameter` (ITU-T X.402 (1999), §18.2). Compare without the
 * language code.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPDSParameter  ::=  UniversalOrBMPString{ub-pds-parameter-length}
 * ```
 */
export type UniversalPDSParameter = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPDSParameter} The decoded data structure.
 */
export const _decode_UniversalPDSParameter: $.ASN1Decoder<UniversalPDSParameter> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) UniversalPDSParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPDSParameter, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPDSParameter: $.ASN1Encoder<UniversalPDSParameter> = _encode_UniversalOrBMPString;


/* eslint-enable */
