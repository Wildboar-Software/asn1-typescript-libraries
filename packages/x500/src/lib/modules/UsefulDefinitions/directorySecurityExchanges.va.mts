/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directorySecurityExchanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directorySecurityExchanges               ID ::= {module directorySecurityExchanges (29) 9}
 * ```
 *
 * @constant
 */
export const directorySecurityExchanges: ID = _OID.fromParts(
    [/* directorySecurityExchanges */ 29, 9],
    module_
);

/* eslint-enable */
