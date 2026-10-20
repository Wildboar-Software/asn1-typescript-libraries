/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
// export { ds } from "../UsefulDefinitions/ds.va.mjs";


/**
 * @summary knowledgeMatchingRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * knowledgeMatchingRule ID ::= {ds  14}
 * ```
 * 
 * @constant
 */
export
const knowledgeMatchingRule: ID = _OID.fromParts([
    14,
], ds);

/* eslint-enable */
