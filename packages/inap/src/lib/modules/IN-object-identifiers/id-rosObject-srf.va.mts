/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_srf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-srf OBJECT IDENTIFIER ::= {id-rosObject srf(3)}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_srf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* srf */ 3,
], id_rosObject);

/* eslint-enable */
