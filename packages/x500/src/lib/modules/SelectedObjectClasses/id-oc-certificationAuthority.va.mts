/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_oc } from "../UsefulDefinitions/id-oc.va.mjs";
/**
 * @summary id_oc_certificationAuthority
 * @description
 *
 * Deprecated object class (X.521 6.18). Prefer `pkiCA`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-certificationAuthority   OBJECT IDENTIFIER ::= {id-oc 16}
 * ```
 *
 * @constant
 */
export const id_oc_certificationAuthority: OBJECT_IDENTIFIER = _OID.fromParts(
    [16],
    id_oc
);

/* eslint-enable */
