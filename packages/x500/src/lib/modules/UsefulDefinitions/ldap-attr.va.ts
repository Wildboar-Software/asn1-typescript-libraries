/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { ldap_wall } from "../UsefulDefinitions/ldap-wall.va.js";

/* START_OF_SYMBOL_DEFINITION ldap_attr */
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
export const ldap_attr: ID = new _OID([101, 120], ldap_wall);
/* END_OF_SYMBOL_DEFINITION ldap_attr */

/* eslint-enable */
