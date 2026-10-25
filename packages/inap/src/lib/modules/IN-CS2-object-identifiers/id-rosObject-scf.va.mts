/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-scf OBJECT IDENTIFIER ::= {id-rosObject 4}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_rosObject);

/* eslint-enable */
