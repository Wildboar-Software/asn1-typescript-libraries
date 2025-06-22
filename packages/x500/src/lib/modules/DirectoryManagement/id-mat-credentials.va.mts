/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-credentials OBJECT IDENTIFIER ::= {id-mat 127}
 * ```
 *
 * @constant
 */
export const id_mat_credentials: OBJECT_IDENTIFIER = _OID.fromParts([127], id_mat);

/* eslint-enable */
