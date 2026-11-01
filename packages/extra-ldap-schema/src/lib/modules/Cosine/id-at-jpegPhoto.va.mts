/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_jpegPhoto
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-jpegPhoto                     OBJECT IDENTIFIER ::= { id-pilotAttributeType 57 }
 * ```
 * 
 * @constant
 */
export
const id_at_jpegPhoto: OBJECT_IDENTIFIER = _OID.fromParts([
    57,
], id_pilotAttributeType);

/* eslint-enable */

