/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_documentAuthor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-documentAuthor                OBJECT IDENTIFIER ::= { id-pilotAttributeType 14 }
 * ```
 * 
 * @constant
 */
export
const id_at_documentAuthor: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], id_pilotAttributeType);

/* eslint-enable */

