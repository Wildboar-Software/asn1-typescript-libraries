/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_oc } from "../PKCS-9/pkcs-9-oc.va.mjs";

/**
 * @summary pkcs_9_oc_pkcsEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-oc-pkcsEntity    OBJECT IDENTIFIER ::= {pkcs-9-oc 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_oc_pkcsEntity: OBJECT_IDENTIFIER = new _OID([1], pkcs_9_oc);

/* eslint-enable */
