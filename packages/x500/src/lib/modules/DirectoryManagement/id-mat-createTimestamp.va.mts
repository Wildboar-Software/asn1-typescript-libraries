/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-createTimestamp OBJECT IDENTIFIER ::= {id-mat 125}
 * ```
 *
 * @constant
 */
export const id_mat_createTimestamp: OBJECT_IDENTIFIER = new _OID(
    [125],
    id_mat
);

/* eslint-enable */
