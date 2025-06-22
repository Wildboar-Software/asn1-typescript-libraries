/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary fieldType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fieldType     OBJECT IDENTIFIER ::= { ansi-X9-42 fieldType(0) }
 * ```
 *
 * @constant
 */
export const fieldType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* fieldType */ 0],
    ansi_X9_42
);

/* eslint-enable */
