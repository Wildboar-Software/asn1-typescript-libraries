/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary nameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForm                                 ID ::= {ds 15}
 * ```
 *
 * @constant
 */
export const nameForm: ID = _OID.fromParts([15], ds);

/* eslint-enable */
