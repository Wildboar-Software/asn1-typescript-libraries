/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_allowedInfoService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-allowedInfoService OBJECT IDENTIFIER ::= {id-mat 101}
 * ```
 *
 * @constant
 */
export const id_mat_allowedInfoService: OBJECT_IDENTIFIER = new _OID(
    [101],
    id_mat
);

/* eslint-enable */
