/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary attributeCertificateDefinitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateDefinitions          ID ::= {module attributeCertificateDefinitions(32) 9}
 * ```
 *
 * @constant
 */
export const attributeCertificateDefinitions: ID = new _OID(
    [/* attributeCertificateDefinitions */ 32, 9],
    module_
);

/* eslint-enable */
