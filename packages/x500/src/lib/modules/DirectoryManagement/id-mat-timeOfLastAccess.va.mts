/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_timeOfLastAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastAccess OBJECT IDENTIFIER ::= {id-mat 87}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastAccess: OBJECT_IDENTIFIER = _OID.fromParts(
    [87],
    id_mat
);

/* eslint-enable */
