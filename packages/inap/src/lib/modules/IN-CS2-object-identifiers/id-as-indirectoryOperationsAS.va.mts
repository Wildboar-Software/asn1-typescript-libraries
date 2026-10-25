/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS2-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS2-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_indirectoryOperationsAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-indirectoryOperationsAS OBJECT IDENTIFIER ::= {id-as 1}
 * ```
 * 
 * @constant
 */
export
const id_as_indirectoryOperationsAS: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_as);

/* eslint-enable */
