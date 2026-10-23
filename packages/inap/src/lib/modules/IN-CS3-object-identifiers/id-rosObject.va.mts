/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_rosObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject OBJECT IDENTIFIER ::= {id-cs3 rosObject(25)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject: OBJECT_IDENTIFIER = _OID.fromParts([
    /* rosObject */ 25,
], id_cs3);

/* eslint-enable */
