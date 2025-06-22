/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary attributeValueContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueContext                    ID ::= {ds 31}
 * ```
 *
 * @constant
 */
export const attributeValueContext: ID = _OID.fromParts([31], ds);

/* eslint-enable */
