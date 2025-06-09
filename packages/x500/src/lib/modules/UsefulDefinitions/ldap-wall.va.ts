/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { ldap_enterprise } from "../UsefulDefinitions/ldap-enterprise.va.js";

/* START_OF_SYMBOL_DEFINITION ldap_wall */
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
/* END_OF_SYMBOL_DEFINITION ldap_wall */

/* eslint-enable */
