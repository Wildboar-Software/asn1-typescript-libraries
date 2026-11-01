/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_documentPublisher
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-documentPublisher             OBJECT IDENTIFIER ::= { id-pilotAttributeType 56 }
 * ```
 * 
 * @constant
 */
export
const id_at_documentPublisher: OBJECT_IDENTIFIER = _OID.fromParts([
    56,
], id_pilotAttributeType);

/* eslint-enable */

