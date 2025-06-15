/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { internet } from "../UsefulDefinitions/internet.va.mjs";
/**
 * @summary intSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intSecurity         ID ::= {internet security(5)}
 * ```
 *
 * @constant
 */
export const intSecurity: ID = new _OID([/* security */ 5], internet);

/* eslint-enable */
