/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_requestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestAuthenticationPolicy OBJECT IDENTIFIER ::= {id-mat 50}
 * ```
 *
 * @constant
 */
export const id_mat_requestAuthenticationPolicy: OBJECT_IDENTIFIER = _OID.fromParts(
    [50],
    id_mat
);

/* eslint-enable */
