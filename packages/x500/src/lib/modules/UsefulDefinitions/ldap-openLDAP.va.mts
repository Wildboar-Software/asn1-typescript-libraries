/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.mjs";
/**
 * @summary ldap_openLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-openLDAP       ID ::= {ldap-enterprise openLDAP(4203) ldap(1)}
 * ```
 *
 * @constant
 */
export const ldap_openLDAP: ID = _OID.fromParts(
    [/* openLDAP */ 4203, /* ldap */ 1],
    ldap_enterprise
);

/* eslint-enable */
