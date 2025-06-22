/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary dsaOperationalAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaOperationalAttribute                  ID ::= {ds 12}
 * ```
 *
 * @constant
 */
export const dsaOperationalAttribute: ID = _OID.fromParts([12], ds);

/* eslint-enable */
