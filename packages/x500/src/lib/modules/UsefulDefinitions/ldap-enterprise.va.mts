/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { internet } from "../UsefulDefinitions/internet.va.mjs";
/**
 * @summary ldap_enterprise
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-enterprise     ID ::= {internet private(4) enterprise(1)}
 * ```
 *
 * @constant
 */
export const ldap_enterprise: ID = _OID.fromParts(
    [/* private */ 4, /* enterprise */ 1],
    internet
);

/* eslint-enable */
