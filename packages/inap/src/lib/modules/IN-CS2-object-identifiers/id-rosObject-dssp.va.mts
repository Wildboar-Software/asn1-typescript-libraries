/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_dssp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-dssp OBJECT IDENTIFIER ::= {id-rosObject 8}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_dssp: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_rosObject);

/* eslint-enable */
