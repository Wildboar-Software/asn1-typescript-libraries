/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { us_iso } from "../AlgorithmObjectIdentifiers/us-iso.va.mjs";
/**
 * @summary ansi_x9_62
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-62              ID ::= { us-iso ansi-x962(10045) }
 * ```
 *
 * @constant
 */
export const ansi_x9_62: ID = _OID.fromParts([/* ansi-x962 */ 10045], us_iso);

/* eslint-enable */
