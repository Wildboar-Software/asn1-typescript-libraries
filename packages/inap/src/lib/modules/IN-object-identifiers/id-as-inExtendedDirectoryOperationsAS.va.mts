/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_inExtendedDirectoryOperationsAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-inExtendedDirectoryOperationsAS OBJECT IDENTIFIER ::= {id-as inExtendedDirectoryOperationsAS(3)}
 * ```
 * 
 * @constant
 */
export
const id_as_inExtendedDirectoryOperationsAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inExtendedDirectoryOperationsAS */ 3,
], id_as);

/* eslint-enable */
