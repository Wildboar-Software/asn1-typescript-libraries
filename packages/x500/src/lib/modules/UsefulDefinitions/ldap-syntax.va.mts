/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.mjs";
/**
 * @summary ldap_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-syntax         ID ::= {ldap-wall 115 121 1}
 * ```
 *
 * @constant
 */
export const ldap_syntax: ID = _OID.fromParts([115, 121, 1], ldap_wall);

/* eslint-enable */
