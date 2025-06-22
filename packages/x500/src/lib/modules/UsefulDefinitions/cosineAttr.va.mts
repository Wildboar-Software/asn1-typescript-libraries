/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { cosine } from "../UsefulDefinitions/cosine.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary cosineAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosineAttr          ID ::= {cosine pilotAttributeType(1)}
 * ```
 *
 * @constant
 */
export const cosineAttr: ID = _OID.fromParts([/* pilotAttributeType */ 1], cosine);

/* eslint-enable */
