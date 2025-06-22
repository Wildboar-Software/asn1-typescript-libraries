/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm     OBJECT IDENTIFIER ::= { ansi-X9-42 algorithms(1) }
 * ```
 *
 * @constant
 */
export const algorithm: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* algorithms */ 1],
    ansi_X9_42
);

/* eslint-enable */
