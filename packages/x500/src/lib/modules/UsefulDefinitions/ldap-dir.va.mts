/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { internet } from "../UsefulDefinitions/internet.va.mjs";
/**
 * @summary ldap_dir
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dir            ID ::= {internet directory(1)}
 * ```
 *
 * @constant
 */
export const ldap_dir: ID = _OID.fromParts([/* directory */ 1], internet);

/* eslint-enable */
