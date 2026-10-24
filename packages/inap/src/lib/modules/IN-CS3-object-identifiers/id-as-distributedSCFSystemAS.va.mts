/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_distributedSCFSystemAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-distributedSCFSystemAS OBJECT IDENTIFIER ::= {id-as distributedSCFSystemAS(21)}
 * ```
 * 
 * @constant
 */
export
const id_as_distributedSCFSystemAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* distributedSCFSystemAS */ 21,
], id_as);

/* eslint-enable */
