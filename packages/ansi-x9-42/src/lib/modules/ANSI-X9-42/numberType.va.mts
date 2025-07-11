/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary numberType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numberType OBJECT IDENTIFIER ::= { ansi-X9-42 numberTypes(2) }
 * ```
 *
 * @constant
 */
export const numberType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* numberTypes */ 2],
    ansi_X9_42
);

/* eslint-enable */
