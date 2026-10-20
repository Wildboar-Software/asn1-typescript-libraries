/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_aca
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca OBJECT IDENTIFIER ::= {id-cs3 aca(24)}
 * ```
 * 
 * @constant
 */
export
const id_aca: OBJECT_IDENTIFIER = _OID.fromParts([
    /* aca */ 24,
], id_cs3);

/* eslint-enable */
