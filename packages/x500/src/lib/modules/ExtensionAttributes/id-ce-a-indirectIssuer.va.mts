/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_a_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-indirectIssuer                     OBJECT IDENTIFIER ::= {id-ce 61 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_indirectIssuer: OBJECT_IDENTIFIER = _OID.fromParts(
    [61, 1],
    id_ce
);

/* eslint-enable */
