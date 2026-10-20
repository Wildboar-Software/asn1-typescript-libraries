/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_rosObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject OBJECT IDENTIFIER ::= {id rosObject(25)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject: OBJECT_IDENTIFIER = _OID.fromParts([
    /* rosObject */ 25,
], id);

/* eslint-enable */
