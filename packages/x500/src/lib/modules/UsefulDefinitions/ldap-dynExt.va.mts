/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.mjs";
/**
 * @summary ldap_dynExt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dynExt         ID ::= {ldap-wall 101 119}
 * ```
 *
 * @constant
 */
export const ldap_dynExt: ID = _OID.fromParts([101, 119], ldap_wall);

/* eslint-enable */
