/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_sizeLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-sizeLimitExceeded OBJECT IDENTIFIER ::= {id-mat 20}
 * ```
 *
 * @constant
 */
export const id_mat_sizeLimitExceeded: OBJECT_IDENTIFIER = _OID.fromParts(
    [20],
    id_mat
);

/* eslint-enable */
