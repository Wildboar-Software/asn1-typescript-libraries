/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary managementObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementObject                         ID ::= {ds 30}
 * ```
 *
 * @constant
 */
export const managementObject: ID = _OID.fromParts([30], ds);

/* eslint-enable */
