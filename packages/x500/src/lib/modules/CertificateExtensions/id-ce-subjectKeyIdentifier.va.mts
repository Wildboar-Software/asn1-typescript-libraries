/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectKeyIdentifier               OBJECT IDENTIFIER ::= {id-ce 14}
 * ```
 *
 * @constant
 */
export const id_ce_subjectKeyIdentifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [14],
    id_ce
);

/* eslint-enable */
