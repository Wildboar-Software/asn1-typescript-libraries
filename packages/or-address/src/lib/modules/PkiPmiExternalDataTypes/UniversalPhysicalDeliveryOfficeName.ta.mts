/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPhysicalDeliveryOfficeName
 * @description
 *
 * A physical-delivery-office-name is a standard attribute that identifies the city,
 * village, etc. in which is situated the post office through which a user takes delivery
 * of physical messages. See ITU-T X.402 (1999), §18.3.14.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeName = UniversalPDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeName} The decoded data structure.
 */
export const _decode_UniversalPhysicalDeliveryOfficeName: $.ASN1Decoder<UniversalPhysicalDeliveryOfficeName> = _decode_UniversalPDSParameter;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export const _encode_UniversalPhysicalDeliveryOfficeName: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName> = _encode_UniversalPDSParameter;


/* eslint-enable */
