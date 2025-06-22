/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary package_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * package                                  ID ::= {ds 27}
 * ```
 *
 * @constant
 */
export const package_: ID = _OID.fromParts([27], ds);

/* eslint-enable */
