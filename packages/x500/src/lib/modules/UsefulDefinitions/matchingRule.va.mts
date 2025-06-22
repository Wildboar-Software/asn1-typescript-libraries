/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary matchingRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRule                             ID ::= {ds 13}
 * ```
 *
 * @constant
 */
export const matchingRule: ID = _OID.fromParts([13], ds);

/* eslint-enable */
