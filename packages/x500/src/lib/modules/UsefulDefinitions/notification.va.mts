/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification                             ID ::= {ds 35}
 * ```
 *
 * @constant
 */
export const notification: ID = _OID.fromParts([35], ds);

/* eslint-enable */
