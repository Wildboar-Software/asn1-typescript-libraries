/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-specificKnowledge OBJECT IDENTIFIER ::= {id-mat 144}
 * ```
 *
 * @constant
 */
export const id_mat_specificKnowledge: OBJECT_IDENTIFIER = _OID.fromParts(
    [144],
    id_mat
);

/* eslint-enable */
