/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { us_iso } from "../AlgorithmObjectIdentifiers/us-iso.va.mjs";
/**
 * @summary ansi_x9_42
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-42              ID ::= { us-iso ansi-x942(10046) }
 * ```
 *
 * @constant
 */
export const ansi_x9_42: ID = _OID.fromParts([/* ansi-x942 */ 10046], us_iso);

/* eslint-enable */
