/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_personalTitle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-personalTitle                 OBJECT IDENTIFIER ::= { id-pilotAttributeType 40 }
 * ```
 * 
 * @constant
 */
export
const id_at_personalTitle: OBJECT_IDENTIFIER = _OID.fromParts([
    40,
], id_pilotAttributeType);

/* eslint-enable */

