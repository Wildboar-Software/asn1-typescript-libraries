/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_prohibitChaining
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-prohibitChaining OBJECT IDENTIFIER ::= {id-mat 24}
 * ```
 *
 * @constant
 */
export const id_mat_prohibitChaining: OBJECT_IDENTIFIER = _OID.fromParts(
    [24],
    id_mat
);

/* eslint-enable */
