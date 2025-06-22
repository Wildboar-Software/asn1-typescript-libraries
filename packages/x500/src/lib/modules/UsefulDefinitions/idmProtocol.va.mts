/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary idmProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * idmProtocol                              ID ::= {ds 33}
 * ```
 *
 * @constant
 */
export const idmProtocol: ID = _OID.fromParts([33], ds);

/* eslint-enable */
