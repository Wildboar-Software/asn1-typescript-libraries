/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_sdf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-sdf OBJECT IDENTIFIER ::= {id-rosObject sdf(4)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_sdf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sdf */ 4,
], id_rosObject);

/* eslint-enable */
