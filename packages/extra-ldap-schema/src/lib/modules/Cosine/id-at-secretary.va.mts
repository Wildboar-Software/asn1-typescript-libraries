/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_secretary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-secretary                     OBJECT IDENTIFIER ::= { id-pilotAttributeType 21 }
 * ```
 * 
 * @constant
 */
export
const id_at_secretary: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], id_pilotAttributeType);

/* eslint-enable */

