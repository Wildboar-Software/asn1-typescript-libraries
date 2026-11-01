/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_documentTitle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-documentTitle                 OBJECT IDENTIFIER ::= { id-pilotAttributeType 12 }
 * ```
 * 
 * @constant
 */
export
const id_at_documentTitle: OBJECT_IDENTIFIER = _OID.fromParts([
    12,
], id_pilotAttributeType);

/* eslint-enable */

