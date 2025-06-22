/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary operationalAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalAttributeType                 ID ::= {ds 18}
 * ```
 *
 * @constant
 */
export const operationalAttributeType: ID = _OID.fromParts([18], ds);

/* eslint-enable */
