/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary accessControlSchemes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSchemes                     ID ::= {ds 28}
 * ```
 *
 * @constant
 */
export const accessControlSchemes: ID = _OID.fromParts([28], ds);

/* eslint-enable */
