/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";
// export { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";


/**
 * @summary id_rosObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject OBJECT IDENTIFIER ::= {in-ds 25}
 * ```
 * 
 * @constant
 */
export
const id_rosObject: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], in_ds);

/* eslint-enable */
