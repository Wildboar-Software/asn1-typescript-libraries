/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
export const id_mat_allowedInfoService: OBJECT_IDENTIFIER = _OID.fromParts(
    [101],
    id_mat
);

/* eslint-enable */
