/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertId,
    _decode_CertId,
    _encode_CertId,
} from "../PKIXCRMF-2009/CertId.ta.mjs";

/**
 * @summary OldCertId
 * @description
 *
 * Alias for `CertId`: certificate to be updated by the current
 * request (`oldCertID` control) ([RFC 4211 §6.5](https://datatracker.ietf.org/doc/html/rfc4211#section-6.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OldCertId  ::=  CertId
 * ```
 */
export type OldCertId = CertId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OldCertId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OldCertId} The decoded data structure.
 */
export const _decode_OldCertId: $.ASN1Decoder<OldCertId> = _decode_CertId;

/**
 * @summary Encodes a(n) OldCertId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OldCertId, encoded as an ASN.1 Element.
 */
export const _encode_OldCertId: $.ASN1Encoder<OldCertId> = _encode_CertId;


/* eslint-enable */
