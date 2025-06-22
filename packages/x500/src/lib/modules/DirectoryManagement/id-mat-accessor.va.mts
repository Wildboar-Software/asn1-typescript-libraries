/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
export const id_mat_accessor: OBJECT_IDENTIFIER = _OID.fromParts([100], id_mat);

/* eslint-enable */
