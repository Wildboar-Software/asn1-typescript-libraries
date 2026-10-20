/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_srf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-srf OBJECT IDENTIFIER ::= {id-rosObject 6}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_srf: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_rosObject);

/* eslint-enable */
