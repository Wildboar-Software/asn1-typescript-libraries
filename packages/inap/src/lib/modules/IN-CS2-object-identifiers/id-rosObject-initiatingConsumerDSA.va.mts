/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../IN-CS2-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_initiatingConsumerDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-initiatingConsumerDSA OBJECT IDENTIFIER ::= {id-rosObject 11}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_initiatingConsumerDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_rosObject);

/* eslint-enable */
