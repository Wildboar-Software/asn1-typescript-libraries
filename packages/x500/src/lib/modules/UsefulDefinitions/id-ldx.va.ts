/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { ldap_x509 } from "../UsefulDefinitions/ldap-x509.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { ldap_x509 } from "../UsefulDefinitions/ldap-x509.va.js";

/* START_OF_SYMBOL_DEFINITION id_ldx */
/**
 * @summary id_ldx
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx                                   ID ::= ldap-x509
 * ```
 *
 * @constant
 */
export const id_ldx: ID = ldap_x509;
/* END_OF_SYMBOL_DEFINITION id_ldx */

/* eslint-enable */
