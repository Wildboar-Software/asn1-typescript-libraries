/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS3-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS3-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-scf OBJECT IDENTIFIER ::= {id-rosObject scf(1)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf */ 1,
], id_rosObject);

/* eslint-enable */
