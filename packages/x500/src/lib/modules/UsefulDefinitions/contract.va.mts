/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contract                                 ID ::= {ds 26}
 * ```
 *
 * @constant
 */
export const contract: ID = _OID.fromParts([26], ds);

/* eslint-enable */
