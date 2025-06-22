/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_collectiveExclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-collectiveExclusions OBJECT IDENTIFIER ::= {id-mat 123}
 * ```
 *
 * @constant
 */
export const id_mat_collectiveExclusions: OBJECT_IDENTIFIER = _OID.fromParts(
    [123],
    id_mat
);

/* eslint-enable */
