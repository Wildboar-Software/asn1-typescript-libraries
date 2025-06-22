/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_timeLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeLimitExceeded OBJECT IDENTIFIER ::= {id-mat 19}
 * ```
 *
 * @constant
 */
export const id_mat_timeLimitExceeded: OBJECT_IDENTIFIER = _OID.fromParts(
    [19],
    id_mat
);

/* eslint-enable */
