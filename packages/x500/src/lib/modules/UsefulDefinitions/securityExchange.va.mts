/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary securityExchange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityExchange                         ID ::= {ds 32}
 * ```
 *
 * @constant
 */
export const securityExchange: ID = _OID.fromParts([32], ds);

/* eslint-enable */
