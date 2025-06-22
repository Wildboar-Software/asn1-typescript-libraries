/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary knowledgeMatchingRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * knowledgeMatchingRule                    ID ::= {ds 14}
 * ```
 *
 * @constant
 */
export const knowledgeMatchingRule: ID = _OID.fromParts([14], ds);

/* eslint-enable */
