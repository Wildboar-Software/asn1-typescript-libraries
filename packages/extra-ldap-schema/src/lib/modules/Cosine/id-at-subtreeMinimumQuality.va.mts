/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_subtreeMinimumQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-subtreeMinimumQuality         OBJECT IDENTIFIER ::= { id-pilotAttributeType 51 }
 * ```
 * 
 * @constant
 */
export
const id_at_subtreeMinimumQuality: OBJECT_IDENTIFIER = _OID.fromParts([
    51,
], id_pilotAttributeType);

/* eslint-enable */

