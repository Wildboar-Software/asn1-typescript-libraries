/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary attributeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSyntax                          ID ::= {ds 40}
 * ```
 *
 * @constant
 */
export const attributeSyntax: ID = new _OID([40], ds);

/* eslint-enable */
