/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va.mjs";
/**
 * @summary openLDAP_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-attributes ID ::= {ldap-openLDAP attributeType(3)}
 * ```
 *
 * @constant
 */
export const openLDAP_attributes: ID = new _OID(
    [/* attributeType */ 3],
    ldap_openLDAP
);

/* eslint-enable */
