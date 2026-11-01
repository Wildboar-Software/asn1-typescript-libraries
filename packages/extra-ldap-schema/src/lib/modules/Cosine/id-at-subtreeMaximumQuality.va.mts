/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_subtreeMaximumQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-subtreeMaximumQuality         OBJECT IDENTIFIER ::= { id-pilotAttributeType 52 }
 * ```
 * 
 * @constant
 */
export
const id_at_subtreeMaximumQuality: OBJECT_IDENTIFIER = _OID.fromParts([
    52,
], id_pilotAttributeType);

/* eslint-enable */

