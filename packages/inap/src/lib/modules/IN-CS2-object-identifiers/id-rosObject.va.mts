/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";
// export { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";


/**
 * @summary id_rosObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject OBJECT IDENTIFIER ::= {id-cs2 rosObject(25)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject: OBJECT_IDENTIFIER = _OID.fromParts([
    /* rosObject */ 25,
], id_cs2);

/* eslint-enable */
