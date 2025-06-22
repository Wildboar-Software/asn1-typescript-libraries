/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_masterAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-masterAccessPoint OBJECT IDENTIFIER ::= {id-mat 93}
 * ```
 *
 * @constant
 */
export const id_mat_masterAccessPoint: OBJECT_IDENTIFIER = _OID.fromParts(
    [93],
    id_mat
);

/* eslint-enable */
