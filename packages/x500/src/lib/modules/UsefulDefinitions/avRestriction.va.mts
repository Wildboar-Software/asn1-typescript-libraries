/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary avRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avRestriction                            ID ::= {ds 41}
 * ```
 *
 * @constant
 */
export const avRestriction: ID = _OID.fromParts([41], ds);

/* eslint-enable */
