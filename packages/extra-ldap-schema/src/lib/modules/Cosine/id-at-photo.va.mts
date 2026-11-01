/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_photo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-photo                         OBJECT IDENTIFIER ::= { id-pilotAttributeType 7  }
 * ```
 * 
 * @constant
 */
export
const id_at_photo: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_pilotAttributeType);

/* eslint-enable */

