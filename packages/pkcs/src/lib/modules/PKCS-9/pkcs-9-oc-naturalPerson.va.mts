/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_oc } from "../PKCS-9/pkcs-9-oc.va.mjs";

/**
 * @summary pkcs_9_oc_naturalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-oc-naturalPerson OBJECT IDENTIFIER ::= {pkcs-9-oc 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_oc_naturalPerson: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_9_oc
);

/* eslint-enable */
