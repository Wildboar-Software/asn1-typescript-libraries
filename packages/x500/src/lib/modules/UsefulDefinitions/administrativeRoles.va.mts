/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary administrativeRoles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRoles                      ID ::= {ds 23}
 * ```
 *
 * @constant
 */
export const administrativeRoles: ID = _OID.fromParts([23], ds);

/* eslint-enable */
