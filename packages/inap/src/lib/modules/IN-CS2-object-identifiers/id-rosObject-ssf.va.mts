/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_ssf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-ssf OBJECT IDENTIFIER ::= {id-rosObject 5}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_ssf: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_rosObject);

/* eslint-enable */
