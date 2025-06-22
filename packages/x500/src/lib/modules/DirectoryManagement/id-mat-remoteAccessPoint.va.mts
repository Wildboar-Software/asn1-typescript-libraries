/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mat } from "../DirectoryManagement/id-mat.va.mjs";
/**
 * @summary id_mat_remoteAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-remoteAccessPoint OBJECT IDENTIFIER ::= {id-mat 71}
 * ```
 *
 * @constant
 */
export const id_mat_remoteAccessPoint: OBJECT_IDENTIFIER = _OID.fromParts(
    [71],
    id_mat
);

/* eslint-enable */
