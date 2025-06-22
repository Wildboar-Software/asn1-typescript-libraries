/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_reverseCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-reverseCredentials OBJECT IDENTIFIER ::= {id-mat 70}
 * ```
 *
 * @constant
 */
export const id_mat_reverseCredentials: OBJECT_IDENTIFIER = _OID.fromParts(
    [70],
    id_mat
);

/* eslint-enable */
