/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.mjs";
/**
 * @summary ldap_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-match          ID ::= {ldap-wall 109 114}
 * ```
 *
 * @constant
 */
export const ldap_match: ID = new _OID([109, 114], ldap_wall);

/* eslint-enable */
