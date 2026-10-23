/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_inSESEAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-inSESEAS OBJECT IDENTIFIER ::= {id-as inSESEAS(25)}
 * ```
 * 
 * @constant
 */
export
const id_as_inSESEAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inSESEAS */ 25,
], id_as);

/* eslint-enable */
