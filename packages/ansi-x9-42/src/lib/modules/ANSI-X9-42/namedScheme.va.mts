/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary namedScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * namedScheme     OBJECT IDENTIFIER ::= { ansi-X9-42 names(4) }
 * ```
 *
 * @constant
 */
export const namedScheme: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* names */ 4],
    ansi_X9_42
);

/* eslint-enable */
