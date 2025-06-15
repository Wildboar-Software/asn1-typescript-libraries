/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_accessor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accessor OBJECT IDENTIFIER ::= {id-mat 100}
 * ```
 *
 * @constant
 */
export const id_mat_accessor: OBJECT_IDENTIFIER = new _OID([100], id_mat);

/* eslint-enable */
