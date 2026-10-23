/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_respondingConsumerDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-respondingConsumerDSA OBJECT IDENTIFIER ::= {id-rosObject 13}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_respondingConsumerDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], id_rosObject);

/* eslint-enable */
