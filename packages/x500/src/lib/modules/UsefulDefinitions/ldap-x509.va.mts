/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_dir } from "../UsefulDefinitions/ldap-dir.va.mjs";
/**
 * @summary ldap_x509
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-x509           ID ::= {ldap-dir x509(15)}
 * ```
 *
 * @constant
 */
export const ldap_x509: ID = _OID.fromParts([/* x509 */ 15], ldap_dir);

/* eslint-enable */
