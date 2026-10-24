/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS3-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS3-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_cusf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-cusf OBJECT IDENTIFIER ::= {id-rosObject cusf(5)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_cusf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf */ 5,
], id_rosObject);

/* eslint-enable */
