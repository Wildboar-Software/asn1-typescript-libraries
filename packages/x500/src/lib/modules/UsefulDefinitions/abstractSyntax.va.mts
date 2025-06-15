/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary abstractSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abstractSyntax                           ID ::= {ds 9}
 * ```
 *
 * @constant
 */
export const abstractSyntax: ID = new _OID([9], ds);

/* eslint-enable */
