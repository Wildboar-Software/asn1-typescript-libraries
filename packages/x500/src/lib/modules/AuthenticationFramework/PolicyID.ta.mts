/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta.mjs";
/**
 * @summary PolicyID
 * @description
 *
 * Alias of `CertPolicyId`: OID of a certificate policy. Compare as OID
 * equality, not string form.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyID  ::=  CertPolicyId
 * ```
 */
export type PolicyID = CertPolicyId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyID} The decoded data structure.
 */
export const _decode_PolicyID: $.ASN1Decoder<PolicyID> = _decode_CertPolicyId;

/**
 * @summary Encodes a(n) PolicyID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyID, encoded as an ASN.1 Element.
 */
export const _encode_PolicyID: $.ASN1Encoder<PolicyID> = _encode_CertPolicyId;


/* eslint-enable */
