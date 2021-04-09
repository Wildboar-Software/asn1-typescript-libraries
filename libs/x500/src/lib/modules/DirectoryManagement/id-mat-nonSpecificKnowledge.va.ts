/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_nonSpecificKnowledge */
/**
 * @summary id_mat_nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-nonSpecificKnowledge OBJECT IDENTIFIER ::= {id-mat 139}
 * ```
 *
 * @constant
 */
export const id_mat_nonSpecificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [139],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_nonSpecificKnowledge */

/* eslint-enable */
