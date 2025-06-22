/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va.mjs";
/**
 * @summary openLDAP_controls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-controls   ID ::= {ldap-openLDAP controls(10)}
 * ```
 *
 * @constant
 */
export const openLDAP_controls: ID = _OID.fromParts(
    [/* controls */ 10],
    ldap_openLDAP
);

/* eslint-enable */
