/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.mjs";
/**
 * @summary ldap_wall
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-wall           ID ::= {ldap-enterprise wahl(1466)}
 * ```
 *
 * @constant
 */
export const ldap_wall: ID = new _OID([/* wahl */ 1466], ldap_enterprise);

/* eslint-enable */
