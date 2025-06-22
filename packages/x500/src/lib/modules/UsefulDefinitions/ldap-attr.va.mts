/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.mjs";
/**
 * @summary ldap_attr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-attr           ID ::= {ldap-wall 101 120}
 * ```
 *
 * @constant
 */
export const ldap_attr: ID = _OID.fromParts([101, 120], ldap_wall);

/* eslint-enable */
