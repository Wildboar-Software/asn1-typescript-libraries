/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va.mjs";
/**
 * @summary anyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * anyPolicy OBJECT IDENTIFIER ::= {id-ce-certificatePolicies 0}
 * ```
 *
 * @constant
 */
export const anyPolicy: OBJECT_IDENTIFIER = _OID.fromParts(
    [0],
    id_ce_certificatePolicies
);

/* eslint-enable */
