/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../SDFProtocolObjectIdentifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../SDFProtocolObjectIdentifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_directory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-directory OBJECT IDENTIFIER ::= {id-rosObject 2}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_directory: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_rosObject);

/* eslint-enable */
