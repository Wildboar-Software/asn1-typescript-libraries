/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary scheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scheme         OBJECT IDENTIFIER ::= { ansi-X9-42 schemes(3) }
 * ```
 *
 * @constant
 */
export const scheme: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* schemes */ 3],
    ansi_X9_42
);

/* eslint-enable */
