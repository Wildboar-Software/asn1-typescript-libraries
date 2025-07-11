/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
/**
 * @summary id_fieldType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-fieldType OBJECT IDENTIFIER ::= { ansi-X9-62 fieldType(1) }
 * ```
 *
 * @constant
 */
export const id_fieldType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* fieldType */ 1],
    ansi_X9_62
);

/* eslint-enable */
