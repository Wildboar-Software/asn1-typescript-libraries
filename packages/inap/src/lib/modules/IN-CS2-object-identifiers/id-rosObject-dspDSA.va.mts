/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_dspDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-dspDSA OBJECT IDENTIFIER ::= {id-rosObject 10}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_dspDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], id_rosObject);

/* eslint-enable */
