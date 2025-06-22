/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry                                 ID ::= {ds 17}
 * ```
 *
 * @constant
 */
export const subentry: ID = _OID.fromParts([17], ds);

/* eslint-enable */
