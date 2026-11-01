/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_documentLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-documentLocation              OBJECT IDENTIFIER ::= { id-pilotAttributeType 15 }
 * ```
 * 
 * @constant
 */
export
const id_at_documentLocation: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], id_pilotAttributeType);

/* eslint-enable */

