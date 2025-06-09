/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.js";

/* START_OF_SYMBOL_DEFINITION ldap_openLDAP */
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
export const ldap_openLDAP: ID = new _OID(
    [/* openLDAP */ 4203, /* ldap */ 1],
    ldap_enterprise
);
/* END_OF_SYMBOL_DEFINITION ldap_openLDAP */

/* eslint-enable */
