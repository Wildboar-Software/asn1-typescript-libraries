/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_generationQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-generationQualifier                 OBJECT IDENTIFIER ::= {id-at 44}
 * ```
 *
 * @constant
 */
export const id_at_generationQualifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [44],
    id_at
);

/* eslint-enable */
