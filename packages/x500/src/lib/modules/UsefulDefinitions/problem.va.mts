/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * problem                                  ID ::= {ds 34}
 * ```
 *
 * @constant
 */
export const problem: ID = _OID.fromParts([34], ds);

/* eslint-enable */
