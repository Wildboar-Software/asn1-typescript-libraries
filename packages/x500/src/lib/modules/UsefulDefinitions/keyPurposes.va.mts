/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary keyPurposes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyPurposes                              ID ::= {ds 38}
 * ```
 *
 * @constant
 */
export const keyPurposes: ID = _OID.fromParts([38], ds);

/* eslint-enable */
