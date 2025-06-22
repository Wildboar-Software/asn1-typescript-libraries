/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { algorithm } from "../ANSI-X9-42/algorithm.va.mjs";

/**
 * @summary tripleDES
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tripleDES     OBJECT IDENTIFIER ::= { algorithm triple-des(2) }
 * ```
 *
 * @constant
 */
export const tripleDES: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* triple-des */ 2],
    algorithm
);

/* eslint-enable */
